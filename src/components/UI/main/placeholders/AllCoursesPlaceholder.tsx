export default function AllCoursesPlaceholder({ className }: { className?: string }) {
  return (
    <section
      id="recommended-courses"
      className={`mx-auto bg-gray-100 w-2xl h-xl p-16 rounded-2xl ${className}`}
    >
      <h2 className="text-gray-500 font-medium  text-center">Загрузка всех курсов...</h2>
    </section>
  )
}
