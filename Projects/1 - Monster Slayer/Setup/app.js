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
            
            this.monsterAttack();
            
            if(this.checkWin()){
                return
            }
            
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.hitRecord.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })

            if(this.checkWin()){
                return
            }
            
        },
        specialAttack: function () {
            
            this.monsterAttack();
             
            if(this.checkWin()){
                return
            }
            
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.hitRecord.unshift({
                isPlayer: true,
                text: 'Player hit Monster for ' + damage
            })
            
            if(this.checkWin()){
                return
            }
            
        },
            
        heal: function () {
            
            this.monsterAttack();
            
            if(this.yourHealth <= 90) {
                let heal = Math.floor(Math.random() * 10);
                this.yourHealth += heal;
                this.hitRecord.unshift({
                    isPlayer: true,
                    text: 'Player heals for ' + heal
                })  
            }            
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

       monsterAttack: function() {
        let damage = this.calculateDamage(3, 10);  
        this.yourHealth -= damage;
        this.hitRecord.unshift({
            isPlayer: false,
            text: 'Monster hits Player for ' + damage
        })

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