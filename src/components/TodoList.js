import React, {useEffect, useState} from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);


    const handleAddTask = () =>{
        const task = document.querySelector( '#task').value;
        setTodos( prevState => [ ...prevState, task]);
        document.querySelector( '#task').value = '';
    }



    const handleDeleteTask = ( index ) => {
        setTodos( ( prevState ) => {
            return prevState.filter( ( task, i ) => i !== index );
        } );
    };

    const handleAddComplete = (index) =>{
        setCompleted( ( prevState ) => [
            ...prevState,
            todos[ index ]
        ] );
    }
    return(

        <div>
            <div>
                <label htmlFor='task'>Tarea</label>
                <input type='text' id='task' />

                <button onClick={ handleAddTask }>Agregar tarea</button>
            </div>
            <h1>Tareas pendientes</h1>
            <ul>
                {
                    todos.map((task, index) => {
                        return <li >{ task } <button onClick={ () => handleDeleteTask( index )}>Eliminar</button>
                            <button onClick={ () => handleAddComplete( index ) }>Tarea Completada</button></li>

                    })
                }
            </ul>

            <h1>Tareas Completadas</h1>
            <ul>
                {
                    completed.map((complete, index) => {
                        return <li>{ complete }</li>
                    })
                }
            </ul>

        </div>



    );
}

export default TodoList;