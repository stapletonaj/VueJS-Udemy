 Vue.component('hello', {
   template: '<h1>Hello</h1>'
 })
 
 
 const vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText ='Button Changed';
      this.$refs.heading.innerText = 'This is text from the refs thing'
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second instance',
  },
  methods: {
    onChange: function(){
      vm1.title = 'Changed by vm2'
    }
  }
})

