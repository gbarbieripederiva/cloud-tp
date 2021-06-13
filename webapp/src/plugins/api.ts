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

// get categories
export async function getCategories(): Promise<Category[]> {
  const res = await fetch(process.env.API_URL + "/categories");
  if (res.ok) {
    let categories = await res.json();
    categories = categories.map((v: ApiCategory) => {
      return new Category(v.category_id, v.category_name);
    });
    return categories;
  } else {
    return [];
  }
}

// get imgurls by category
export async function searchByCategoryName(type: string): Promise<string[]> {
  const res = await fetch(process.env.API_URL + "/images/" + type);
  if (res.ok) {
    return await res.json();
  } else {
    return [];
  }
}

export async function searchByCategoryID(id: number): Promise<string[]> {
  const res = await fetch(process.env.API_URL + "/category/" + id);
  if (res.ok) {
    return await res.json();
  } else {
    return [];
  }
}

export default {
  getCategories,
  searchByCategoryID,
  searchByCategoryName,
  
};
