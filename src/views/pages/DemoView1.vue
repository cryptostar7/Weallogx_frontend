<template lang="">
  <div>
      <textarea v-model="csv" cols="100" rows="10" @paste="handleCSV"></textarea>
      <button @click="testFunction">Check</button>
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
      console.log(
        JSON.parse(
          '["67","2","$44,800","$0","$5,782","$10,226","$0","$78,392","$64,252","$485,477\r"]'.replace(
            "\r",
            ""
          )
        )
      );
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

    exractCsvText: function(values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          if (values.match("\t")) {
            data = data.map(i => i.split("\t"));
          } else {
            data = data.map(i => this.parseRow(i));
          }
          data = data.map(i => i.map(r => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter((i, j) => j);

          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }
          
          return { data: data, headers: headers };
        } catch (err) {
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
