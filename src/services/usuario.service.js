import { createUser, loginUser } from "../persistence/daos/user/UserDaoMongo.js";

export class UsuarioService {

    async createUser(object) {
        return createUser(object)
    }
    
    async loginUser(object) {
        return loginUser(object)
    }
}