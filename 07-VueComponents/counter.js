Vue.component('counter', {
  template: `
  <div>
    <span>{{ counter }}</span><br />
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
  `,
  data() {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#app',
})