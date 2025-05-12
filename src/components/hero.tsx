import Image from 'next/image';

interface HeroProps {
  heroImage: string;
  altTxt: string;
  content: string;
}

export default function Hero({ heroImage, altTxt, content }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={heroImage} alt={altTxt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-60">
        <h1 className="text-6xl text-white">{content}</h1>
      </div>
    </div>
  );
}
