import { Product } from "../models/ProductModel";
import { products } from "../data/ProductData";

let incrementId = 1

export const createProduct = (nameProduct: string, description: string, price: number, stock: number): Product => {
const product: Product = {
    idProduct: incrementId,
    nameProduct,
    description,
    price,
    stock
}

products.push(product);
incrementId++;

return product;
}

export const listProduct = (): Product[] => {

return products;
}

export const updateProduct = (idProduct: number, nameProduct: string, description: string, price: number, stock: number): Product | null => {
    const product = products.find(p => p.idProduct === idProduct);

    if(!product){
        return null;
    }

    product.nameProduct = nameProduct;
    product.description = description;
    product.price = price;
    product.stock = stock;

    return product;
}

export const deleteProduct = (idProduct: number): boolean => {
    const index = products.findIndex(p => p.idProduct === idProduct);

    if(index === -1){
        return false;
    }

    products.splice(index, 1);
    return true;
}