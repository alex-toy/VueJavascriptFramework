<template>
    <div>
        <TheHeader title="RememberMe"></TheHeader>
        <TheResource></TheResource>
    </div>
</template>

<script>
    import TheHeader from './components/layouts/TheHeader'
    import TheResource from './components/learning-resources/TheResource';

    export default {
        components: {
            TheHeader,
            TheResource,
        },
        data(){
            return {
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0;
    }
</style>