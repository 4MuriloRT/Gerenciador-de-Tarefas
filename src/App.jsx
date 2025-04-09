import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

const App = ( ) => {
  const [tasks, setTasks] = useState([{
      id: 1,
      title: "Estudar React",
      description: "Estudar programação para se tornar um desenvolvedor",
      completed: false 
    },{
      id: 2,
      title: "Ler um livro",
      description: "Estudar sobre o assunto escolhido",
      completed: false
    },{
      id: 3,
      title: "Estudar inglês",
      description: "Estudar para melhorar o inglês",
      completed: false
    }
  ]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {...task, completed: !task.completed}
      }

      return task;
    });
    setTasks(newTasks);
  }

  const onTaskDelete = (taskID) => {
    const newTasks = tasks.filter(task => task.id !== taskID);
    setTasks(newTasks);
  }

  const onAddTaskSubmit = (title, description) => {
    const newTask = { 
      id: v4(),
      title: title,
      description: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 text-center font-bold"> Gerenciador de Tarefas </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks 
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  )
}

export default App;