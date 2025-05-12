import Hero from '@/components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale',
  description: 'Scale',
};
export default function Scale() {
  return (
    <Hero
      heroImage="https://picsum.photos/seed/scale/1920/1080?random=1 "
      altTxt="ScaleSrc"
      content="Scale Content"
    />
  );
}
