<template>
  <base-container title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="subtract">Subtract 3</button>
    <change-counter></change-counter>
    <the-counter></the-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    addOne() {
      this.$store.state.counter++;
    },
    subtract() {
      this.$store.commit('decrement', { value : 3 });
    },
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
</style>