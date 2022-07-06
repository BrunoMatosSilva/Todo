import imgUrL from "../assets/Clipboard.png";

export function NoTask() {
    return (
        <div className="flex justify-center">
            <div className="w-[46rem] flex flex-col justify-center items-center border-t rounded border-gray-400 mt-6">
                <img src={imgUrL} alt="" className="mt-16" />
                <p className="pt-4 text-gray-300 font-bold text-base">Você ainda não tem tarefas cadastradas</p>
                <p className="text-gray-300 text-base">Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}