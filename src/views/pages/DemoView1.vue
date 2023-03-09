<template lang="">
  <div>
      <textarea v-model="csv" cols="100" rows="10" @paste="handleCSV"></textarea>
      <br />
      <button @click="testFunction">Test</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      csv: "",
    };
  },
  methods: {
    testFunction: function() {
      var arr = [
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ];

      console.log(arr.filter((i) => i).length);
    },
    parseRow: function(row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function(character) {
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

    handleCSV: function(e) {
      let txt = e.clipboardData.getData("text/plain");
      if (txt) {
        this.exractCsvText(txt);
      }
    },
    exractCsvText: function(values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          let headers = [];
          if (values.match("\t")) {
            data = data.map(i => i.split("\t"));
          } else {
            data = data.map(i => this.parseRow(i));
          }
          data = data.map(i => i.map(r => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter((i, j) => j);
          console.log(data);
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return { data: data, headers: headers };
        } catch (err) {
          console.log(err);
          setTimeout(() => {
            this.csv = "";
          }, 100);
          return alert("Please past a valid CSV data.");
        }
      }
      return false;
    },
  },
};
</script>
