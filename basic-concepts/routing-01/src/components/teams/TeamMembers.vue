<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/team/t2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName : '',
      members : []
    };  
  },
  methods : {
    loadTeamMembers(teamId){
      const selectedTeam = this.teams.find(t => t.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = this.users.filter(u => members.includes(u.id));
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;

      let sort = this.$route.query;
      console.log(sort)
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next){
    console.log(to, from)
    this.loadTeamMembers(to.params.teamId)
    next();
  },
  watch:{
    $route(teamId){
      this.loadTeamMembers(teamId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>