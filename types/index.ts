// All Types here

export type Category = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
  createdAt?: string;
  submenu?: SubCategory[];
};
export type SubCategory = {
  name: string;
  slug: string;
  link: string;
  parent: string;
};
export type Page = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
  subPage?: SubPage[];
};
export type SubPage = {
  _id: string;
  name: string;
  slug: string;
  link: string;
  createdAt?: string;
  parent?: string;
};
export type Product = {
  _id: string;
  name: string;
  slug: string;
  feature: boolean;
  description: string;
  category: Category;
  subCategories: SubCategory[];
  brand: Brand;
  content: string;
  details: Detail[];
  questions: Question[];
  reviews: Review[];
  subProducts: SubProduct[];
};
export type Detail = {};
export type Brand = {};
export type Question = {};
export type Review = {
    rating:number;
};
export type Style = {
    name:string;
    color:string;
    image:string;
};
export type Images ={};

export type Options = {
    images:string[];
    option:string;
    qty:number;
    price:number;
    discount:number;
    _id:string;
    sold:number;
    
};

export type SubProduct = {
  sku: string;
  style: Style;
  options: Options[];
  _id: string;
};
export type CartItem = {
  sku: string;
  style: Style;
  options: Options[];
  _id: string;
};
