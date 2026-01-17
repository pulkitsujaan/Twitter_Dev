import User from '../models/user.js'
import CrudRepository from './crud-repository.js'

export default class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async findBy(data){
        try{
            const response = await User.findOne({email:data});
            return response;
        }
        catch(error){
            throw error;
        }
    }
}