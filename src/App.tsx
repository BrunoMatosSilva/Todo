
import { Cadastro } from "./components/Cadastro"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { useTasks } from "./hooks/useTasks"

function App() {
  const { tasks, deleteTask, completedTasks } = useTasks()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-600 flex-1 flex h-full flex-col">
        <Cadastro />
        <Tasks />
      </main>
    </div>
  )
}

export default App
