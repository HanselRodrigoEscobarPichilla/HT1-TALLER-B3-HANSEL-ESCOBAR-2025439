import promptSync from "prompt-sync";
import { createProduct} from "./controller/ProductController";
import { listProduct } from "./controller/ProductController";
import { deleteProduct } from "./controller/ProductController";
import { updateProduct } from "./controller/ProductController";
import { createClient } from "./controller/ClientController";
import { listClient } from "./controller/ClientController";
import { deleteClient } from "./controller/ClientController";
import { updateClient } from "./controller/ClientController";

const prompt = promptSync();

const readNumber = (message: string): number => {
    return Number(prompt(message));
}

const listProducts = (): void => {
const products = listProduct();

console.log("---------Productos---------");
console.log(products);

return decisionUser();
}

const listClients = (): void => {
const clients = listClient();

console.log("---------Clientes---------");
console.log(clients);

return decisionUser();
}

const createProducts = (): void => {
const nameProduct = prompt("Ingrese el nombre del producto: ");
const description = prompt("Ingrese la descripcion del producto: ");
const price = readNumber("Ingrese el precio del producto: ");
const stock = readNumber("Ingrese la cantidad del producto: ");

if(!nameProduct){
    console.log("El nombre no puede ir vacio.");
    return createProducts();
}else if(!description){
    console.log("La descripcion no puede ir vacia.");
    return createProducts();
}else if(price <= 0){
    console.log("El precio no puede ser menor o igual a 0.");
    return createProducts();
}else if(!price){
    console.log("El precio no puede ir vacio.");
    return createProducts();
}else if(stock < 0){
    console.log("La cantidad no puede ser menor a 0.");
    return createProducts();
}else if(!stock){
    console.log("La cantidad no puede ir vacia.");
    return createProducts();
}

const product = createProduct( nameProduct, description, price, stock);

console.log("Producto creado.");
console.log(product);

return decisionUser();
}

const createClients = (): void => {
const nameClient = prompt("Ingrese su nombre: ");
const last_name = prompt("Ingrese su apellido: ");
const user = prompt("Ingrese su usurario: ");
const email = prompt("Ingrese su correo: ");
const pasword = prompt("Ingrese su contraseña: ");

if(!nameClient){
    console.log("El nombre no puede ir vacio.");
    return createClients();
}else if(!last_name){
    console.log("El apellido no puede ir vacio.");
    return createClients();
}else if(!user){
    console.log("El usuario no puede ir vacio.");
    return createClients();
}else if(!email){
    console.log("El correo no puede ir vacio.");
    return createClients();
}else if(!pasword){
    console.log("La contraseña no puede ir vacia.");
    return createClients();
}

const client = createClient( nameClient, last_name, user, email, pasword);

console.log("Cliente creado.");
console.log(client);

return decisionUser();
}

const deleteProducts = (): void => {
    const idInput = prompt("Ingrese el ID del producto a eliminar: ") || "";
    const convertedId = parseInt(idInput);

    const deleted = deleteProduct(convertedId);

    if(deleted){
        console.log("Producto eliminado correctamente.");
        return decisionUser();
    }else {
        console.log("No se encontro ningun producto con ese ID.");
        return decisionProduct();
    }

}

const deleteClients = (): void => {
    const idInput = prompt("Ingrese el ID del cliente a eliminar: ") || "";
    const convertedId = parseInt(idInput);

    const deleted = deleteClient(convertedId);

    if(deleted){
        console.log("Cliente eliminado correctamente.");
        return decisionUser();
    }else {
        console.log("No se encontro ningun cliente con ese ID.");
        return decisionClient();
    }
}

const updateProducts = (): void => {
const idInput = prompt("Ingrese el ID del producto que quiere actualizar: ") || "";
const convertedId = parseInt(idInput);

const nameProduct = prompt("Ingrese el nuevo nombre del producto: ") || "";
const descripcion = prompt("Ingrese la nueva descripcion del producto: ") || "";
const priceInput = prompt("Ingrese el nuevo precio del producto: ") || "0";
const price = parseFloat(priceInput);
const stockInput = prompt("Ingrese la nueva cantidad: ") || "0";
const stock = parseFloat(stockInput);

const result = updateProduct(convertedId, nameProduct, descripcion, price, stock);

if(!nameProduct){
    console.log("El nombre no puede ir vacio.");
    return decisionProduct();
}else if(!descripcion){
    console.log("La descripcion no puede ir vacia.");
    return decisionProduct();
}else if(!price){
    console.log("El precio no puede ir vacio.");
    return decisionProduct();
}else if(price <= 0){
    console.log("El precio no puede ser menor o igual a 0.");
    return decisionProduct();
}else if(!stock){
    console.log("La cantidad no puede ir vacia.");
    return decisionProduct();
}else if(stock < 0){
    console.log("La cantidad no puede ser menor a 0.");
    return decisionProduct();
}else if(result){
    console.log("Producto actualizado.");
    return decisionUser();
}else{
    console.log("no se encontrol ningun producto con ese ID.");
    return decisionProduct();
}


}

const updateClients = (): void => {
const idInput = prompt("Ingrese el ID del cliente que quiere actualizar: ") || "";
const convertedId = parseInt(idInput);

const nameClient = prompt("Ingrese el nuevo nombre del cliente: ") || "";
const last_name = prompt("Ingrese el nuevo apellido del cliente: ") || "";
const user = prompt("Ingrese el nuevo usuario del cliente: ") || "";
const email = prompt("Ingrese el nuevo correo del cliente: ") || "";
const pasword = prompt("Ingrese la nueva contraseña del cliente: ") || "";

const result = updateClient(convertedId, nameClient, last_name, user, email, pasword);

if(!nameClient){
    console.log("El nombre no puede ir vacio.");
    return decisionClient();
}else if(!last_name){
    console.log("El apellido no puede ir vacio.");
    return decisionClient();
}else if(!user){
    console.log("El usuario no puede ir vacio.");
    return decisionClient();
}else if(!email){
    console.log("El correo no puede ir vacio.");
    return decisionClient();
}else if(!pasword){
    console.log("La contraseña no puede ir vacia.");
    return decisionClient();
}else if(result){
    console.log("Cliente actualizado.");
    return decisionUser();
}else{
    console.log("no se encontrol ningun cliente con ese ID.");
    return decisionClient();
}


}

const decisionProduct = (): void => {
    console.log("Ingrese 1 si quiere ver los productos.");
    console.log("Ingrese 2 si quiere crear un producto.");
    console.log("Ingrese 3 si quiere eliminar un producto.");
    console.log("Ingrese 4 si quiere actualizar un producto.");
    console.log("Ingrese 5 si quiere regresar.");
    const decision = readNumber("Ingrese su elecion: ");

    if(decision === 1){
        return listProducts();
    }else if(decision === 2){
        return createProducts();
    }else if(decision === 3){
        return deleteProducts();
    }else if(decision === 4){
        return updateProducts();
    }else if(decision === 5){
        return decisionUser();
    }else if(!decision){
        console.log("La decicion no puede ir vacia.");
        return decisionProduct();
    }
}

const decisionClient = (): void => {
    console.log("Ingrese 1 si quiere ver los clientes.");
    console.log("Ingrese 2 si quiere crear un cliente.");
    console.log("Ingrese 3 si quiere eliminar un cliente.");
    console.log("Ingrese 4 si quiere actualizar un cliente.");
    console.log("Ingrese 5 si quiere regresar.");
    const decision = readNumber("Ingrese su elecion: ");

    if(decision === 1){
        return listClients();
    }else if(decision === 2){
        return createClients();
    }else if(decision === 3){
        return deleteClients();
    }else if(decision === 4){
        return updateClients();
    }else if(decision === 5){
        return decisionUser();
    }else if(!decision){
        console.log("La decicion no puede ir vacia.");
        return decisionClient();
    }
}

console.log("Vienvenido a la tinda virtual que desea hacer.");



const decisionUser = (): void => {
    console.log("Ingrese 1 si quiere modificar los productos");
    console.log("Ingrese 2 si quiere modificar los clientes");
    console.log("Ingrese 3 si salir");

    const decision = readNumber("Ingrese su elecion: ");

if(decision === 1){
    console.log("Vienbenido a productos.");
    return decisionProduct();
}else if(decision === 2){
    console.log("Vienbenido a clientes.");
    return decisionClient();
}else if(decision === 3){
    return;
}else if(!decision){
    console.log("La elecion no puede ir vacia.");
    return decisionUser();
}
}

decisionUser();

