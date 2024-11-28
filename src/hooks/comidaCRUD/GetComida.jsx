import axios from "axios";

export const GetComida = async () => {
    const{data} = await axios.get("http://localhost:3000/comidas/");
    return data;
}