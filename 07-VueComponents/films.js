Vue.component('film-info', {
  template: `
  <div>
    <p>Movie title: {{ title }}</p>
    <p>Director: {{ director }}</p>
    <p>Year: {{ year }}</p>
    <br />
  </div>
  `,
  props: ['title', 'director', 'year']
})

new Vue({
  el: '#app'
})