function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth :100,
            monsterHealth :100,
            currentRound: 0,
            winner : null,
            logMessages : [],
        };
    },
    computed: {
        monsterBarStyle(){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle(){
            return {width: this.playerHealth + '%'};
        },
        specialAttackDisabled(){
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerHealth(value){
            if (value === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if (value === 0 && this.playerHealth === 0) {
                this.winner = 'draw';
            } else if (value === 0) {
                this.winner = 'player';
            }
        },
        winner(value){
            if (value) {

            }
        }
    },
    methods : {
        attackMonster(){
            this.currentRound += 1;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.playerHealth = Math.max(0, this.playerHealth);
            this.addLogMessage("player", "atttacked", attackValue);
            this.attackPlayer();
        },
        attackMonsterSpecial(){
            this.currentRound += 1;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.monsterHealth = Math.max(0, this.monsterHealth);
            this.addLogMessage("player", "special atttacked", attackValue);
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.playerHealth = Math.max(0, this.playerHealth);
            this.addLogMessage("monster", "atttacked", attackValue);
        },
        healPlayer(){
            this.currentRound += 1;
            const healValue = getRandomValue(8, 20);
            this.playerHealth += healValue;
            this.playerHealth = Math.min(100, this.playerHealth);
            this.addLogMessage("player", "healed", healValue);
            this.attackPlayer();
        },
        startNewGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = ['Game started']
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages = [...this.logMessages, `${who} ${what} ${value}`]
        },
    }
});

app.mount('#game');
