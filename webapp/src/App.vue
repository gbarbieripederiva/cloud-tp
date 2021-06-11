<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ComponentExample from './components/componentExample.vue';

@Component({
  components: {
    ComponentExample,
  },
})
export default class App extends Vue {}
</script>

<style>
</style>
