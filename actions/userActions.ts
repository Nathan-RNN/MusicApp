"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, message: "Connexion réussie" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Erreur lors de la connexion",
    };
  }
};

export const signUp = async (name: string, email: string, password: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { success: true, message: "Inscription réussie" };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Erreur lors de l'inscription",
    };
  }
};
