<template lang="">
  <div>
    <textarea rows="10" cols="40" @paste="handleCSV"></textarea>
  </div>
</template>
<script>
export default {
  methods: {
    handleCSV: function(e) {
      let txt = e.clipboardData.getData("text/plain");

      console.log(this.exractCsvText(txt));
    },
    parseRow: function(row) {
      console.log(row);
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function(character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          // if (character == "," && !insideQuote) {
          //   entries.push(entry.join(""));
          //   entry = [];
          // } else {
          //   entry.push(character);
          // }
            entry.push(character.replace('\r', ''));

        }
      });
      entries.push(entry.join(""));
      // console.log(entries);
      return entries;
    },
    checkIsHeader: function(arr = []) {
      var isHeader = false;
      arr.forEach((item, index) => {
        if (isNaN(item.replace("$", "").replaceAll(",", ""))) {
          isHeader = true;
        }
      });
      return isHeader;
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
            data = data.map(i => {
              console.log(i);
              return this.parseRow(i);
            });
            console.log(data);
          }
          data = data.map(i => i.map(r => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter(
            i => i.filter(j => j).length && !this.checkIsHeader(i)
          );
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return { data: data, headers: headers };
        } catch (err) {
          setTimeout(() => {
            this.setInputWithId("pasteData", "");
          }, 100);
          console.log(err);
          return false;
        }
      }
      return false;
    },
  },
};
</script>
<style lang="">
</style>