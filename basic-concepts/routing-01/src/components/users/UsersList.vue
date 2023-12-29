<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">SaveChanges</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved : false
    }
  },
  beforeRouteLeave (to, from, next) {
    // console.log(to, from)
    console.log(this.changesSaved)
    if (this.changesSaved) {
      next();
    } else {
      let answer = confirm('are you sure to leave? unregistered data');
      next(answer);
    }
  },
  methods:{
    confirmInput(){
      // console.log('confirmInput')
      this.$router.push('/teams')
    },
    beforeRouteEnter (to, from, next) {
      // console.log(to, from)
      next();
    },
    unmounted(){
      console.log('unmounted')
    },
    saveChanges(){
      this.changesSaved = true;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>