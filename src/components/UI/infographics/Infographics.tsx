'use client';

import {
  ArrowDown,
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Headphones,
  MessageCircle,
  MousePointer2,
  Video,
} from 'lucide-react';

export default function Infographics() {
  return (
    <section className='w-full bg-[#fdfbf7] text-slate-800 font-sans overflow-hidden relative'>
      {/* ГЛОБАЛЬНАЯ ЛИНИЯ "ПУТИ" */}
      <div
        className='absolute top-0 left-8 md:left-1/2 w-px h-full border-l-2 border-dashed border-emerald-200/50 -translate-x-1/2 z-0'
        aria-hidden='true'
      >
        <div className='absolute top-0 left-[-2px] w-1 h-20 bg-gradient-to-b from-transparent to-emerald-400 animate-drop-flow' />
      </div>

      <div className='max-w-5xl mx-auto px-6 relative z-10'>
        {/* БЛОК 1: ВСТУПЛЕНИЕ */}
        <div className='py-24 md:py-32 flex flex-col items-center text-center'>
          <h2 className='text-3xl md:text-5xl font-bold mb-6 leading-tight bg-white/80 backdrop-blur-sm p-4 rounded-2xl'>
            Эффективность через комфорт: <br className='hidden md:block' />
            почему <span className='text-emerald-600'>GrowSchool</span> работает
          </h2>
          <p className='text-slate-500 max-w-lg text-lg mb-12 bg-[#fdfbf7] p-2 rounded-lg'>
            Стресс и запутанные интерфейсы снижают успеваемость. Мы убрали визуальный шум, чтобы
            освободить место для знаний.
          </p>

          <div className='relative group'>
            <div className='absolute inset-0 bg-emerald-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700' />
            <div className='relative bg-white border border-emerald-100 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(16,185,129,0.1)] flex flex-col items-center'>
              <span className='text-7xl md:text-9xl font-bold bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text text-transparent tracking-tighter'>
                +45%
              </span>
              <span className='mt-4 text-emerald-800 font-medium bg-emerald-50 px-4 py-2 rounded-full text-sm uppercase tracking-wide'>
                К усвоению материала
              </span>
            </div>
          </div>
        </div>

        {/* БЛОК 2: СРАВНЕНИЕ */}
        <div className='py-12 md:py-24'>
          <div className='text-center mb-16 bg-[#fdfbf7] inline-block w-full'>
            <h3 className='text-3xl font-bold mb-2'>Мы убрали барьеры</h3>
            <p className='text-slate-500'>между студентом и знаниями</p>
          </div>

          <div className='grid gap-8'>
            {/* Время на старт */}
            <div className='bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100'>
              <div className='flex items-center gap-3 mb-6'>
                <Clock className='text-emerald-500' aria-label='Иконка часов' />
                <h4 className='font-bold text-lg'>Время на старт урока</h4>
              </div>

              <div className='space-y-6'>
                <div className='relative'>
                  <div className='flex justify-between text-sm text-slate-400 mb-2'>
                    <span>Обычная LMS</span>
                    <span>5 мин</span>
                  </div>
                  <div className='h-12 bg-slate-100 rounded-xl w-full relative overflow-hidden'>
                    <div className='absolute top-0 left-0 h-full w-full bg-slate-200/50 flex items-center px-4'>
                      <span className='text-xs text-slate-400 uppercase font-bold tracking-widest'>
                        Загрузка...
                      </span>
                    </div>
                  </div>
                </div>

                <div className='relative'>
                  <div className='flex justify-between text-sm text-emerald-700 font-medium mb-2'>
                    <span>GrowSchool</span>
                    <span>30 сек</span>
                  </div>
                  <div className='h-12 bg-emerald-50 rounded-xl w-[10%] min-w-[120px] relative overflow-hidden border border-emerald-100'>
                    <div className='absolute top-0 left-0 h-full w-full bg-emerald-400 flex items-center px-4 text-white animate-pulse'>
                      <span className='text-xs font-bold uppercase tracking-widest'>Готово</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              {/* Клики */}
              <div className='bg-white p-8 rounded-3xl shadow-sm border border-slate-100'>
                <div className='flex items-center gap-3 mb-6'>
                  <MousePointer2 className='text-emerald-500' aria-label='Иконка мыши' />
                  <h4 className='font-bold text-lg'>Кликов до чата</h4>
                </div>
                <div className='flex justify-between items-end h-32'>
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-4xl font-bold text-slate-300'>7</span>
                    <div className='flex flex-col gap-1'>
                      {[...Array(7)].map((_, i) => (
                        <div key={i} className='w-12 h-2 bg-slate-200 rounded-full' />
                      ))}
                    </div>
                    <span className='text-xs text-slate-400'>Другие</span>
                  </div>
                  <div className='pb-8 text-slate-300'>vs</div>
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-5xl font-bold text-emerald-500'>1</span>
                    <div className='w-16 h-14 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200'>
                      <MessageCircle size={24} aria-label='Иконка сообщения' />
                    </div>
                    <span className='text-xs font-bold text-emerald-700'>GrowSchool</span>
                  </div>
                </div>
              </div>

              {/* Поддержка */}
              <div className='bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between'>
                <div className='flex items-center gap-3 mb-6'>
                  <Headphones className='text-emerald-500' aria-label='Иконка наушников' />
                  <h4 className='font-bold text-lg'>Техподдержка</h4>
                </div>

                <div className='space-y-4'>
                  <div className='p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex justify-between items-center'>
                    <span>Ответ за 24 часа</span>
                    <Clock size={18} />
                  </div>
                  <div className='p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-100 flex justify-between items-center transform scale-105'>
                    <span className='font-bold'>Live-режим</span>
                    <div className='flex items-center gap-2'>
                      <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-white'></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* БЛОК 3: ЭКОСИСТЕМА (ИСПРАВЛЕННЫЙ) */}
        <div className='py-24 relative'>
          <div className='text-center mb-16 bg-[#fdfbf7] relative z-10'>
            <h3 className='text-3xl font-bold'>Всё в одном потоке</h3>
            <p className='text-slate-500 mt-2'>Бесшовная интеграция инструментов</p>
          </div>

          {/* Контейнер схемы */}
          <div className='relative w-full max-w-3xl mx-auto h-[400px] md:h-[500px]'>
            {/* SVG Слой для линий (Исправлен title) */}
            <svg
              className='absolute inset-0 w-full h-full pointer-events-none z-0'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
            >
              <title>Схема связей экосистемы GrowSchool</title>
              {/* Линии от углов к центру (50, 50) */}
              {/* Top Left to Center */}
              <line
                x1='20'
                y1='20'
                x2='45'
                y2='45'
                stroke='#cbd5e1'
                strokeWidth='0.5'
                strokeDasharray='2 2'
              />
              {/* Top Right to Center */}
              <line
                x1='80'
                y1='20'
                x2='55'
                y2='45'
                stroke='#cbd5e1'
                strokeWidth='0.5'
                strokeDasharray='2 2'
              />
              {/* Bottom Left to Center */}
              <line
                x1='20'
                y1='80'
                x2='45'
                y2='55'
                stroke='#cbd5e1'
                strokeWidth='0.5'
                strokeDasharray='2 2'
              />
              {/* Bottom Right to Center */}
              <line
                x1='80'
                y1='80'
                x2='55'
                y2='55'
                stroke='#cbd5e1'
                strokeWidth='0.5'
                strokeDasharray='2 2'
              />
            </svg>

            {/* Центральный элемент: Студент (Без лишней точки) */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20'>
              <div className='w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-emerald-50 flex items-center justify-center'>
                <span className='font-bold text-lg text-slate-800'>Студент</span>
              </div>
            </div>

            {/* Иконки по углам (Grid-like positioning via absolute %) */}

            {/* Top Left: Video */}
            <div className='absolute top-[10%] left-[5%] md:left-[10%] flex flex-col items-center group w-32 text-center'>
              <div className='w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-indigo-100 group-hover:-translate-y-1 transition-transform'>
                <Video size={28} aria-label='Видео-урок' />
              </div>
              <span className='text-sm font-medium text-slate-600 bg-[#fdfbf7] px-2'>
                Видео-урок
              </span>
            </div>

            {/* Top Right: Chat */}
            <div className='absolute top-[10%] right-[5%] md:right-[10%] flex flex-col items-center group w-32 text-center'>
              <div className='w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-orange-100 group-hover:-translate-y-1 transition-transform'>
                <MessageCircle size={28} aria-label='Чат с ментором' />
              </div>
              <span className='text-sm font-medium text-slate-600 bg-[#fdfbf7] px-2'>
                Чат с ментором
              </span>
            </div>

            {/* Bottom Left: Homework */}
            <div className='absolute bottom-[10%] left-[5%] md:left-[10%] flex flex-col items-center group w-32 text-center'>
              <div className='w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-blue-100 group-hover:-translate-y-1 transition-transform'>
                <FileText size={28} aria-label='Домашка' />
              </div>
              <span className='text-sm font-medium text-slate-600 bg-[#fdfbf7] px-2'>Домашка</span>
            </div>

            {/* Bottom Right: Calendar */}
            <div className='absolute bottom-[10%] right-[5%] md:right-[10%] flex flex-col items-center group w-32 text-center'>
              <div className='w-16 h-16 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-3 shadow-sm border border-pink-100 group-hover:-translate-y-1 transition-transform'>
                <Calendar size={28} aria-label='Календарь' />
              </div>
              <span className='text-sm font-medium text-slate-600 bg-[#fdfbf7] px-2'>
                Календарь
              </span>
            </div>
          </div>
        </div>

        {/* БЛОК 4: COR (Пончик) */}
        <div className='py-24'>
          <div className='bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden relative'>
            <div className='relative z-10 flex flex-col md:flex-row items-center gap-12'>
              <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold mb-4'>Студенты доходят до финала</h3>
                <p className='text-slate-500 mb-8 leading-relaxed'>
                  Благодаря интуитивному UX студенты тратят энергию на учебу, а не на борьбу с
                  интерфейсом.
                </p>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-slate-300 rounded-full'></div>
                    <span className='text-sm text-slate-500'>Рынок (15%)</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
                    <span className='text-sm font-bold text-emerald-700'>GrowSchool (68%)</span>
                  </div>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-center'>
                <div className='relative w-64 h-64'>
                  <svg className='w-full h-full transform -rotate-90' viewBox='0 0 36 36'>
                    <title>Диаграмма доходимости студентов</title>
                    <path
                      className='text-slate-100'
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3.8'
                    />
                    <path
                      className='text-emerald-500 drop-shadow-md'
                      strokeDasharray='68, 100'
                      d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='3.8'
                      strokeLinecap='round'
                    />
                  </svg>
                  <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <span className='text-5xl font-bold text-slate-800'>68%</span>
                    <span className='text-xs text-slate-400 font-medium uppercase tracking-wider mt-1'>
                      COR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* БЛОК 5: ПРЕПОДАВАТЕЛЬ (ИСПРАВЛЕННЫЙ ТЕКСТ) */}
        <div className='py-24'>
          <div className='text-center mb-16 bg-[#fdfbf7]'>
            <h3 className='text-3xl font-bold mb-4'>Больше времени на творчество</h3>
            <p className='text-slate-500'>меньше на рутину</p>
          </div>

          <div className='bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100'>
            {/* BEFORE */}
            <div className='mb-10'>
              <div className='flex justify-between mb-3 text-sm font-medium text-slate-400 uppercase tracking-wide'>
                <span>Было (Обычная работа)</span>
              </div>
              <div className='h-14 flex w-full rounded-2xl overflow-hidden opacity-70 grayscale'>
                <div className='w-[40%] bg-slate-300 flex items-center justify-center text-white text-xs md:text-sm font-bold border-r border-white/20 p-1'>
                  Настройка 40%
                </div>
                <div className='w-[30%] bg-slate-400 flex items-center justify-center text-white text-xs md:text-sm font-bold border-r border-white/20 p-1'>
                  Проверка 30%
                </div>
                <div className='w-[30%] bg-slate-500 flex items-center justify-center text-white text-xs md:text-sm font-bold p-1'>
                  Общение 30%
                </div>
              </div>
            </div>

            <div className='flex justify-center -my-6 relative z-10'>
              <div className='bg-white p-2 rounded-full border border-slate-100 shadow-sm'>
                <ArrowDown className='text-emerald-500' aria-label='Стрелка вниз' />
              </div>
            </div>

            {/* AFTER (ИСПРАВЛЕНО) */}
            <div className='mt-10'>
              <div className='flex justify-between mb-3 text-sm font-bold text-emerald-800 uppercase tracking-wide'>
                <span>Стало (GrowSchool)</span>
              </div>
              <div className='h-16 flex w-full rounded-2xl overflow-hidden shadow-lg shadow-emerald-100/50'>
                {/* 10% Настройка */}
                <div className='w-[10%] bg-emerald-200 flex items-center justify-center text-emerald-900 border-r border-white/20 relative group'>
                  <span className='text-[10px] md:text-xs font-bold rotate-0 md:rotate-0 truncate px-1'>
                    <span className='hidden sm:inline'>Настр. </span>10%
                  </span>
                </div>

                {/* 20% Авто-проверка */}
                <div className='w-[20%] bg-[#10b981] flex items-center justify-center text-white border-r border-white/20'>
                  <span className='text-[10px] md:text-xs font-bold text-center leading-tight px-1'>
                    <span className='hidden sm:inline'>Авто </span>20%
                  </span>
                </div>

                {/* 70% Творчество (Зеленый градиент) */}
                <div className='w-[70%] bg-[#059669] flex items-center justify-center text-white'>
                  <span className='text-xs md:text-lg font-bold px-2 text-center'>
                    Живое общение 70%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* БЛОК 6: CTA */}
        <div className='py-24 text-center'>
          <div className='bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/30 rounded-full blur-[100px] group-hover:bg-emerald-600/40 transition-colors duration-700' />

            <div className='relative z-10'>
              <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                Почувствуйте разницу
              </h2>
              <p className='text-slate-300 text-lg mb-10 max-w-2xl mx-auto'>
                Создайте свой первый курс в атмосфере комфорта.
              </p>
              <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <button
                  className='bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2'
                  type='button'
                >
                  Начать бесплатно <ArrowRight size={20} aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes drop-flow {
          0% { top: 0; opacity: 0; height: 20px; }
          20% { opacity: 1; height: 80px; }
          80% { opacity: 1; height: 80px; }
          100% { top: 100%; opacity: 0; height: 20px; }
        }
        .animate-drop-flow {
          animation: drop-flow 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
