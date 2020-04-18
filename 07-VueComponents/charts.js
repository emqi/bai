Vue.component('converter', {
  template: `
  <div>
    <canvas id="myChart"></canvas>
  </div>
  `,
  props: ['languages'],
  computed: {
    getLanguages: function() {
      return this.languages.map(x => x.language);
    },
    getPopularity: function() {
      return this.languages.map(x => x.popularity);
    }
  },
  mounted: function() {
    var ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "bar",

        // The data for our dataset
        data: {
          labels: this.getLanguages,
          datasets: [
            {
              label: "Programming languages popularity",
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: this.getPopularity
            }
          ]
        },

        // Configuration options go here
        options: {}
      });
  }
})

new Vue({
  el: '#app',
  data: {
    languages: [
      {
        language: 'Python',
        popularity: 25.95
      },
      {
        language: 'Java',
        popularity: 21.42
      },
      {
        language: 'JavaScript',
        popularity: 8.26
      },
      {
        language: 'C#',
        popularity: 7.62
      },
      {
        language: 'Php',
        popularity: 7.37
      }
    ] 
  }
})