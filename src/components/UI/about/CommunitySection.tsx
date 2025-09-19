import Image from 'next/image';

export default function CommunitySection({
  imageSrc,
  className,
}: {
  imageSrc: string;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-col items-center px-8 md:px-16 py-16 bg-gradient-to-tr from-blue-600 to-purple-200 border-t-2 border-gray-200 ${className}`}
    >
      <div className='flex flex-col items-center gap-4 text-center'>
        <h2 className='font-bold text-4xl  md:text-5xl text-white'>Присоединяйтесь!</h2>
        <p className='text-sm sm:text-base md:text-xl text-gray-100 max-w-5xl'>
          Главная ценность нашей платформы - это сообщество разделяющих общие ценности и стремящиеся
          к знаниям людей. Присоединяйтесь и приступайте к учебе и обучению на самой дружелюбной
          платформе Grow School!
        </p>
      </div>
      <Image src={imageSrc} alt={''} width={500} height={50} />
    </section>
  );
}
