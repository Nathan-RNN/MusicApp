"use client";
import { authClient } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Loader2, LogOut, User, User2 } from "lucide-react";
import { toast } from "sonner";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ProfileButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
          router.refresh();
          toast.success("Déconnexion réussie");
        },
      },
    });
  };

  if (isPending) {
    return <Loader2 className="h-4 w-4 animate-spin" />;
  }

  if (!session) {
    if (pathname === "/")
      return (
        <Link
          href="/auth/login"
          className={buttonVariants({ variant: "default" })}
        >
          <User2 />
          Se connecter
        </Link>
      );
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <Avatar>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={session.user.name}
              className="w-8 h-8"
            />
          ) : null}
          <AvatarFallback>
            {session.user?.email[0].toUpperCase() ?? ""}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
