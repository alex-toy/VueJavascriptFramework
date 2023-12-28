<template>
    <div>

      <BaseDialog v-if="inputIsInvalid" title="Invalid input" @close="confirmError">
        <template #default>
          <p>At least one input value is invalid</p>
        </template>
        <template #action>
          <base-button @click="confirmError"></base-button>
        </template>
      </BaseDialog>

      <BaseCard>
          <form @submit.prevent="submitData">
              <div class="form-control">
                  <label for="title">Title</label>
                  <input id="title" name="title" type="text" ref="titleInput">
              </div>
              <div class="form-control">
                  <label for="description">Description</label>
                  <input id="description" name="description" type="text" ref="descriptionInput">
              </div>
              <div class="form-control">
                  <label for="link">Link</label>
                  <input id="link" name="link" type="url" ref="linkInput">
              </div>
              <div class="form-control">
                  <base-button type="submit" @click="submitData">Add Resource</base-button>
              </div>
          </form>
      </BaseCard>
      
    </div>
</template>

<script>
import BaseButton from '../../../../http-01/src/components/UI/BaseButton.vue';
  export default {
    props: {},
    inject: ['addResource'],
    data(){
      return {
        inputIsInvalid: false,
      };
    },
    components: {BaseButton },
    methods: {
      submitData(){
        const titleInput = this.$refs.titleInput.value;
        const descriptionInput = this.$refs.descriptionInput.value;
        const linkInput = this.$refs.linkInput.value;

        if (titleInput.trim() === '' || descriptionInput.trim() === '' || linkInput.trim() === ''){
          this.inputIsInvalid = true;
          return;
        }

        this.addResource(titleInput, descriptionInput, linkInput);
      },
      confirmError(){
        this.inputIsInvalid = false;
      }
    },
  }
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
