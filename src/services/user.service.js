import { createUser, loginUser } from "../persistence/daos/user.dao.js";

export class UserService {

    async createUser(object) {
        return createUser(object)
    }
    
    async loginUser(object) {
        return loginUser(object)
    }
}