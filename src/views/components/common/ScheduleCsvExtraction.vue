<template lang="">
  <div class="border p-1">
    <textarea
      name=""
      cols="15"
      rows="2"
      ref="csvRef"
      v-model="csvText"
      class="form-control w-100"
      placeholder="Copy/Paste from CSV"
    ></textarea>
    <div class="my-1">
      <div v-if="csvText">
        <button type="button" class="btn add-data-btn" @click="handleCSV">Submit</button>
      </div>
      <button
        type="button"
        class="btn add-data-btn d-none"
        v-if="!csvText && csvPreview.data.length"
        @click="resetSchedule"
      >
        Clear Schedule Inputs
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      csvText: "",
      csvPreview: { data: [], headers: [] },
    };
  },
  props: ["prefixId", "maxInputs"],
  methods: {
    // clear schedule inputs
    resetSchedule: function () {
      this.csvPreview = { data: [], headers: [] };
      this.$refs.csvRef.value = ""; // reset textarea input
      this.populateScheduleInputs(); // update data in schedule inputs
    },
    // set the input value using the input id attribute
    setInputWithId: function (id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
      return value;
    },
    // parse the csv/excel row (Method 1)
    parseRow2: function (row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function (character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          entry.push(character.replace("\r", ""));
        }
      });
      entries.push(entry.join(""));
      return entries;
    },
    // parse the csv/excel row (Method 2)
    parseRow: function (row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function (character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          if (character == "," && !insideQuote) {
            entries.push(entry.join(""));
            entry = [];
          } else {
            entry.push(character);
          }
        }
      });
      entries.push(entry.join(""));
      return entries;
    },
    // Check heading data in row
    checkIsHeader: function (arr = []) {
      var isHeader = false;
      arr.forEach((item, index) => {
        if (isNaN(item.replace("$", "").replaceAll(",", ""))) {
          isHeader = true;
        }
      });
      return isHeader;
    },
    // filter illustarion object data
    filterObject: function (array = { data: [], headers: [] }) {
      array.data = array.data.map((i) =>
        i.map((e) => {
          e = e.split("/")[1] || e.split("/")[0]; // map data for "58/59" format values. ----- return "59" value
          e = e.split(".")[0]; // remove decimal points
          if (!e) {
            e = 0; // set default value 0 for blank value
          }
          e = e.replaceAll("$", ""); // remove $
          return e;
        })
      );
      array.data = array.data.filter((i, k) => k < this.$props.maxInputs);
      return array;
    },
    populateScheduleInputs: function () {
      var data = this.csvPreview.data;

      for (let index = 0; index < this.$props.maxInputs; index++) {
        var value = "";
        if (data && data[index]) {
          value = data[index];
        }
        this.setInputWithId(`${this.$props.prefixId}${index + 1}`, value);
      }
    },
    // exract the csv data
    handleCSV: function () {
      let txt = this.$refs.csvRef.value;
      if (txt) {
        let obj = this.exractCsvText(txt);
        if (obj && obj.headers) {
          this.csvPreview = this.filterObject(obj);
        } else {
          this.csvPreview = { data: [], headers: [] };
          alert("Please paste a valid CSV.");
        }
        this.csvText = "";
      } else {
        this.csvPreview = { data: [], headers: [] };
      }
      this.populateScheduleInputs();
    },
    exractCsvText: function (values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          let headers = [];
          if (values.match("\t")) {
            data = data.map((i) => i.split("\t"));
          } else {
            if (values.match('"')) {
              data = data.map((i) => this.parseRow(i));
            } else {
              data = data.map((i) => this.parseRow2(i));
            }
          }

          data = data.map((i) => i.map((r) => r.replace("\r", "")));

          total_columns = data[0].length;
          data = data.filter((i) => i.length && !this.checkIsHeader(i));
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return {
            data: data.map((a) => a.map((i) => (i ? i.replace("-", "") : ""))),
            headers: headers,
          };
        } catch (err) {
          setTimeout(() => {
            this.$refs.csvRef.value = ""; // reset textarea input
          }, 100);
          return false;
        }
      }
      return false;
    },
  },
};
</script>
<style>

</style>
