import React, { useEffect, useState} from 'react'
import "../form/Form.css"

function ComidaForm(props) {
    const [nome, setNome] = useState("")
    const [note, setNote] = useState(0)
    const [description, setDescription] = useState("")

    const CadastrarComida = (event) => {
        event.preventDefault();
        let id = undefined;
        if (props.editingComida) {
            id = props.editingComida.id;
        }
        props.createComida({nome, note, description, id})
        props.fecharOModal();

    }
    useEffect(() => {
        if (props.editingComida) {
            setNome(props.editingComida.nome);
            setNote(props.editingComida.note);
            setDescription(props.editingComida.description)
        }
    }, [props.editingComida]);

  return (
    <div className='formularioComida'>
        <form className='form' onSubmit={CadastrarComida}>
            <h1>{props.editingComida ? "Editar" : "cadastrar"} Comida</h1>
            <label htmlFor="nome">Nome</label>
            <input type="text" 
                placeholder='nome'
                name='nome' id='nome'
                onChange={(e) => setNome(e.target.value)}
                value={nome}
            />
            <label htmlFor="note">Nota</label>
            <input type="text" 
                placeholder='nota'
                id='note'
                onChange={(e) => setNome(e.target.value)}
                value={note}
            />
            <label htmlFor="description">Descrição</label>
            <input type="text" 
                placeholder='Descrição'
                id='description'
                onChange={(e) => setNome(e.target.value)}
                value={description}
            />

            <button type='submit'>
                {props.editingComida ? "Editar" : "Cadastrar"}
            </button>
        </form>
    </div>
  )
}

export default ComidaForm