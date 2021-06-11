<template>
    <b-container class="mt-5">
        <b-row class="justify-content-center">
            <h1>Constructor de búsquedas del tesoro</h1>
        </b-row>
        <b-row class="mt-3 px-5">
            <h5 class="text-center">
                Esta pagina es busca facilitar la creacion de una busqueda del tesoro
                provellendote de una forma facil de buscar pistas por lugar de destino
            </h5>
        </b-row>
        <b-row class="justify-content-center">
            <TreasureIcon class="treasureLogo"/>
        </b-row>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TreasureIcon from "@/assets/treasure-chest.svg";

@Component({
    components:{
        TreasureIcon
    }
})
export default class Home extends Vue {
}
</script>

<style scoped>
.treasureLogo{
    width: 10em!important;
    height: 10em!important;
}
</style>