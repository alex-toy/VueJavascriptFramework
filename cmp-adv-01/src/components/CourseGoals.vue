<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal"></slot>
        </li>
    </ul>
  </template>
  
  <script scoped>
    export default {
        data(){
            return {
                goals : ['finish the course', 'learn vue']
            }
        }
    };
  </script>
  
  <style scoped>
  </style>