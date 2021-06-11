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
          <span v-for="(r,i) in imgResults" :key="i" @click="openModal(r)" class="mt-1 ml-1 container-of-result-image">
            <ResultImage :src="r"/>
          </span>
        </b-container>
        <b-modal v-model="showModal" ref="resultImageZoomModal" :title="rizmTitle">
          <ResultImage imgClass="w-100" :src="rizmBody"/>
          <template #modal-footer>
            <button class="btn btn-danger" @click="showModal = false">Cerrar</button>
            <button class="btn btn-success" @click="downloadImage(rizmBody)">Descargar</button>
          </template>
        </b-modal>
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

    private showModal = false;
    private rizmTitle = "¿ Imprimir esta pista ?";
    private rizmBody = "";

    // TODO:change for the real thing, a.k.a. the resulted images
    private chestImage = require("@/assets/chest.png");
    get imgResults():string[]{
      let res:string[] = []
      for (let i = 0; i < 10; i++) {
        res.push(this.chestImage)
      }
      return res;
    }

    private openModal(imgUrl:string):void{
      this.rizmBody = imgUrl;
      this.showModal = true;
    }
    private downloadImage(imgUrl:string):void{
      let rgxRes = /\/([^/?#]+)[^?/#]*$/.exec(imgUrl)
      let name:string;
      if(rgxRes == null){
        name = "unnamed";
      }else{
        name = rgxRes[0];
      }
      let a = document.createElement("a");
      a.href = imgUrl;
      a.download = name;
      a.click();
    }
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