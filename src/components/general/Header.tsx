"use client";
import {
  Guitar,
  Home,
  Music,
  Music2,
  PlusCircleIcon,
  Star,
} from "lucide-react";
import PageContainer from "./PageContainer";
import ProfileButton from "./ProfileButton";
import ToggleTheme from "./theme/toggleTheme";
import { usePathname } from "next/navigation";
import { FloatingDock } from "../ui/floating-dock";

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

  const links = () => {
    switch (pathname) {
      case "/dashboard":
        return [
          {
            title: "Accueil",
            icon: (
              <Home className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/dashboard",
          },

          {
            title: "Mes chansons",
            icon: (
              <Music className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/dashboard/my-songs",
          },
          {
            title: "Favoris",
            icon: (
              <Star className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/dashboard/favorites",
          },
        ];
      case "/songs":
        return [
          {
            title: "Tous mes morceaux",
            icon: (
              <Music2 className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/songs",
          },

          {
            title: "Ajouter un morceau",
            icon: (
              <PlusCircleIcon className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/songs/add",
          },
        ];
      default:
        return null;
    }
  };

  return (
    <header className="p-4 border-b-2">
      <PageContainer>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <h1 className="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <Guitar className="text-teal-500 w-8 h-8" />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-300 via-teal-500 to-green-600">
                AcoustiX
              </span>
            </h1>
          </div>

          <FloatingDock items={links() || []} />

          <div className="flex items-center gap-2">
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
