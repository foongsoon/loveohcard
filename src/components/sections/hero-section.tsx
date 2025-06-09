import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center text-center text-primary-foreground"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
      style={{ backgroundImage: "url('https://pub-dac368110280423d8e92133d09875ab0.r2.dev/1920x1080.png')" }}
    >
      <div className="absolute inset-0 bg-neutral-800/70 backdrop-blur-sm"></div>
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 pt-24 md:pt-20">
        <h1 className="mb-5 text-5xl font-bold animation-fadeInDown md:text-6xl font-headline text-shadow-custom">
          欢迎来到心灵捕手
        </h1>
        <p className="mb-8 text-xl animation-fadeInUp md:text-2xl">
          专业心理辅导 · 身心灵平衡 · 家庭和谐 · 个人成长
        </p>
        <Link href="#contact" passHref>
          <Button
            size="lg"
            className="rounded-full bg-secondary px-8 py-7 text-lg font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 hover:-translate-y-1"
            aria-label="预约咨询"
          >
            预约咨询
          </Button>
        </Link>
      </div>
    </section>
  );
}
