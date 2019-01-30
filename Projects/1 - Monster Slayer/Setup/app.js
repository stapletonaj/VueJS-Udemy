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
            
            this.yourHealth -= this.calculateDamage(3, 10);
             
            if(this.checkWin()){
                return
            }
            
            this.monsterHealth -= this.calculateDamage(3, 10);
            
            if(this.checkWin()){
                return
            }
            
        },
        specialAttack: function () {
            this.yourHealth = this.yourHealth - Math.floor((Math.random() * 12))
            this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 15);
        },
            
        heal: function () {
            this.yourHealth = this.yourHealth - Math.floor(Math.random() * 5);
            this.yourHealth = this.yourHealth + Math.floor((Math.random() * 5));
        },
        
        calculateDamage: function(min, max) {
            let damage = Math.max(Math.floor(Math.random() * max), min);
            return damage;
       },
       
        checkWin: function() {
            if(this.monsterHealth <= 0){
                if(confirm('You Won! Start New Game?')){
                    this.resetGame();
                } else {
                    this.gameActive = false;
                } return true
            }
            else if(this.yourHealth <=0){
                if(confirm('You Lost! Start New Game?')){
                    this.resetGame();
                } else {
                    this.gameActive = false;
                } return true
            } return false;
            
       },
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