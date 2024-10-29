// All Types here

export type Category={
    _id:string;
    name:string;
    link:string;
    slug:string;
    image:string;
    createdAt?:string;
    submenu?:SubCategory[];
}
export type SubCategory={
    name:string;
    slug:string;
    link:string;
    parent:string;   
}
export type Page={}