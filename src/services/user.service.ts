import IUser from "../interfaces/user.interface";
import userModel from "../models/user.model";

export default class UserService {

    //create a user
    async create (data: IUser) {
        return await userModel.create(data)
    }

    //edit a user
    async update (id: string, update: Partial<IUser>) {
        return await userModel.findByIdAndUpdate(id, update, {new:true})
    }

    //find a single user by id
    async findById (id: string) {
        return await userModel.findById(id)
    }

    
    //find a single user by username
    async findByUsername (username: string) {
        return await userModel.findById({username: username})
    }

    //find all users
    async findAll () {
        return await userModel.find()
    }

    //delete a user
    async erase (id: string) {
        return await userModel.findByIdAndDelete(id)
    }
}