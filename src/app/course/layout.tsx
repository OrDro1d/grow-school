import NavBar from '@common/NavBar';

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
