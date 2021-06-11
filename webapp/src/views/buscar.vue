<template>
    <b-container class="mt-3">
        <b-container class="d-flex justify-content-center">
            <b-select v-model="selectedSearch">
                <template #first>
                    <b-form-select-option :value="null" disabled>Lugar a buscar</b-form-select-option>
                </template>
                <b-form-select-option v-for="t in types" :key="t" :value="t">{{t}}</b-form-select-option>
            </b-select>
            <button class="btn btn-secondary"><b-icon-search></b-icon-search></button>
        </b-container>
        <b-container class="mt-3 d-flex flex-wrap justify-content-start">
          <span v-for="i in 11" :key="i" class="mt-1 mb-1 ml-1 container-of-result-image">
            <ResultImage :src="chestImage"/>
          </span>
        </b-container>
    </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ResultImage from "@/components/resultImage.vue";

@Component({
  components:{
    ResultImage
  }
})
export default class Buscar extends Vue {
    private types = ["Parrilla","Cocina"];
    private selectedSearch:string|null = null;
    private chestImage = require("@/assets/chest.png");
}
</script>

<style scoped>
.container-of-result-image{
  width: 10em;
  height: 10em;
  background: red;
}

/* css for the img in ResultImage  */
/* /deep/ .result-image{
}
*/
  
</style>