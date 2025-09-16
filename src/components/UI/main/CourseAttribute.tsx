export default function CourseAttribute({ children }: { children: React.ReactNode }) {
  return (
    <p className='inline-block px-4 py-2 text-sm bg-gray-200 rounded-4xl whitespace-nowrap'>
      <span>{children}</span>
    </p>
  );
}
