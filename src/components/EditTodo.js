import React, { useState } from 'react'
import { db } from '../services/firebase.config'
import { doc, updateDoc } from 'firebase/firestore'

const EditTodo = ({ todo, id }) => {

const [todos, setTodos] = useState ([todo])

const updateTodo = async (e) => {
  e.preventDefault()
  try {
    const todoDocument = doc(db, "todo", id);
    await updateDoc(todoDocument, {
      todo: todos
    });
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}
// nunca apagar uma chave, ela pode ser útil//

  return (
  <>
    <button
  type="button"
  className="btn btn-outline-primary"
  data-bs-toggle="modal"
  data-bs-target={`#id${id}`}      >
  Editar
</button>

<div
  className="modal fade"
  id={`id${id}`}
  tabIndex="-1"
  aria-labelledby="editLabel"
  aria-hidden="true">
  <div className="modal-dialog">
  <div className="modal-content">
  <div className="modal-header">
  <h5 className="modal-title" id="editLabel">Editar os detalhes</h5>
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
    <div className="modal-body">

    <form className="d-flex">
      <input
        type="text"
        className="form-control"
        defaultValue={todo}
        onChange={e => setTodos(e.target.value)}
      />
    </form>

  </div>
  <div className="modal-footer">
  <button
    type="button"
    className="btn btn-secondary"
    data-bs-dismiss="modal">
    Fechar
  </button>
  <button
    type="button"
    className="btn btn-primary"
    onClick={e => updateTodo(e)}
  >Editar</button>
</div>
        </div>
      </div>
  </div>
</>
      )
    }
export default EditTodo