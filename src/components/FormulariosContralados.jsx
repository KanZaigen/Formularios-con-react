import React from 'react'
import { useState } from 'react'

const FormulariosContralados = () => {

    const [todo, setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    })


    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const {todoName, todoDescripcion} = todo

        if (!todoDescripcion.trim() || !todoName.trim()) {
            setError(true)
            return
        } else {
            setError(false)
        }
    }

    const handleChange = e => {

        const { name, value, checked, type } = e.target

        setTodo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const PintarError = () => <div className="alert alert-danger">Campos obligatorios</div>

  return (
    <>
      <h2>No controlados</h2>

        {error && <PintarError />}

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='todoName'
                placeholder='Ingrese Todo'
                className='form-control mb-2'
                onChange={handleChange}
                value={todo.todoName}
            />

            <textarea 
                name='todoDescripcion'
                placeholder='Ingrese la descipcion del Todo'
                className='form-control mb-2'
                onChange={handleChange}
                value={todo.todoDescripcion}
            />

            <select 
                className='form-control mb-2'
                name='todoEstado'
                onChange={handleChange}
                value={todo.todoEstado}
            >
                <option value="completada">Completada</option>
                <option value="pendiente">Pendiente</option>
            </select> 

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    name='todoCheck'
                    type="checkbox" 
                    checked={todo.todoCheck}
                    onChange={handleChange}
                />
                <label 
                    className="form-check-label" 
                    htmlFor="flexCheckDefault">
                        Dar prioridad
                </label>
            </div>
            <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>   
    </>
  )
}

export { FormulariosContralados } 
