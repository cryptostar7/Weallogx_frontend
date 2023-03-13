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
      var arr = {
    "4": [
        {
            "age": "59",
            "EndOfPolicyYear": "1",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$23083",
            "AccumulationValue": "$82751",
            "CashValue": "$1900",
            "DeathBenefit": "$1824858"
        },
        {
            "age": "60",
            "EndOfPolicyYear": "2",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$23937",
            "AccumulationValue": "$170374",
            "CashValue": "$91509",
            "DeathBenefit": "$1912481"
        },
        {
            "age": "61",
            "EndOfPolicyYear": "3",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$24897",
            "AccumulationValue": "$263099",
            "CashValue": "$186255",
            "DeathBenefit": "$2005206"
        },
        {
            "age": "62",
            "EndOfPolicyYear": "4",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$26011",
            "AccumulationValue": "$361120",
            "CashValue": "$286314",
            "DeathBenefit": "$2103227"
        },
        {
            "age": "63",
            "EndOfPolicyYear": "5",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$23662",
            "AccumulationValue": "$468401",
            "CashValue": "$395650",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "64",
            "EndOfPolicyYear": "6",
            "PremiumOutlay": "$100000.00",
            "NetDistribution": "$0",
            "TotalCharges": "$23448",
            "AccumulationValue": "$583368",
            "CashValue": "$512673",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "65",
            "EndOfPolicyYear": "7",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$15776",
            "AccumulationValue": "$607594",
            "CashValue": "$538955",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "66",
            "EndOfPolicyYear": "8",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$16040",
            "AccumulationValue": "$633231",
            "CashValue": "$576038",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "67",
            "EndOfPolicyYear": "9",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$16229",
            "AccumulationValue": "$660456",
            "CashValue": "$614708",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "68",
            "EndOfPolicyYear": "10",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$16361",
            "AccumulationValue": "$689438",
            "CashValue": "$655119",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "69",
            "EndOfPolicyYear": "11",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$16480",
            "AccumulationValue": "$720314",
            "CashValue": "$697440",
            "DeathBenefit": "$1742107"
        },
        {
            "age": "70",
            "EndOfPolicyYear": "12",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$9453",
            "AccumulationValue": "$760629",
            "CashValue": "$749201",
            "DeathBenefit": "$1000000"
        },
        {
            "age": "71",
            "EndOfPolicyYear": "13",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$9169",
            "AccumulationValue": "$804045",
            "CashValue": "$804045",
            "DeathBenefit": "$1000000"
        },
        {
            "age": "72",
            "EndOfPolicyYear": "14",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$8833",
            "AccumulationValue": "$850830",
            "CashValue": "$850830",
            "DeathBenefit": "$1000000"
        },
        {
            "age": "73",
            "EndOfPolicyYear": "15",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$8416",
            "AccumulationValue": "$901304",
            "CashValue": "$901304",
            "DeathBenefit": "$1000447"
        },
        {
            "age": "74",
            "EndOfPolicyYear": "16",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$1297",
            "AccumulationValue": "$962677",
            "CashValue": "$962677",
            "DeathBenefit": "$1049318"
        },
        {
            "age": "75",
            "EndOfPolicyYear": "17",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$1062",
            "AccumulationValue": "$1028565",
            "CashValue": "$1028565",
            "DeathBenefit": "$1100564"
        },
        {
            "age": "76",
            "EndOfPolicyYear": "18",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$933",
            "AccumulationValue": "$1099171",
            "CashValue": "$1099171",
            "DeathBenefit": "$1154130"
        },
        {
            "age": "77",
            "EndOfPolicyYear": "19",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$0",
            "TotalCharges": "$1115",
            "AccumulationValue": "$1174502",
            "CashValue": "$1174502",
            "DeathBenefit": "$1233227"
        },
        {
            "age": "78",
            "EndOfPolicyYear": "20",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$1335",
            "AccumulationValue": "$1254502",
            "CashValue": "$1135418",
            "DeathBenefit": "$1198143"
        },
        {
            "age": "79",
            "EndOfPolicyYear": "21",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$1601",
            "AccumulationValue": "$1339130",
            "CashValue": "$1095008",
            "DeathBenefit": "$1161964"
        },
        {
            "age": "80",
            "EndOfPolicyYear": "22",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$1919",
            "AccumulationValue": "$1428622",
            "CashValue": "$1053209",
            "DeathBenefit": "$1124640"
        },
        {
            "age": "81",
            "EndOfPolicyYear": "23",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$2305",
            "AccumulationValue": "$1523209",
            "CashValue": "$1009942",
            "DeathBenefit": "$1086102"
        },
        {
            "age": "82",
            "EndOfPolicyYear": "24",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$2802",
            "AccumulationValue": "$1623096",
            "CashValue": "$965081",
            "DeathBenefit": "$1046235"
        },
        {
            "age": "83",
            "EndOfPolicyYear": "25",
            "PremiumOutlay": "$0.00",
            "NetDistribution": "$115944",
            "TotalCharges": "$3407",
            "AccumulationValue": "$1728500",
            "CashValue": "$918500",
            "DeathBenefit": "$1004925"
        }
    ]
};
      var page =4;
      let data = []; 
      let headers = [];
      let total_columns = 0;
          
      data = arr[page].map((i) => {
        var obj = Object.values(i);
        if(total_columns < obj.length){
          total_columns = obj.length;
        }
        return obj;
      });

      for (var i = 0; i < total_columns; i++) {
        headers.push("");
      }

      console.log({ data: data, headers: headers });
      return { data: data, headers: headers };
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
