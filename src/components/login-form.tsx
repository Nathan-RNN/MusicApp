"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signIn } from "../../actions/userActions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const formSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const { push, refresh } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInWithGoogle = async () => {
    setLoadingGoogle(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
    setLoadingGoogle(false);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { success, message } = await signIn(values.email, values.password);

    if (success) {
      push("/dashboard");
      refresh();
      setLoading(false);
      toast.success(message as string);
    } else {
      setLoading(false);
      toast.error(message as string);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-extrabold">SE CONNECTER</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Entrez votre adresse email et votre mot de passe pour vous
            connecter.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Mot de passe</FormLabel>
                    <Link
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        {...field}
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-1">
                <Loader2 className="h-4 w-4 animate-spin" />
                <p className="animate-pulse">Connexion en cours...</p>
              </span>
            ) : (
              "Se connecter"
            )}
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Ou continuer avec
            </span>
          </div>
          <Button
            type="button"
            onClick={signInWithGoogle}
            variant="outline"
            className="w-full"
            disabled={loadingGoogle}
          >
            <svg
              className={loadingGoogle ? "animate-spin" : ""}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path
                fill="#4285F4"
                d="M24 9.5c3.54 0 6.02 1.54 7.4 2.83l5.43-5.43C33.13 3.7 28.9 2 24 2 14.82 2 7.2 7.65 4.27 15.37l6.91 5.36C12.67 14.25 17.83 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.15 24.55c0-1.62-.15-3.17-.42-4.67H24v8.84h12.43c-.54 2.77-2.17 5.12-4.65 6.69l7.26 5.64C43.9 36.05 46.15 30.77 46.15 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M11.18 28.82A13.96 13.96 0 0 1 9.5 24c0-1.66.3-3.26.84-4.76l-6.91-5.36A21.956 21.956 0 0 0 2 24c0 3.57.85 6.93 2.36 9.91l6.82-5.09z"
              />
              <path
                fill="#EA4335"
                d="M24 46c5.9 0 10.87-1.95 14.49-5.29l-7.26-5.64c-2.02 1.36-4.62 2.16-7.23 2.16-6.17 0-11.33-4.75-12.91-11.13l-6.91 5.36C7.2 40.35 14.82 46 24 46z"
              />
            </svg>
            {loadingGoogle
              ? "Connexion en cours..."
              : "Se connecter avec Google"}
          </Button>
        </div>
        <div className="text-center text-sm">
          Vous n&apos;avez pas de compte ?{" "}
          <Link href="/auth/signup" className="underline underline-offset-4">
            S&apos;inscrire
          </Link>
        </div>
      </form>
    </Form>
  );
}
