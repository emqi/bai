Vue.component('architecture', {
  template: `
  <div>
  <h1>Architektura von Neumanna:</h1>
    <div v-for="element in elements">
      {{ element }}
    </div>
  </div>
  `,
  data() {
    return {
      elements: ['Processing unit', 'Control unit', 'Memory', 'Storage', 'I/O mechanism']
    }
  }
})

new Vue({
  el: '#app'
})