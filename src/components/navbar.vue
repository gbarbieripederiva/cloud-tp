<template>
    <b-navbar toggleable="sm" type="dark" variant="secondary">
        <b-navbar-brand @click="view = 0" href="#"><TreasureIcon class="logo"/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item @click="view = 0" >Home</b-nav-item>
                <b-nav-item @click="view = 1">Buscar</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator';
import TreasureIcon from "@/assets/treasure-chest.svg";

@Component({
    components:{
        TreasureIcon
    }
})
export default class Navbar extends Vue {
    @VModel({type:Number}) view!:number;
}
</script>

<style scoped>
.logo{
    width: 2em;
    height: 2em;
}
</style>