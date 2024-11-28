import axios from "axios"

export const DeleteComida = async (id) => {
    const {data} = await axios.delete(`http://localhost:3001/comidas/delete/${id}`);
    return data;
}