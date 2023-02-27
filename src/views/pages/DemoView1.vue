<template lang="">
  <div>
    <button @click="checkFunction()">Check function</button>
  </div>
</template>
<script>
import csvText from "../../services/csv_data.js";
export default {
  data() {
    return {
      text: csvText,
    };
  },
  methods: {
    parseRow: function(row) {
      var insideQuote = false,
        entries = [],
        entry = [];
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
    exractCsvText: function(csv) {
      if (typeof csv === "string") {
        let lines = csv.split("\n");
        let headers = [];
        let data = {};
        if (lines.length && lines[0]) {
          headers = lines[0].split(",");
        }

        if (headers.length) {
          let maxCols = 0;
          let temp_data = [];
          headers.forEach((h, i) => {
            if (h) {
              var columns = [];
              lines.forEach((line, j) => {
                let row = this.parseRow(line);
                if (row && row[i]) {
                  columns.push(row[i]);
                }
              });

              // set max colomn length
              if (maxCols < columns.length) {
                maxCols = columns.length;
              }
              temp_data.push({ header_name: h, columns: columns });
            }
          });

          data = {
            data: temp_data,
            max_columns: maxCols,
            headers: headers.filter(i => i),
          };
        }

        return data;
      }

      return false;
    },
  },
};
</script>
