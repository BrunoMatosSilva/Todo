import { Moon, Sun } from "phosphor-react";
import { useTheme } from "../hooks/UseTheme";
import { Logo } from "./Logo";

export function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <header className="h-60 flex flex-col justify-center items-center -z-0">
                <Logo />
                <div className="w-full max-w-[46rem] flex items-center justify-between mt-4 px-2">
                    <div>Olá! <span className="font-bold text-blue-500">Bora organizar seu dia.</span></div>

                    {theme === "light" ? (
                        <div className="cursor-pointer">
                            <Moon size={20} onClick={() => setTheme("dark")} />
                        </div>) : (
                        <div className="cursor-pointer">
                            <Sun size={20} onClick={() => setTheme("light")} />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}