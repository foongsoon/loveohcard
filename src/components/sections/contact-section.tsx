import { Button } from '@/components/ui/button';
import { Handshake, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-primary to-neutral-700 py-24 text-primary-foreground">
      <div className="container mx-auto max-w-3xl px-5 text-center">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl font-headline">
          联系我们
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded bg-accent"></div>
        <div className="rounded-xl bg-background/10 p-8 shadow-xl backdrop-blur-md md:p-10">
          <Handshake className="mx-auto mb-5 h-16 w-16 text-accent" />
          <h3 className="mb-3 text-3xl font-semibold font-headline">心灵捕手聆听您的心</h3>
          <p className="mb-8 text-lg">
            专业心理咨询师 · 家庭关系顾问 · 身心灵导师
          </p>
          
          <div className="mb-6 flex items-center justify-center text-xl">
            <Phone className="mr-3 h-7 w-7 text-accent" />
            <span>电话/WhatsApp: 012-2856060</span>
          </div>
          
          <div className="mb-10 flex items-center justify-center text-xl">
            <Mail className="mr-3 h-7 w-7 text-accent" />
            <span>邮箱: LOVE@love.sun.edu.my</span>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full rounded-full bg-accent px-7 py-6 text-md font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto">
              <Link href="tel:012-2856060">
                <Phone className="mr-2 h-5 w-5" /> 立即致电
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full border-accent bg-transparent px-7 py-6 text-md font-semibold text-accent hover:bg-accent/10 sm:w-auto">
              <Link href="https://wa.me/60122856060" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp咨询
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full rounded-full border-accent bg-transparent px-7 py-6 text-md font-semibold text-accent hover:bg-accent/10 sm:w-auto">
              <Link href="mailto:LOVE@love.sun.edu.my">
                <Mail className="mr-2 h-5 w-5" /> 发送邮件
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
