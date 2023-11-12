import SideNav from "@/components/side-nav";
import MainNav from "@/components/main-nav";
import ModeToggle from "@/components/ThemeToggle";
import ProfileToggle from "@/components/profile-toggle";
import LoginButton from "@/components/login-button";
import { Session } from "next-auth";

type NavBarProps = {
    session: Session | null;
};

export default function NavBar({ session }: NavBarProps) {
    return (
        <>
            <nav className="container py-2 flex items-center justify-between">
                <SideNav />
                <MainNav />
                <div className="flex items-center gap-4">
                    {session ? <ProfileToggle session={session} /> : <LoginButton provider={"spotify"} />}
                    <ModeToggle />
                </div>
            </nav>
        </>
    );
}
