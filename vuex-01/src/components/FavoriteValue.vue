<template>
    <h1>Favorite value</h1>
    <h3>Counter : {{ counter }}</h3>
  </template>
  
  <script>
  export default {
    computed: {
      counter() {
        return this.$store.getters.counter;
      }
    }
  };
  </script>
  
  <style scoped>
  section {
    max-width: 30rem;
    margin: 2rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
  
  h2 {
    text-align: center;
  }
  </style>