<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <h2>{{ age }}</h2>
    <button @click="setNewAge">Change Age</button>
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs } from 'vue';

export default {
  setup() {
    const age = ref(23);

    const user = reactive({
      name : 'Maximilian',
      age : 34
    });


    console.log(isRef(age.value), isReactive(user.value))
    console.log(isRef(age), isReactive(user))

    const ageRef = toRefs(age);
    const userRef = toRefs(user);
    console.log(isRef(ageRef), isReactive(userRef))
    
    function setNewAge() {
      user.age = 32;
    }

    setTimeout(function() {
      user.name = 'Max'
      user.age = 76
      age.value = 12
    }, 2000)

    return { user : user, age : age, setNewAge : setNewAge }
  },
  methods: {
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>