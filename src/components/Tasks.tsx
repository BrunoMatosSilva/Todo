import { Trash } from "phosphor-react";
import { ITask } from "../App";

interface Props {
    tasks: ITask[],
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <>
            <div className="flex justify-center">
                <div className="w-[46rem] flex justify-between mt-16">
                    <div className="flex align-center">
                        <p className="text-blue-500 font-bold text-sm">Tarefas criadas</p>
                        <span className="text-grey-200 bg-gray-400 rounded-full text-sm ml-1 px-3 flex items-center">{tasksQuantity}</span>
                    </div>
                    <div className="flex align-center">
                        <p className="text-purple-500 font-bold text-sm">Concluídas</p>
                        <span className="text-grey-200 bg-gray-400 rounded-full text-sm ml-1 px-3 flex items-center">{completedTasks} de {tasksQuantity}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                {tasks.map((task) => (
                    <div key={task.id} className="w-full max-w-[46rem] flex-1 flex items-center rounded bg-gray-500 h-[72px] mt-6">
                        <div>
                            <input type="checkbox"
                                onClick={() => onCompleted(task.id)}
                                className="rounded-full bg-transparent border-2 hover:bg-gray-600 border-blue-700 checked:hover:bg-purple-700 checked:focus:bg-purple-700 checked:bg-purple-500 m-5 cursor-pointer focus:border-none checked:focus:border-0 checked:focus:ring-0 focus:ring-0" />
                        </div>
                        <div className="flex-1">
                            <p className={task.isCompleted ? "line-through text-gray-300 text-sm font-light" : "text-gray-100 text-sm"}>
                                {task.title}
                            </p>
                        </div>
                        <div>
                            <Trash size={20} onClick={() => onDelete(task.id)} className="accent-purple-500 h-[25px] text-gray-300 rounded-full m-5 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}