import AboutUsSection from '@UI/about/AboutUsSection';
import ContactsSection from '@UI/about/ContactsSection';
import CourseCreationSection from '@UI/about/CourseCreationSection';
import HeroSection from '@UI/about/HeroSection';
import StatsSection from '@UI/about/StatsSection';
import TargetAudienceSection from '@UI/about/TargetAudienceSection';

export default function AboutPage() {
  // пример данных
  const stats = [
    { label: 'Студентов', value: '10 000+' },
    { label: 'Авторов', value: '500+' },
    { label: 'Курсов', value: '250+' },
    { label: 'Оценка', value: '4.9/5' },
  ];

  return (
    <main>
      <div className='bg-gradient-to-tr from-skiey to-mint p-2'>
        <HeroSection className={'mx-auto'}></HeroSection>
        <AboutUsSection className={'mx-auto'}></AboutUsSection>
        <div className='flex flex-col items-center gap-4 p-4 rounded-4xl mx-2 border-2 bg-white border-gray-200 mt-8'>
          <TargetAudienceSection></TargetAudienceSection>
          <CourseCreationSection></CourseCreationSection>
          <StatsSection stats={stats}></StatsSection>
          <ContactsSection></ContactsSection>
        </div>
      </div>
    </main>
  );
}
