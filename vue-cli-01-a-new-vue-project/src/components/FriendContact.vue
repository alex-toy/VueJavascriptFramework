<template>
    <section>
        <h2>{{ friend.name }}</h2>
        <div v-if="friend.isFavorite">Favorite</div>
        <button @click="toggleFavorite">{{isFavorite ? 'Remove favorite' : 'Set favorite' }}</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <section v-if="detailsAreVisible">
            <div>Phone : {{ friend.phone }}</div>
            <div>Email : {{ friend.email }}</div>
        </section>
    </section>
</template>

<script>
    export default {
        props: {
            friend: {
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
            }
        },
        emits:{
            'toggle-favorite': function(id) { return id !== null; }
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
                this.$emit('toggle-favorite', this.friend.id);
            }
        }
    }
</script>