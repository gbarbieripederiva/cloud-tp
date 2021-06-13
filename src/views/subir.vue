<template>
  <b-container class="d-flex justify-content-center mt-5">
    <b-card>
      <b-card-title> ¿Querés aportar una pista a la comunidad? </b-card-title>
      <b-card-body>
        <b-container>
          <label for="category">Categoria: ¿A donde lleva?</label>
          <b-form-input
            id="category"
            list="categories"
            type="text"
            placeholder=""
            v-model="categorySelected"
          ></b-form-input>

          <datalist id="categories">
            <option v-for="(c, i) in categories" :key="i">{{ c.name }}</option>
          </datalist>
        </b-container>

        <b-container class="mt-2">
          <label for="imagen">Archivo de pista</label>
          <b-form-file
            type="file"
            v-model="imageFile"
            placeholder="Elige un archivo"
            drop-placeholder="Deja el archivo aquí"
            accept="image/*"
          ></b-form-file>
        </b-container>
      </b-card-body>
      <b-card-footer class="d-flex justify-content-end">
          <button class="btn btn-success" @click="submit">Enviar</button>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Api, { Category } from "@/plugins/api";

@Component({})
export default class Subir extends Vue {
  private categories: Category[] = [];
  private categorySelected: string|null = null;
  private imageFile:File|null = null;

  async mounted(): Promise<void> {
    this.categories = await Api.getCategories();
  }

  private async submit(){
      if(this.categorySelected && this.imageFile){
          if(await Api.submitFile(this.categorySelected,this.imageFile)){
              this.imageFile = null;
              this.categorySelected = "";
          }
      }
  }
}
</script>
