import { photos } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
export default function page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-3xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {photos.map((photo) => (
            <Link href={`/photos/${photo.id}`} className="group" key={photo.id}>
              <div className="xl:aspect-7/8 aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={photo.src}
                  alt={photo.alt}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="mt-4 line-clamp-1 text-sm text-gray-700">
                {photo.alt}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${photo.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
