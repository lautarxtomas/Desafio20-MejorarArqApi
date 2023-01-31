import { createUser, loginUser } from "../persistence/user.js";

export class UsuarioService {

    async createUser(object) {
        return createUser(object)
    }
    
    async loginUser(object) {
        return loginUser(object)
    }
}