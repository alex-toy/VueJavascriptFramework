<template>
    <did>
        <base-card>
            <base-button @click="setSelectedTab('StoredResource')" :mode="storedResButtonMode">Stored Resources</base-button>
            <base-button @click="setSelectedTab('AddResource')" :mode="AddResButtonMode">Add Resources</base-button>
        </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </did>
</template>

<script>
    import StoredResource from './StoredResource';
    import AddResource from './AddResource';

    export default {
        components: { 
            StoredResource,
            AddResource,
        },
        props: {    
        },
        provide() {
            return {
                storedResources: this.storedResources,
                addResource: this.addResource,
                removeResource: this.removeResource,
            };
        },
        data() {
            return {
                storedResources: [
                    { id: 'official-guide', title: 'Official Guide', description: 'The official vue.js documentation.', link: 'https://vuejs.org' },
                    { id: 'google', title: 'Google', description: 'Learn to google...', link: 'https://google.org' },
                ],
                selectedTab : 'StoredResource'
            }
        },
        methods: {
            setSelectedTab(tab){
                this.selectedTab = tab;
            },
            addResource(title, description, url){
                const newResource = {
                    id : new Date().toISOString(),
                    title: title,
                    description: description,
                    url: url,
                };
                this.storedResources.unshift(newResource);
                this.selectedTab = 'StoredResource';
            },
            removeResource(resourceId){
                console.log('dfvqsf')
                const index = this.storedResources.findIndex(res => res.id === resourceId);
                this.storedResources.splice(index, 1);
            }
        },
        computed:{
            storedResButtonMode(){
                return this.selectedTab === 'StoredResource' ? null : 'flat'
            },
            AddResButtonMode(){
                return this.selectedTab === 'AddResource' ? null : 'flat'
            },
        }
    }
</script>

<style scoped>
</style>
