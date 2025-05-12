import Hero from '@/components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

export default function Page() {
  return (
    <Hero
      heroImage="https://picsum.photos/seed/Professional/1920/1080?random=1 "
      altTxt="ProfessionalSrc"
      content="Professional Cloud Hosting"
    />
  );
}
