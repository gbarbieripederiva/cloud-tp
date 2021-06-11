<template>
  <div class="app">
    <Navbar @gotoView="gotoView"></Navbar>
    <Home v-if="view==0"/>
    <Buscar v-else-if="view==1"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/navbar.vue';
import Home from "@/views/home.vue";
import Buscar from "@/views/buscar.vue";

@Component({
  components: {
    Navbar,
    Home,
    Buscar
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
