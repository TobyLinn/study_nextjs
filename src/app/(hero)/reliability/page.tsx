import Hero from '@/components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reliability',
  description: 'Reliability',
};
export default function Reliability() {
  return (
    <Hero
      heroImage="https://picsum.photos/seed/reliability/1920/1080?random=1 "
      altTxt="ReliabilitySrc"
      content="Reliability Content"
    />
  );
}
