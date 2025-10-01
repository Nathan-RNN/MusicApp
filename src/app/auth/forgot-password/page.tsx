import { ForgotPasswordForm } from "@/components/ForgotPassword-Form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-3xl mx-auto mt-2">
      <CardHeader className="text-center">
        <CardTitle className="font-extrabold text-3xl">
          MOT DE PASSE OUBLIÉ
        </CardTitle>
        <CardDescription>
          Entrez votre adresse email pour recevoir un lien de réinitialisation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ForgotPasswordForm />
      </CardContent>
    </Card>
  );
}
