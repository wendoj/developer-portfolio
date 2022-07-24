import Image from "next/image";

export default function Project({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div id="project-card" className="bg-[#000]/20 backdrop-blur-xl">
      <Image
        src="https://dummyimage.com/700x500/"
        alt={name}
        width={700}
        height={500}
        layout="responsive"
      />
      <div className="p-10">
        <h2 className="text-lg">{name}</h2>
        <p className="text-sm opacity-50">{description}</p>
      </div>
    </div>
  );
}
