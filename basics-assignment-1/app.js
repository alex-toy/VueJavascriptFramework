Vue.createApp({
    data() {
      return {
        name: "alex",
        age: 43,
        enteredValue: '',
        imageUrl : "https://www.lazionascosto.it/wp-content/uploads/2019/03/sora.jpg",
        enterText : 'enter your question'
      };
    },
    methods: {
      getFavoriteNumber() {
        let favoriteNumber = Math.random();
        return favoriteNumber;
      },
    }
  }).mount('#assignment');
  