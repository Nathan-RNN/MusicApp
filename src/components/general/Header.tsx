"use client";
import { Guitar } from "lucide-react";
import PageContainer from "./PageContainer";
import ProfileButton from "./ProfileButton";
import ToggleTheme from "./theme/toggleTheme";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return null;
  }

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
          <div className="flex items-center gap-2">
            <ToggleTheme />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
