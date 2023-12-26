const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      userGoal : ""
    };
  },
  methods:{
    addGoal(event){
      this.goals.push(this.userGoal);
    },
    deleteGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
