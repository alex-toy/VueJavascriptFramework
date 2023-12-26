<template>
    <form @submit.prevent="addContact">
        <div><label for="name">Name</label><input type="text" v-model="nameInput"></div>
        <div><label for="phone">Phone</label><input type="tel" v-model="phoneInput"></div>
        <div><label for="email">Email</label><input type="email" v-model="emailInput"></div>
        <button @click="addFriend">Add Friend</button>
    </form>



</template>

<script>
    export default {
        props: {
        },
        emits: [ 'create-friend'],
        data() {
            return {
                nameInput : '',
                phoneInput : '',
                emailInput : '',
            }
        },
        methods: {
            addFriend(){
                let newFriend = {id: this.nameInput, name: this.nameInput, phone: this.phoneInput, email: this.emailInput, isFavorite:false };
                console.log(newFriend)
                this.$emit('create-friend', newFriend);
            },
        }
    }
</script>