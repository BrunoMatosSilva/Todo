import { Trash } from "phosphor-react";
import { useTasks } from "../hooks/useTasks";
import { EditModal } from "./EditModal";
import { NoTask } from "./NoTask";

export function Tasks() {
    const { tasks, deleteTask, completedTasks } = useTasks()
    const tasksQuantity = tasks.length;
    const completedTasksQuantity = tasks.filter(task => task.isCompleted).length;

    return (
        <>
            <div className="flex justify-center ml-2 mr-2">
                <div className="w-[46rem] flex justify-between mt-16">
                    <div className="flex align-center">
                        <p className="text-blue-900 dark:text-blue-500 font-bold text-sm">Tarefas criadas</p>
                        <span className="text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-400 rounded-full text-sm ml-1 px-3 flex items-center">{tasksQuantity}</span>
                    </div>
                    <div className="flex align-center">
                        <p className="text-purple-900 dark:text-purple-500 font-bold text-sm">Concluídas</p>
                        <span className="text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-400 rounded-full text-sm ml-1 px-3 flex items-center">{completedTasksQuantity} de {tasksQuantity}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center ml-2 mr-2">
                {tasks.map((task) => (
                    <div key={task.id} className="w-full max-w-[46rem] flex-1 flex items-center rounded bg-gray-200 dark:bg-gray-500 h-[72px] mt-6 last:mb-4">
                        <div>
                            <input type="checkbox"
                                onClick={() => completedTasks(task.id)}
                                className="rounded-full bg-transparent border-2 hover:bg-gray-600 border-blue-700 checked:hover:bg-purple-700 checked:focus:bg-purple-700 checked:bg-purple-500 m-5 cursor-pointer focus:border-none checked:focus:border-0 checked:focus:ring-0 focus:ring-0" />
                        </div>
                        <div className="flex-1">
                            <p className={task.isCompleted ? "line-through text-gray-300 text-sm font-light" : "text-gray-900 dark:text-gray-100 text-sm"}>
                                {task.title}
                            </p>
                        </div>
                        <EditModal taskTitle={task.title} taskId={task.id} />
                        <div>
                            <Trash size={20} onClick={() => deleteTask(task.id)} className="accent-purple-500 h-[25px]  text-blue-700 dark:text-gray-300 rounded-full m-5 cursor-pointer hover:text-red-500" />
                        </div>
                    </div>
                ))}

                {tasks.length <= 0 && (
                    <NoTask />
                )}

            </div>
        </>
    );
}