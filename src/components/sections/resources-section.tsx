import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenText, Headphones, Users, HeartHandshake } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

interface Resource {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const resources: Resource[] = [
  {
    Icon: BookOpenText,
    title: '心灵成长文章',
    description: '定期更新的专业文章，涵盖心理健康、情绪管理、人际关系等主题，助您提升自我认知与生活品质。',
  },
  {
    Icon: Headphones,
    title: '冥想指导',
    description: '专业的冥想音频指导，帮助您减轻压力、改善睡眠、提升专注力，随时随地获得内心平静。',
  },
  {
    Icon: Users,
    title: '工作坊与课程',
    description: '定期举办线上/线下工作坊，主题包括情绪管理、亲密关系、亲子教育等，与专家面对面交流学习。',
  },
  {
    Icon: HeartHandshake,
    title: '自我疗愈工具',
    description: '提供实用的自我探索工具和练习，包括情绪日记、OH卡应用、自我关怀指南等，助您踏上自我成长之旅。',
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-background py-24">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl font-headline">
          精选资源
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded bg-accent"></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <Card key={index} className="text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="items-center">
                <resource.Icon className="mb-4 h-14 w-14 text-primary" />
                <CardTitle className="text-xl text-foreground font-headline">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
