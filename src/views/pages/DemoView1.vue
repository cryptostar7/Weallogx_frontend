<template lang="">
  <div>
    <h1>Get Remaining Time Beetween Two Dates</h1>
    <p>Days : {{time.days}}</p>
    <p>Hours : {{time.hours}}</p>
    <p>Minutes : {{time.minutes}}</p>
    <p>Seconds : {{time.seconds}}</p>
    <p>Time left in (%) : {{time.percentage}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time:[]
    }
  },
  methods: {
    getRemainingTime: function(start, end) {
      let remainingTime = {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
        percentage: 0.1,
        timeleft:false
      };

      if (new Date() < new Date(end)) {
        let a = new Date(end).getTime();
        let b = new Date().getTime();
        let c = new Date(start).getTime();
        let difference = a - b;
        if (difference > 0) {
          remainingTime = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
            minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
            seconds: Math.floor((difference / 1000) % 60).toString(),
            percentage: 100 - Math.floor((b - c) / (a - c) * 100),
            timeleft:true
          };
        }
      }
      console.log(remainingTime);
      return remainingTime;
    },
  },
  mounted() {
    this.time = this.getRemainingTime('2022-12-19', '2023-01-02');
  },
};
</script>
<style lang="">
</style>