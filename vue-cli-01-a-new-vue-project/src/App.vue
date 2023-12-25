<template>
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {id: 'manuel', name: 'manuel Lorentz', phone: '87643456', email: 'manuel@test.fr' },
                {id: 'laura', name: 'laura lozano', phone: '87643456', email: 'laura@test.fr' },
                {id: 'fred', name: 'fred lassoued', phone: '87643456', email: 'fred@test.fr' },
            ]
        }
    },
}
</script>