const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      valueToAdd: 0,
      isNumber: true
    };
  },
  methods:{
    handleIntegerToAdd(event){
      let newValueToAdd = event.target.value;
      if (isNaN(newValueToAdd)) {
        this.isNumber = false;
        this.valueToAdd = null;
        return;
      }
      this.isNumber = true;
      this.valueToAdd = parseInt(event.target.value);
    },
    addValue(){
      this.counter += this.valueToAdd;
    },
    removeValue(){
      this.counter -= this.valueToAdd;
      this.counter = this.counter > 0 ? this.counter : 0;
    }
  }
});

app.mount('#events');
