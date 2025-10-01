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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2, StepBack } from "lucide-react";
import { signIn } from "../../../../actions/userActions";
import { TextGenerateEffectComponent } from "../aceternityUI/textGenerateEffect";

const formSchema = z.object({
  email: z.email("Adresse email invalide"),
  password: z
    .string()
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
});

export function AddSongForm() {
  const [loading, setLoading] = useState(false);
  const { push, refresh, back } = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    const { success, message } = await signIn(values.email, values.password);

    if (success) {
      toast.success(message as string);
      await refresh();
      push("/dashboard");
    } else {
      toast.error(message as string);
    }

    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 h-full">
            <Button
              type="button"
              variant="outline"
              about="back"
              className="hover:cursor-pointer"
              size="icon"
              onClick={() => back()}
            >
              <StepBack />
            </Button>
            <TextGenerateEffectComponent words="Ajouter un morceau" />
          </div>
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
                      href="/auth/forgot-password"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <FormControl>
                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        className="pr-10"
                      />
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
        </div>
      </form>
    </Form>
  );
}
