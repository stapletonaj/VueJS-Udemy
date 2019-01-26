new Vue({
  el: '#exercise',
  data: {
    isHighlight: true,
    isShrink: false,
    blue: 'blue',
    padAndMarg: 'padandmarg',
    width : 0,
    myClass: '',
    really: false,
    myStyleData: {
      backgroundColor: 'grey',
      height: '100px',
      width: '100px',
      margin: "5px"
    }
  },
  computed: {
    myStyle: function(){
      const self = this;
      return "width: " + self.width + "px";
    }
    },
  methods: {
    startEffect: function() {
      setInterval(() => {
        this.isHighlight = !this.isHighlight;
        this.isShrink = !this.isShrink;
      }, 1000);
    },
    startProgress: function(){
        setInterval(() => {
        this.width += 10;
        }, 1000);
      
    }
  }
});
