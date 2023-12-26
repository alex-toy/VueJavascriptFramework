<template>
  <section>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :fullName="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
// import BaseCard from './components/BaseCard.vue'

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    // 'base-card' : BaseCard,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>