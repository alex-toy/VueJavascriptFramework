<template>
    <button @click="addOne">Add 4</button>
    <button @click="subtract">Subtract 1</button>
</template>

<script>
export default {
    methods : {
        addOne() {
            this.$store.commit({ type: 'increment', value : 4 });
        },
        subtract() {
            this.$store.commit({ type: 'decrement', value : 1 });
        },
    }
}
</script>