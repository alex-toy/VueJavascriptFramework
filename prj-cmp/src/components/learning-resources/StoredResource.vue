<template>
    <ul>
        <LearningResource v-for="storedResource in storedResources" :key="storedResource.id" :learningResource="storedResource"></LearningResource>
    </ul>
</template>

<script>
    import LearningResource from './LearningResource';

    export default {
        components: {
            LearningResource
        },
        inject: ['storedResources']
    }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
