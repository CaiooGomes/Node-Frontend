import axios from "axios"

export const CreateComida = async({nome, description, note}) => {
    await axios.post('http://localhost:3001/comidas/create', {
        nome,
        description,
        note
    });

    return data;
}