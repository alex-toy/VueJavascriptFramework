const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
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
