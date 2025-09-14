export default function Header({
  courseTitle,
  className,
}: {
  courseTitle: string
  className?: string
}) {
  return (
    <header className={`flex flex-col ${className}`}>
      <h1 className="text-2xl font-medium">Редактирование курса</h1>
      <h2 className="my-2 text-4xl font-bold">{courseTitle}</h2>
    </header>
  )
}
