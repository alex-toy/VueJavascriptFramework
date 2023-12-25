<template>
    <form action=""></form>
</template>

<script>
    export default {
        props: {
        },
        emits:{
        },
        data() {
            return {
                detailsAreVisible : false,
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    }
</script>