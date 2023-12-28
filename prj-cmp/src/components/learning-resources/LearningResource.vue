<template>
    <li>
        <BaseCard>
            <header>
                <h3>{{ learningResource.title }}</h3>
                <BaseButton :mode="flat">Delete</BaseButton>
            </header>            
            <p>{{ learningResource.description }}</p>
            <nav>
                <a :href="learningResource.link">View resource</a>
            </nav>
        </BaseCard>
    </li>
</template>

<script>
    export default {
    props: {
        learningResource: {
            title: { type: String },
            description: { type: String },
            link: { type: String },
        }
    },
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
