export default function ProjectHistorySection({
  timeline,
  className,
}: {
  timeline: { year: string; text: string }[];
  className?: string;
}) {
  return (
    <section className={`border-t border-gray-200 ${className}`}>
      <div className='mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>История</h2>
        <ol className='mt-6 space-y-4'>
          {timeline.map((i) => (
            <li key={i.year} className='rounded-xl border border-gray-200 bg-gray-50 p-5'>
              <div className='flex items-center gap-3'>
                <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-900 text-sm font-semibold text-white'>
                  {i.year}
                </span>
                <p className='text-sm text-gray-700'>{i.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
