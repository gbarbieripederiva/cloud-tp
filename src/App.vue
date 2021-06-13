<template>
  <div class="app">
    <Navbar v-model="view"></Navbar>
    <Home v-if="view == 0"/>
    <Buscar v-else-if="view == 1"/>
    <Subir v-else-if="view == 2"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/navbar.vue';
import Home from "@/views/home.vue";
import Buscar from "@/views/buscar.vue";
import Subir from "@/views/subir.vue";

@Component({
  components: {
    Navbar,
    Home,
    Buscar,
    Subir
  },
})
export default class App extends Vue {
  public view = 0;

  public gotoView(v:number):void{
    this.view = v;
  }
}
</script>

<style>
</style>
