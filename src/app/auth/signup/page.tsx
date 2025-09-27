import { Guitar } from "lucide-react";

import Link from "next/link";
import ToggleTheme from "@/components/general/theme/toggleTheme";
import Image from "next/image";
import { SignUpForm } from "@/components/signUp-form";

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-between md:items-center">
          <Link href="#" className="flex items-center gap-2 font-medium">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <Guitar className="text-teal-500 w-8 h-8" />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-300 via-teal-500 to-green-600">
                AcoustiX
              </span>
            </h1>
          </Link>
          <ToggleTheme />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/signup.webp"
          alt="Signup image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
