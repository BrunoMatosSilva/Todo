import { Dialog, Transition } from '@headlessui/react'
import { Pencil } from 'phosphor-react'
import { Fragment, useState } from 'react'
import toast from 'react-hot-toast';
import { useTasks } from '../hooks/useTasks';

interface Props {
    taskTitle: string;
    taskId: string
}

export function EditModal({ taskTitle, taskId }: Props) {
    const { editTask } = useTasks()
    let [isOpen, setIsOpen] = useState(false)

    const [editTitle, setEditTitle] = useState(taskTitle)

    function handleEditTask() {

        if (!editTitle.trim()) {
            toast.error('Não é permitido criar tarefa sem texto!', {
                style: {
                    background: '#262626',
                    color: '#fff'
                }
            });
            return;
        }

        editTask(taskId, editTitle);
        setIsOpen(false);
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div>
                <Pencil onClick={() => setIsOpen(true)} size={20} className="accent-purple-500 h-[25px]  text-blue-700 dark:text-gray-300 rounded-full m-5 cursor-pointer hover:text-red-500" />
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-700 bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className=" flex flex-col justify-center items-center text-2xl font-bold leading-6 text-purple-900 dark:text-purple-500"
                                    >
                                        Edite sua Tarefa!
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col justify-center items-center">
                                        <input
                                            className=" text-gray-400 rounded focus:border-purple-500"
                                            type="text"
                                            defaultValue={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                        />
                                    </div>

                                    <div className="mt-4 flex flex-col justify-center items-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleEditTask}
                                        >
                                            Editar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
