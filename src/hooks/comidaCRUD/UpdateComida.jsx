import axios from "axios";

export const UpdateComida = async([nome, description, note, id]) => {
    const {data} = await axios.put(`http://localhost:3000/comidas/edit/${id}`, {
        nome,
        description,
        note,
        id
    }) 
}