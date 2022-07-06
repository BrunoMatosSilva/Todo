import { useContext } from 'react'
import { TaskContext } from '../contexts/TasksContext';

export function useTasks() {
    const value = useContext(TaskContext)

    return value;
}