export default class UserService {
    test(){
        return "Test userservice 123"
    }

    async login(email, password){
        var users = [{'email': 'jules-marcus@ziggo.nl', 'password': 'Test123!'}, {'email': 'maarten', 'password': 'Test123!'}, {'email': 'jeremy', 'password': 'Test123!'}]
        
        for (let index = 0; index < users.length; index++) {
            const u = users[index];
            if(u.email == email && u.password == password ){
                return true;
            }
        }
        return false;
    }
}
  