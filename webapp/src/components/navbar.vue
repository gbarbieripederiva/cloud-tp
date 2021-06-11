<template>
    <b-navbar toggleable="sm" type="dark" variant="secondary">
        <b-navbar-brand href="#"><TreasureIcon/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item @click="gotoHome" >Home</b-nav-item>
                <b-nav-item @click="gotoBuscar">Buscar</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import TreasureIcon from "@/assets/treasure-chest.svg";

@Component({
    components:{
        TreasureIcon
    }
})
export default class Navbar extends Vue {
    @Emit("gotoView")
    public gotoHome():number{
        return 0;
    }
    @Emit("gotoView")
    public gotoBuscar():number{
        return 1;
    }
}
</script>