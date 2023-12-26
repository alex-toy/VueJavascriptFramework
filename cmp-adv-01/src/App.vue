<template>
  <section>
    <TheHeader />

    <BadgeList />

    <UserInfo
      :fullName="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    
    <CourseGoals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </CourseGoals>

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('managed-goals')">Managed Goals</button>
    <keep-alive>
      <component :is="this.selectedComonent"></component>
    </keep-alive>

  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BadgeList from './components/BadgeList.vue'
import UserInfo from './components/UserInfo.vue'
import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManagedGoals from './components/ManagedGoals.vue'

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManagedGoals,
  },
  data() {
    return {
      selectedComonent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComonent = cmp;
    }
  }
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