<template>
    <ul>
        <li :class="{activeOption: modelValue === 'poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{activeOption: modelValue === 'average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{activeOption: modelValue === 'great'}"><button type="button" @click="activate('great')">Great</button></li>
    </ul>
</template>
  
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
    computed: {
        activeOption(){
            return this.modelValue;
        }
    },
    methods: {
        activate(option){
            this.$emit('update:modelValue', option);
        },
    }
}
</script>
  
<style scoped>
    .activeOption {
            border-color:red;
    }
</style>