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

type ForgotPasswordAndEmailProps = {
  userEmail: string;
  userName: string;
  resetUrl: string;
};

const ForgotPasswordAndEmail = ({
  userEmail,
  userName,
  resetUrl,
}: ForgotPasswordAndEmailProps) => {
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
                Réinitialisation de mot de passe
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Nous avons reçu une demande de réinitialisation pour votre
                compte
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Bonjour {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Vous avez demandé la réinitialisation du mot de passe pour le
                compte associé à <strong>{userEmail}</strong>.
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Cliquez sur le bouton ci-dessous pour créer un nouveau mot de
                passe. Ce lien expirera dans <strong>24 heures</strong> pour des
                raisons de sécurité.
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
                  backgroundColor: "#FF0033", // rouge-600
                  color: "#ffffff",
                  padding: "16px 32px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Réinitialiser mon mot de passe
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

export default ForgotPasswordAndEmail;
