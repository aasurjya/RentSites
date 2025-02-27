import Image from "next/image";

interface RoomCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

export default function RoomCard({ src, alt, title, description, price }: RoomCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="rounded-md mb-2"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <p className="text-lg font-bold">{price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Book Now
      </button>
    </div>
  );
}
