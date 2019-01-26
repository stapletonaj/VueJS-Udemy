new Vue ({
    el: '#app',
    data: {
        attachRed: false,
        color: "green",
        width: 100,
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachedRed,
                blue: this.attachedBlue,
                green: this.attachedGreen,
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        },
    },
});