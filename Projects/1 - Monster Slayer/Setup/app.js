new Vue ({
    el: '#app',
    data: {
        gameActive: false,
        yourHealth: 100,
        monsterHealth: 100,
        hitRecord: []
    },
    methods: {
        resetGame: function() {
            this.gameActive = false,
            this.yourHealth = 100,
            this.monsterHealth = 100
        },
        attack: function() {
            this.yourHealth = this.yourHealth - Math.floor((Math.random() * 10))
            this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 10);
            this.alertEnd();
        },
        specialAttack: function () {
            this.yourHealth = this.yourHealth - Math.floor((Math.random() * 12))
            this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 15);
        },
            
        heal: function () {
            this.yourHealth = this.yourHealth - Math.floor(Math.random() * 5);
            this.yourHealth = this.yourHealth + Math.floor((Math.random() * 5));
        },
        alertEnd: function() {
            if(this.yourHealth < 1){
                alert('Game over!');
            } else return;
        }
    },
    computed: {
        calcWidthYou: function() {
            return {
            width: this.yourHealth + '%'
            }
        },
        calcWidthMonster: function () {
            return {
                width: this.monsterHealth + '%'
            }
        },
    },
})