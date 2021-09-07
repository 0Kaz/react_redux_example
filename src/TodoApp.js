import React from 'react';

class TodoApp extends React.Component { 
    constructor(props){
        super(props)
        this.state = { 
            todos: [{
                id:1,
                task:'Eating pizza with Imane and Rashida',
                status: false
            },
            {
                id:2,
                task:'Movie app react',
                status: false
            }],
        statusActive: false 
        }


    }
    
  // they are all BIND with 'this'
    editTodo = (e, id) => {
      const mappedList = this.state.todos.map(todo => todo.id === id ? { id: todo.id, task: e.target.value , status: todo.status} : todo  )
      this.setState({
          todos: mappedList
      })
    }

    toggleStatus = () => { 
        this.setState( prevState => ({
            statusActive: !prevState.statusActive
        }))
    }

    render(){

        return(
            <>
               {this.state.todos.map(item => (
                   <>
                       <h1>{item.task}</h1>
                       <input type='text' onChange={(e)=> this.editTodo(e, item.id)}/>
                       <button>Supprimer</button>
                       <button>Editer</button>
                   </>
               ))}
            </>
        )
    }
}

export default TodoApp