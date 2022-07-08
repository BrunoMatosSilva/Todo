import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useTasks } from "../hooks/useTasks";

export function Cadastro() {
    const [title, setTitle] = useState("");
    const { addTask } = useTasks();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!title.trim()) {
            toast.error('Não é permitido criar tarefa sem texto!', {
                style: {
                    background: '#262626',
                    color: '#fff'
                }
            });
            return;
        }
        addTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <div className="flex justify-center ml-2 mr-2">
            <form className="-mt-7 w-full max-w-[46rem] h-[54px] flex items-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="max-w-[39.87rem] w-full h-full bg-gray-100 dark:bg-gray-500 border border-gray-300 dark:border-gray-700 rounded pl-4 placeholder:text-gray-300 placeholder:pl-2 focus:outline-none focus:border-purple-700"
                    placeholder="Adicione uma nova tarefa"
                    onChange={onChangeTitle}
                    value={title}
                />
                <button
                    className="flex-1 bg-blue-500 dark:bg-blue-700 text-gray-500 p-1 rounded ml-2 h-full flex items-center justify-center text-xs sm:text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors">
                    Criar
                    <span className="ml-2 font-bold">
                        <PlusCircle size={16} />
                    </span>
                </button>
            </form>
        </div>
    );
}