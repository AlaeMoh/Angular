export interface signUp{
    name:string,
    email:string,
    password:string,
}


export interface Login{
    email:string,
    password:string,
}


export interface products{
    name:string,
    category:string,
    price:number,
    color:string,
    description:string,
    image:string,
    id:string,
    quantity: undefined | number,
}

export interface cart{
  name:string,
  price:number,
  category:string,
  color:string,
  image:string,
  description:string,
  id:string| undefined,
  quantity:undefined | number,
  productId:string,
  userId:number
}



