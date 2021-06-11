<template>
  <span>
    <img :class="finalImgClass" :src="src" :alt="alt" />
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResultImage extends Vue {
  @Prop({ required: true }) src: string | undefined;
  @Prop({ required: false, default: "" }) alt: string | undefined;
  @Prop({ required: false, default: "" }) imgClass: string | undefined;
  get finalImgClass():string{
      return "result-image" + this.imgClass;
  }
}
</script>
