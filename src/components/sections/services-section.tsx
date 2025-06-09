import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface Service {
  imageSrc: string;
  imageAlt: string;
  aiHint: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    imageSrc: 'https://pub-dac368110280423d8e92133d09875ab0.r2.dev/1_600x400.png',
    imageAlt: '心理咨询',
    aiHint: 'counseling therapy',
    title: '专业心理辅导',
    description: '提供一对一心理咨询服务，帮助您应对压力、焦虑、抑郁等情绪问题，重建内心平衡与健康心态。',
  },
  {
    imageSrc: 'https://pub-dac368110280423d8e92133d09875ab0.r2.dev/2_600x400.png',
    imageAlt: '身心灵疗愈',
    aiHint: 'wellness zen',
    title: '身心灵成长',
    description: '通过冥想、正念练习、能量疗愈等方法，帮助您实现身心灵的和谐统一，提升整体幸福感。',
  },
  {
    imageSrc: 'https://pub-dac368110280423d8e92133d09875ab0.r2.dev/3_600x400.png',
    imageAlt: '家庭关系',
    aiHint: 'support group',
    title: '家庭关系辅导',
    description: '改善夫妻关系、亲子沟通、家庭矛盾，帮助您建立和谐温暖的家庭氛围，增进家庭成员的情感连接。',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl font-headline">
          我们的专业服务
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded bg-accent"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={service.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <Link href="#contact" passHref>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90" aria-label={`了解更多关于${service.title}`}>
                    了解更多
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
