import React from 'react'
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import "./ComidaCard.css"

function ComidaCard({music, setEditMode, deleteComida}) {
    const { nome, note, description, id} = comida;
  return (
    <div id='card' className='comida-card'>
        <h1>{nome}</h1>
        <div>{note} Nota</div>
        <div>{description} Descrição</div>
        <div id='icons'>
            <AiTwotoneEdit
                color='yellow'
                width={32}
                onClick={() => setEditMode(comida)}
            />
            <AiFillDelete
                color='red'
                width={32}
                onClick={() => deleteComida(id)}
            />
        </div>
    </div>
  )
}

export default ComidaCard