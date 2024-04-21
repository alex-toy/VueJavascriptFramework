<template>
  <h3>Counter double : {{ counterDouble }}</h3>
  <h3>Normalized Counter : {{ counterNormalized }}</h3>
</template>

<script>
export default {
  computed: {
    counterDouble() {
      return this.$store.getters.counterDouble;
    },
    counterNormalized() {
      return this.$store.getters.counterNormalized;
    },
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