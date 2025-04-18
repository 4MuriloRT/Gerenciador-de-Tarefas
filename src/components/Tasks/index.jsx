import { ChevronRightIcon, TrashIcon } from "lucide-react";

const Tasks = ({tasks, onTaskClick, onTaskDelete}) => {
    return(
        <div>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button 
                            onClick={() => onTaskClick(task.id)} 
                            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.completed && 'line-through'}`} >
                            {task.title}
                        </button>
                        <button className="bg-slate-400 text-white p-2 rounded-md ">
                            <ChevronRightIcon/>
                        </button>
                        <button onClick={() => onTaskDelete(task.id)} className="bg-slate-400 text-white p-2 rounded-md ">
                            <TrashIcon/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;