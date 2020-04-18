Vue.component('converter', {
  template: `
  <div>
    {{ decimal }}(10) = {{ toBinary }}(2)
  </div>
  `,
  data() {
    return {
      binary: ''
    }
  },
  props: ['decimal'],
  computed: {
    toBinary() {
      return Number(this.decimal).toString(2);
    }
  }
})

new Vue({
  el: '#app',
  data: {
    decimal: ''
  }
})