const {UserRepository} = require('../repository/index')

class userService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        const user = await this.userRepository.create(data);
        return user;
    }
}

module.exports = userService;