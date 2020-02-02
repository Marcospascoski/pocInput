export class UsuarioModel {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    senha?: string;

    constructor(
        id?: number,
        nome?: string,
        cpf?: string,
        email?: string,
        senha?: string
    ) { 
        this.id =id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }
}