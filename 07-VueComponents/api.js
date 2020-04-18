Vue.component('api-data', {
  template: `
  <div>
    <table>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Code</th>
          <th>Mid</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rate of rates" :key="rate.id">
          <td>{{ rate.currency }}</td>
          <td>{{ rate.code }}</td>
          <td>{{ rate.mid }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  data() {
    return {
      rates: []
    }
  },
  mounted: function() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/A/")
        .then(response => response.json())
        .then(data => data[0].rates.map(rate => this.rates.push(rate)));
  }
})

new Vue({
  el: '#app',
})