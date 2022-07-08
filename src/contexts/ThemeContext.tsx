import { createContext, ReactNode, useState, useEffect } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: any;
}

type ThemeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") !== "dark" ? "light" : "dark");

    useEffect(() => {
        const root = window.document.documentElement;

        const removeOldTheme = theme === "dark" ? "light" : "dark";

        root.classList.remove(removeOldTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}