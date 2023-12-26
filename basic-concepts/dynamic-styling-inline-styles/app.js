const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    containerClass() {
      return {context : this.boxASelected};
    },
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') this.boxASelected = !this.boxASelected;
      if (box === 'B') this.boxBSelected = !this.boxBSelected;
      if (box === 'C') this.boxCSelected = !this.boxCSelected;
    },
  },
});

app.mount('#styling');
