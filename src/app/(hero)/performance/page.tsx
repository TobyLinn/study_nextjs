import Hero from '@/components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance',
  description: 'Performance',
};

export default function Performance() {
  return (
    <Hero
      heroImage="https://picsum.photos/seed/performance/1920/1080?random=1 "
      altTxt="PerformanceSrc"
      content="Performance"
    />
  );
}
