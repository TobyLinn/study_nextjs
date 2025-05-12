'use client';

import { photos } from '@/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {
  const photo = photos.find((photo) => photo.id === params.id)!;
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-500/[.8]"
      onClick={() => router.back()}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={400}
        height={400}
        className="rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
