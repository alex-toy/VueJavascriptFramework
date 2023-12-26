const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName:''
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log(oldValue, newValue)
    },
    counter(value) {
      if (value < 0) this.counter = 0;
    }
  },
  computed: {
    greetings() {
      return (this.name.length > 0 ? 'hello ' + this.name + '!!!' : "");
    }
  },
  methods: {
    setName() {
      this.name = '';
    },
    outputFullName() {
      return (this.name.length > 0 ? 'hello ' + this.name + '!!!' : "");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
