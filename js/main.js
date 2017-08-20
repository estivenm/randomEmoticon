//  los componentes solo pueden tener un elemento principal
// componente independiente
Vue.component('emoticon-face', {
  template: '#emoticon-template',
  created() {
    setInterval(() => this.emoticon(), 3000)
  },
  methods: {
    emoticon() {
      this.id = Math.random()
      this.url = `https://api.adorable.io/avatars/${this.id}`
        // console.log(this.url);
    }
  },
  data() {
    return {
      url: 'https://api.adorable.io/avatars/09/',
      id: 0
    }
  },

});

// Instancia Vue
new Vue({
  el: 'main',
});