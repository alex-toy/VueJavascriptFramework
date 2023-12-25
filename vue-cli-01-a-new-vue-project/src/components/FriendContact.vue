<template>
    <section>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <section v-if="detailsAreVisible">
            <div>Phone : {{ friend.phone }}</div>
            <div>Email : {{ friend.email }}</div>
        </section>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                detailsAreVisible : false,
                friend: {id: 'manuel', name: 'manuel Lorentz', phone: '87643456', email: 'manuel@test.fr' },
            }
        },
        methods: {
            toggleDetails(){
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    }
</script>