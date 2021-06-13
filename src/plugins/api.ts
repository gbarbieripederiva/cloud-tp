import Vue from "vue";

const vm = new Vue();

interface ApiCategory {
  category_name: string;
  category_id: number;
}

export class Category {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

function getUrl(url: string) {
  return process.env.VUE_APP_API_URL + url;
}

// get categories
export async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(getUrl("/categories"), {
      mode: "cors",
    });
    if (!res.ok) {
      throw new Error("");
    }
    let categories = await res.json();
    categories = categories.map((v: ApiCategory) => {
      return new Category(v.category_id, v.category_name);
    });
    return categories;
  } catch (e) {
    vm.$bvToast.toast("No se pudieron obtener las categorias", {
      variant: "danger",
    });
    return [];
  }
}

// get imgurls by category
export async function searchByCategoryName(type: string): Promise<string[]> {
  try {
    const res = await fetch(getUrl("/images/" + type), {
      mode: "cors",
    });
    if (!res.ok) {
      throw new Error("");
    }
    return await res.json();
  } catch (error) {
    vm.$bvToast.toast("No se pudieron obtener las pistas", {
      variant: "danger",
    });
    return [];
  }
}

export async function searchByCategoryID(id: number): Promise<string[]> {
  try {
    const res = await fetch(getUrl("/category/" + id), {
      mode: "cors",
    });
    if (res.ok) {
      throw new Error("");
    }
    return await res.json();
  } catch (error) {
    vm.$bvToast.toast("No se pudieron obtener las pistas", {
      variant: "danger",
    });
    return [];
  }
}

interface ImageSendFile{
    category:string|number;
    type:string;
    payload:string;
}
async function getSubmitFileBody(category:string,file: File): Promise<ImageSendFile> {
    const dataUrl:string = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if(reader.result){
                resolve(reader.result.toString());
            }else{
                throw new Error("");
            }
        }
        reader.onerror = (error) => reject(error);
    });
    const stopPoint = dataUrl.indexOf(";");
    const type = dataUrl.slice(dataUrl.indexOf("/")+1,stopPoint);
    const payload = dataUrl.slice(dataUrl.indexOf(",",stopPoint)+1);
    return {
        type,
        payload,
        category
    } as ImageSendFile
}

let uploadingImage = false;
async function submitFile(category: string, imgFile: File): Promise<boolean> {
  if (uploadingImage) {
    return false;
  }
  try {
    uploadingImage = true;

    const res = await fetch(getUrl("/clue"), {
      method: "POST",
      body: JSON.stringify(await getSubmitFileBody(category,imgFile)),
    });
    if (!res.ok) {
      throw new Error("");
    }
    uploadingImage = false;
    return true;
  } catch (e) {
    uploadingImage = false;
    vm.$bvToast.toast("No se pudo subir la imagen", { variant: "danger" });
    return false;
  }
}

export default {
  getCategories,
  searchByCategoryID,
  searchByCategoryName,
  submitFile,
};
