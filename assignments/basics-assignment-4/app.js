const app = Vue.createApp({
    data() {
      return {
        classes: ['user1'],
        showParagraph : true,
        backgroundColor: 'red'
      };
    },
    computed: {
    },
    methods: {
      addClass(event){
        let newClass = event.target.value;
        this.classes.push(newClass);
      },
      toggleParagraph(){
        this.showParagraph = !this.showParagraph;
      },
      setBackgroundColor(event){
        let color = event.target.value;
        this.backgroundColor = color;
      }
    },
  });
  
  app.mount('#assignment');
  