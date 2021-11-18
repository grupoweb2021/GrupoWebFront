import axios from 'axios';
const API_URL = 'https://localhost:5001/api/users';
class AuthService {
    login(user) {
        return axios.post(API_URL +'auth/sign-in', {
            username: user.username,
            password: user.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log("user:" + response.data);
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }
    register(user) {
        return axios.post(API_URL + 'auth/sign-up', {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password
        });
    }
}
export default new AuthService();
