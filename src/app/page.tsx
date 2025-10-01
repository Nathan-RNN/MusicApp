import { FeatureCard } from "@/components/general/aceternityUI/featureCard3D";
import { TextGenerateEffectComponent } from "@/components/general/aceternityUI/textGenerateEffect";
import { TypewriterEffectSmoothDemo } from "@/components/general/aceternityUI/typewriterEffectSmooth";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { buttonVariants } from "@/components/ui/button";
import { Music, Guitar, Tags, Star, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col justify-center items-center gap-2 h-full">
        <section className="my-1.5 flex flex-col justify-center items-center text-center px-6 italic">
          <TextGenerateEffectComponent words="Ta bibliothèque musicale, tes chansons, tes accords." />
          <TypewriterEffectSmoothDemo />
          <Link
            className={buttonVariants({ variant: "default" })}
            href="/auth/signup"
          >
            <PlusCircle />
            Créer un compte
          </Link>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          <FeatureCard
            icon={<Music className="h-8 w-8 text-primary" />}
            title="Chansons"
            description="Ajoute et consulte tes chansons préférées."
          />
          <FeatureCard
            icon={<Guitar className="h-8 w-8 text-primary" />}
            title="Accords & Paroles"
            description="Joue facilement avec les accords synchronisés."
          />
          <FeatureCard
            icon={<Tags className="h-8 w-8 text-primary" />}
            title="Tags & Genres"
            description="Classe ta musique par style ou humeur."
          />
          <FeatureCard
            icon={<Star className="h-8 w-8 text-primary" />}
            title="Favoris"
            description="Sauvegarde les morceaux que tu adores."
          />
        </section>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
