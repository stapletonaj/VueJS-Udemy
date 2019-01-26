new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    alert: function() {
      alert("You just pushed the button!");
    },
    inputValue: function(event){
        this.value = event.target.value;
    }
  }
});