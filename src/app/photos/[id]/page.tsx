import { photos } from '@/data';
import Image from 'next/image';

export default function Page({ params }: { params: { id: String } }) {
  const photo = photos.find((photo) => photo.id === params.id)!;
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={400}
        height={400}
        className="mx-auto block rounded-lg"
      />
      <div className="mt-5 rounded-lg border-2 border-dashed border-gray-500 p-3 leading-8">
        <p>
          <strong>Title:</strong>
          {photo.alt}
        </p>
        <p>
          <strong>Price:</strong>
          {photo.price}
        </p>
        <p>
          <strong>Description:</strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ea
          commodi, assumenda eius voluptatem illum laudantium dolores beatae!
          Exercitationem vitae suscipit pariatur dolores. Officiis, doloremque
          molestiae omnis quae aliquam rerum.
        </p>
      </div>
    </div>
  );
}
