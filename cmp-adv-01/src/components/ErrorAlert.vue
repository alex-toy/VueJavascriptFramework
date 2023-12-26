<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<script scoped>
export default {
    props: ['fullName', 'infoText', 'role'],
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                console.log('input must not be empty')
            }
        }
    }
};
</script>

<style scoped>
    dialog {
        margin:0;
        position:fixed;
        top:20vh;
        left:30%;
        width: 40%;
        background-color: white;
        box-shadow: 0 2px  8px  rgba(0, 0, 0, 0.26);
        padding: 1rem;
    }
</style>