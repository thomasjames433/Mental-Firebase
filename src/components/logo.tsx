import { HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="KindredAI Home">
      <HeartHandshake className="h-6 w-6 text-accent" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        KindredAI
      </span>
    </Link>
  );
}
