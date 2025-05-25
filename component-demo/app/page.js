import SocialIconsCircle from "./SocialIconsCircle";
import SocialIconsMarquee from "./SocialIconsMarquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SocialIconsCircle />
      <SocialIconsMarquee />
    </main>
  );
}