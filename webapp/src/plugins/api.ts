// get categories
export async function getCategories():Promise<string[]> {
    await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(0);
            reject
        }, 1000);
    })
    return ["Parrilla","Pieza","Cuarto"];
}

// get imgurls by category
export async function searchByCategory(type:string): Promise<string[]> {
    type;
    return [require("@/assets/chest.png")];
}


export default {
    getCategories,
    searchByCategory,
}