import NavBar from '@common/NavBar';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
