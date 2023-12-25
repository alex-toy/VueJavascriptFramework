<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact v-for="friend in friends" :key="friend.id" :friend="friend" @toggle-favorite="toggleFavorite" />
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {id: 'manuel', name: 'manuel Lorentz', phone: '87643456', email: 'manuel@test.fr', isFavorite:true },
                {id: 'laura', name: 'laura lozano', phone: '87643456', email: 'laura@test.fr', isFavorite:false },
                {id: 'fred', name: 'fred lassoued', phone: '87643456', email: 'fred@test.fr', isFavorite:false },
            ]
        }
    },
    methods:{
        toggleFavorite(friendId) {
            let friend = this.friends.find(f => f.id === friendId);
            friend.isFavorite = !friend.isFavorite;
        }
    }
}
</script>

<style>

</style>