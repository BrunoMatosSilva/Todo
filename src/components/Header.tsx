import { Logo } from "./Logo";

export function Header() {
    return (
        <>
            <header className="h-60 flex justify-center items-center -z-0">
                <Logo />
            </header>
        </>
    );
}