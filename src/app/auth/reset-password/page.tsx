import { ResetPasswordForm } from "@/components/resetPassword-form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ResetPasswordPage() {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-2">
      <CardHeader className="text-center">
        <CardTitle className="font-extrabold text-3xl">
          RÉINITIALISER VOTRE MOT DE PASSE
        </CardTitle>
        <CardDescription>
          Entrez votre adresse email et confirmez votre nouveau mot de passe
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordForm />
      </CardContent>
    </Card>
  );
}
