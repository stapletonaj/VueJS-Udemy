new Vue({
    el: "#exercise",
    data: {
        name: "Andrew John Stapleton",
        age: "33",
        image: "https://www.google.com/chromecast/static/images/explore/chromecast-audio.png",
    },

    methods: {
        randomNum: function () {
            return Math.random();
        },
    }
});