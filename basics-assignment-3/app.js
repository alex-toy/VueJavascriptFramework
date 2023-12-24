const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    watch: {
        counter(value) {
            setTimeout(() => {
                this.counter = 0;
            }, "5000");
        }
    },
    computed: {
      result() {
        if (this.counter < 37) return 'not there yet';
        if (this.counter > 37) return 'too much';
        return this.counter;
      }
    },
    methods: {
        addFive() {
            this.counter += 5;
        },
        addOne() {
            this.counter += 1;
        }
    }
  });
  
  app.mount('#assignment');
  