<template>
    <b-navbar toggleable="sm" type="dark" variant="secondary">
        <b-navbar-brand href="#"><TreasureIcon/></b-navbar-brand>

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