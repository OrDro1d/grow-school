import Image from 'next/image';
import Link from 'next/link';

export default function TargetAudienceCard({
  title,
  text,
  btnText,
  imageSrc,
  className,
  flip = false,
}: {
  title: string;
  text: string;
  imageSrc: string;
  btnText: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <section
      className={`hover:border-skiey gap-16 rounded-2xl shadow-lg hover:shadow-skiey/40 border-2 border-gray-200 bg-white px-12 py-8 flex justify-evenly transition-all ${className}`}
    >
      {flip ? null : <Image src={imageSrc} width={160} height={160} alt=''></Image>}
      <div className='flex flex-col'>
        <h3
          className={`${flip ? 'self-end text-right' : 'self-start'} text-xl md:text-2xl font-semibold`}
        >
          {title}
        </h3>
        <p
          className={`${flip ? 'self-end text-right' : 'self-start'} mt-2 text-sm md:text-base max-w-128`}
        >
          {text}
        </p>
        <Link
          className={`${flip ? 'self-end' : 'self-start'} border-skiey border-2 w-fit py-4 px-8 mt-4 rounded-4xl hover:bg-skiey hover:text-white transition-all`}
          href={`/`}
        >
          {btnText}
        </Link>
      </div>
      {flip ? <Image src={imageSrc} width={160} height={160} alt=''></Image> : null}
    </section>
  );
}
