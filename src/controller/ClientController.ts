import { Client } from "../models/ClientModel";
import { clients } from "../data/ClientData";

let incrementId = 1

export const createClient = (nameClient: string, last_name: string, user: string, email: string, pasword: string): Client => {
    const client: Client = {
        idClient: incrementId,
        nameClient,
        last_name,
        user,
        email,
        pasword
    }

    clients.push(client);
    incrementId++;

    return client;
}

export const listClient = (): Client[] => {

    return clients;
}

export const updateClient = (idClient: number, nameClient: string, last_name: string, user: string, email: string, pasword: string): Client | null => {
    const client = clients.find(p => p.idClient === idClient);

    if(!client){
        return null;
    }

    client.nameClient = nameClient;
    client.last_name = last_name;
    client.user = user;
    client.email = email;
    client.pasword = pasword; 

    return client;
}

export const deleteClient = (idClient: number): boolean => {
    const index = clients.findIndex(p => p.idClient === idClient);

    if(index === -1){
        return false;
    }

    clients.splice(index, 1);
    return true;
}