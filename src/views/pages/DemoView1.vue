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
      deleteId: 0,
      data: [],
    };
  },
  mounted() {
    this.data = this.exractCsvText(this.text);
    console.log(this.data);
  },
  methods: {
    removeColumn: function() {
      let temp_data = [];
      this.data.data.forEach((row, index) => {
        temp_data.push(row.filter((item, i) => i !== this.deleteId));
      });
    
      return { data: temp_data, headers: this.data.headers.filter((item, i) => i !== this.deleteId), total_columns: this.data.total_columns - 1 };
    },
    checkFunction: function() {
      console.log(this.removeColumn());
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
    exractCsvText: function(csv) {
      if (typeof csv === "string") {
        let lines = csv.split("\n");
        let data = [];
        let headers = [];
        let total_columns = 0;
        lines.forEach((line, i) => {
          if (i) {
            let row = this.parseRow(line);
            if (row) {
              if (total_columns < row.length) {
                total_columns = row.length;
              }
              data.push(row);
            }
          }
        });

        for(var i=0; i < total_columns; i++){
          headers.push('');
        }         
        return { data: data, total_columns: total_columns, headers:headers };
      }

      return false;
    },
  },
};
</script>
