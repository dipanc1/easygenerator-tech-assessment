import axios, { AxiosResponse } from "axios";


interface User {
    email: string;
    password: string;
}

export const loginUser = async (userBody: User): Promise<boolean> => {
    const { email, password } = userBody;
    
    if (!email || !password) {
        alert("Please fill in all fields");
    }
    
    const user = await axios.post("http://localhost:8000/api/auth/login", {
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