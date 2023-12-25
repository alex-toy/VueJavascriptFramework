<template>
    <section>
        <h2>{{ name }}</h2>
        <div v-if="isFavorite">Favorite</div>
        <button @click="toggleFavorite">{{isFavorite ? 'Remove favorite' : 'Set favorite' }}</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <section v-if="detailsAreVisible">
            <div>Phone : {{ phone }}</div>
            <div>Email : {{ email }}</div>
        </section>
    </section>
</template>

<script>
    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
                validator: function(value) { return value.length > 3; }
            },
            phone: String,
            email: String,
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            },
        },
        data() {
            return {
                detailsAreVisible : false,
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite(){
                this.$emit('toggle-favorite', this.id);
            }
        }
    }
</script>