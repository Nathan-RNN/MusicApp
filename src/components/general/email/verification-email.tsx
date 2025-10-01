import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type VerificationEmailProps = {
  userEmail: string;
  userName: string;
  resetUrl: string;
};

const VerificationEmail = ({
  userEmail,
  userName,
  resetUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="fr" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Réinitialisez votre mot de passe - Action requise</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-lg max-w-[580px] mx-auto p-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Vérification de votre adresse email
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Nous avons reçu une demande de vérification de votre adresse
                email
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Bonjour {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Vérification de votre adresse email associé à{" "}
                <strong>{userEmail}</strong>.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <a
                href={resetUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#2563eb", // bleu-600
                  color: "#ffffff",
                  padding: "16px 32px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Confirmer mon adresse email
              </a>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                Si le bouton ne fonctionne pas, copiez et collez ce lien dans
                votre navigateur :
              </Text>
              <Link
                href={resetUrl}
                className="text-blue-600 text-[14px] underline break-all"
              >
                {resetUrl}
              </Link>
            </Section>

            {/* Security Notice */}
            <Section className="bg-yellow-50 border-l-[4px] border-yellow-400 p-[16px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 leading-[20px] m-0 mb-[8px]">
                <strong>⚠️ Important :</strong>
              </Text>
              <Text className="text-[14px] text-gray-700 leading-[20px] m-0">
                {
                  "Si vous n'avez pas demandé cette réinitialisation, ignorez cet email. Votre mot de passe actuel reste sécurisé et inchangé."
                }
              </Text>
            </Section>

            {/* Support */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[8px]">
                {"Besoin d'aide ? Notre équipe support est là pour vous aider."}
              </Text>
              <Link
                href="mailto:support@example.com"
                className="text-blue-600 text-[14px] underline"
              >
                Contacter le support
              </Link>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Cet email a été envoyé par Blueman Dev
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0 mb-[8px]">
                Antananarivo, 2ème arrondissement, République démocratique de
                Madagascar
              </Text>
              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                © 2025 Blueman Dev. Tous droits réservés.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
