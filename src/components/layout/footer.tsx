import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 py-10 text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-semibold text-accent font-headline">心灵捕手</h3>
            <p className="text-sm text-muted-foreground">
              致力于提供专业的心理辅导与身心灵成长服务，帮助个人与家庭实现内在和谐与幸福生活。
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold text-accent font-headline">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="text-muted-foreground hover:text-accent">首页</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-accent">服务项目</Link></li>
              <li><Link href="#resources" className="text-muted-foreground hover:text-accent">精选资源</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-accent">联系我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-semibold text-accent font-headline">工作时间</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>周一至周五: 9:00 AM - 6:00 PM</li>
              <li>周六: 10:00 AM - 4:00 PM</li>
              <li>周日: 仅限预约</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border/20 pt-8 text-center">
          <p className="text-sm text-muted-foreground/70">
            &copy; {new Date().getFullYear()} 心灵捕手心理辅导中心. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
}
