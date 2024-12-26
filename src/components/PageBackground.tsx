import Image from 'next/image'

interface PageBackgroundProps {
  imageSrc: string;
}

export function PageBackground({ imageSrc }: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

