import React, { useEffect, useState } from 'react'
import AddButton from '../../components/ui/addButton/AddButton'
import ComidaList from '../../components/comidaList/ComidaList'
import ComidaForm from '../../components/comidaForm/ComidaForm'
import { GetComida } from '../../hooks/comidaCRUD/GetComida'
import { UpdateComida } from '../../hooks/comidaCRUD/UpdateComida'
import { CreateComida } from '../../hooks/comidaCRUD/CreateComida'
import { DeleteComida } from '../../hooks/comidaCRUD/DeleteComida'
import ComidaModal from '../../components/comidaModal/ComidaModal'


function ComidaPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [comida, setComida] = useState([]);
    const [editingComida, setEditingComida] = useState(null);

    const handleOpen= () => {
        setIsOpen((state) => !state);
    }

    useEffect{() => {
        GetComida().then((response) => setComida(response.data));
    }, [response.data]};

  return (
    <div>
        <addButton abrirOModal={handleOpen} texto="Adicionar uma comida"/>

        <ComidaList comida={comida} setEditMode={(comida) => {
            setEditingComida(comida);
            handleOpen();
        }}

        deleteComida={(id) => DeleteComida(id)}
        />

        {/* {Checando se o modal está aberto} */}

        {isOpen && (
            <ComidaModal 
                CreateComida={async (comida) => {
                    if (comida.id) {
                        const response = await UpdateComida(comida);
                        setComida((prevState => prevState.map((oldComida) => oldComida.id === comida.id ? res : oldComida)))
                    }else {
                        const res = await CreateComida(comida);
                        setComida((prevState => [...prevState, res]));
                    }
                    setEditingComida(null)
                }}

                editingComida={editingComida}
                fecharOModal = {() => {
                    handleOpen();
                    setEditingComida();
                }}
            />
        )}
    </div>
  )
}

export default ComidaPage