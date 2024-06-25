import axios, { AxiosResponse } from "axios";


interface User {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (userBody: User) => {
    const { name, email, password } = userBody;
    
    if (!name || !email || !password) {
        return alert("Please fill in all fields");
    }
    
    const user = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password,
    });

    if (user.status === 201) {
        localStorage.setItem("token", user.data);
        return true;
    } else {
        alert(user.data.message);
        localStorage.removeItem("token");
        return false;
    }
}