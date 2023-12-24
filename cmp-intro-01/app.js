const app = Vue.createApp({
    data() {
      return {
        friends: [
            {
                id : 1,
                firstname: 'alex',
                lastname: 'rea',
                phone: '7654345',
                email: 'alex@test.fr'
            },
            {
                id : 2,
                firstname: 'seb',
                lastname: 'lopez',
                phone: '7654345',
                email: 'seb@test.fr'
            },
        ],
      };
    },
    computed:{
    },
    methods: {
        fullName(friend){
            return friend.firstname + ' ' + friend.lastname;
        }
    },
  });

  app.component('friend-delails', {
    template: `
        <li v-for="friend in friends">
        <h2>{{friend.firstname}}</h2>
        <button>Show Details</button>
        <ul>
            <li><strong>Phone:</strong>{{fullName(friend)}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
        </li>
    `,
    data() {
      return {
        isVisible: true,
      };
    },
    computed:{
    },
    methods: {
    },
  })
  
  app.mount('#app');
  