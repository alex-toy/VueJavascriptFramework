Vue.createApp({
    data() {
      return {
        userInput: "",
        userInputEnter: ""
      };
    },
    methods: {
      showAlert() {
        alert('this is an alert')
      },
      registerUserInput(event) {
        this.userInput = event.target.value;
      },
      registerUserInputOnEnter(event) {
        this.userInputEnter = event.target.value;
      },
    }
  }).mount('#assignment');
  