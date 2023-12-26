<template>
    <div>
        <h2>Managed goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <ErrorAlert v-if="inpuIsInvalid">
                <h2>Input should not be empty</h2>
                <button @click="confirmError">Ok</button>
            </ErrorAlert>
        </teleport>
    </div>
</template>

<script scoped>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components:{
        ErrorAlert
    },
    data(){
        return {
            inpuIsInvalid: false
        };
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                console.log('input must not be empty')
                this.inpuIsInvalid = true;
            }
        },
        confirmError(){
            this.inpuIsInvalid = false;
        }
    }
};
</script>

<style scoped>
</style>