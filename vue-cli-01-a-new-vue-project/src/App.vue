<template>
    <section>
        <h2>My friends</h2>
        <friend-contact v-for="friend in friends" :key="friend.id" 
            :friend="friend" 
            @toggle-favorite="toggleFavorite"
            @delete-friend="deleteFriend"
        />
        <friend-form @create-friend="addFriend"/>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {id: 'manuel', name: 'manuel Lorentz', phone: '87643456', email: 'manuel@test.fr', isFavorite: true },
                {id: 'laura', name: 'laura lozano', phone: '87643456', email: 'laura@test.fr', isFavorite: false },
                {id: 'fred', name: 'fred lassoued', phone: '87643456', email: 'fred@test.fr', isFavorite: false },
            ]
        }
    },
    methods:{
        toggleFavorite(friendId) {
            let friend = this.friends.find(f => f.id === friendId);
            friend.isFavorite = !friend.isFavorite;
        },
        addFriend(friend){
            this.friends.push(friend);
        },
        deleteFriend(friendId){
            this.friends = this.friends.filter(f => f.id !== friendId);
        }
    }
}
</script>

<style>

</style>