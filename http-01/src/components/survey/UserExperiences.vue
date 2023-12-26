<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadUserExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading ...</p>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: [],
  components: {
    SurveyResult,
  },
  data(){
    return {
      results : [],
      isLoading : false
    }
  },
  methods:{
    loadUserExperiences(){
      this.isLoading = true;
      fetch('https://localhost:7089/Rating', {
        method: 'GET',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.message !== 'ok') return;
        this.results = data.ratings; 
        this.isLoading = false; 
      })
      .catch(error => console.log(error));
    }
  },
  mounted(){
    this.loadUserExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>