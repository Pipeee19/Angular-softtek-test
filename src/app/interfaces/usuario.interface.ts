import { AddressUsuarioI } from "./addressUsuario.interface";

export interface UsuarioI{
    id: number,
    name: string,
    username: string,
    email : string,
    address: AddressUsuarioI,
    phone: string
}