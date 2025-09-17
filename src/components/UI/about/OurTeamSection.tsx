export default function OurTeamSection({
  team,
  className,
}: {
  team: { name: string; role: string; initials: string }[];
  className?: string;
}) {
  return (
    <section className={` ${className}`}>
      <div className='mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14'>
        <h2 className='text-2xl font-semibold tracking-tight'>Команда</h2>
        <div className='mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {team.map((t) => (
            <div key={t.name} className='rounded-2xl border border-gray-200 bg-white p-6'>
              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full'>
                  {t.initials}
                </div>
                <div>
                  <p className='font-semibold'>{t.name}</p>
                  <p className='text-sm'>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
