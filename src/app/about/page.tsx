import AboutUsSection from '@UI/about/AboutUsSection';
import CommunitySection from '@UI/about/CommunitySection';
import ContactsSection from '@UI/about/ContactsSection';
import HeroSection from '@UI/about/HeroSection';
import TargetAudienceSection from '@UI/about/TargetAudienceSection';

export default function AboutPage() {
  return (
    <main>
      <div className='bg-gradient-to-tr from-skiey to-mint'>
        <HeroSection className={'mx-auto'}></HeroSection>
        <AboutUsSection className={'mx-auto'}></AboutUsSection>
        <TargetAudienceSection></TargetAudienceSection>
        <CommunitySection imageSrc={'/images/icons/community.png'}></CommunitySection>
        <ContactsSection></ContactsSection>
      </div>
    </main>
  );
}
