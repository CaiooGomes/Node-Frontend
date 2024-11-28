import React from 'react'

function ComidaList({comida, setEditMode, deleteComida}) {
  return (
    <div id='comidas-list'>
        {comida.map((musica) => {
            <ComidaCard
            comida = { comida }
            key = {comida.id}
            setEditMode = {setEditMode}
            deleteComida = {deleteComida}
            />
        })}
    </div>
  )
}

export default ComidaList