'use client';

import Infographics from '@UI/infographics/Infographics'; // Импортируем вашу инфографику
import { ArrowRight, BookOpen, CheckCircle2, Menu, PlayCircle, Users, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white font-sans text-slate-800 selection:bg-emerald-100 selection:text-emerald-900'>
      {/* ---------------------------------------------------------------------------
          HEADER (Navigation)
      --------------------------------------------------------------------------- */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100'>
        <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {/* Logo Placeholder */}
            <div className='w-10 h-10 bg-gradient-to-tr from-sky-400 to-emerald-400 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-100'>
              G
            </div>
            <span className='font-bold text-xl tracking-tight'>Grow School</span>
          </div>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-8'>
            <a
              href='#features'
              className='text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors'
            >
              Возможности
            </a>
            <a
              href='#community'
              className='text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors'
            >
              Сообщество
            </a>
            <a
              href='#pricing'
              className='text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors'
            >
              Тарифы
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className='hidden md:flex items-center gap-4'>
            <button
              className='text-sm font-medium text-slate-600 hover:text-emerald-600 px-4 py-2 transition-colors'
              type='button'
            >
              Войти
            </button>
            <button
              className='bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5'
              type='button'
            >
              Начать бесплатно
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden p-2 text-slate-600'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type='button'
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5'>
            <button
              className='text-lg font-medium text-slate-600'
              onClick={() => setIsMenuOpen(false)}
              type='button'
            >
              Возможности
            </button>
            <button
              className='text-lg font-medium text-slate-600'
              onClick={() => setIsMenuOpen(false)}
              type='button'
            >
              Сообщество
            </button>
            <hr className='border-slate-100' />
            <button
              className='w-full bg-slate-900 text-white py-3 rounded-xl font-medium'
              type='button'
            >
              Начать бесплатно
            </button>
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------------------------
          HERO SECTION
      --------------------------------------------------------------------------- */}
      <section className='pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden'>
        {/* Decorative Blobs */}
        <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 -z-10' />
        <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3 -z-10' />

        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
            </span>
            <span className='text-xs font-medium text-slate-600 uppercase tracking-wide'>
              Платформа нового поколения
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900'>
            Учите и учитесь сами <br />
            <span className='bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent'>
              без границ
            </span>
          </h1>

          <p className='text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed'>
            Помогаем создавать, запускать и проходить онлайн‑курсы: удобный редактор, монетизация и
            аналитика в одном месте.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <button
              className='w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-slate-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2'
              type='button'
            >
              Приступить <ArrowRight size={20} />
            </button>
            <button
              className='w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2'
              type='button'
            >
              <PlayCircle size={20} className='text-slate-400' />
              Как это работает?
            </button>
          </div>

          {/* Social Proof */}
          <div className='mt-16 pt-8 border-t border-slate-100/50 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400 text-sm font-medium'>
            <span>Уже используют:</span>
            <div className='flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500'>
              {/* Logos placeholders */}
              <div className='h-6 w-20 bg-slate-200 rounded animate-pulse' />
              <div className='h-6 w-20 bg-slate-200 rounded animate-pulse' />
              <div className='h-6 w-20 bg-slate-200 rounded animate-pulse' />
              <div className='h-6 w-20 bg-slate-200 rounded animate-pulse' />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          ИНФОГРАФИКА (Ваш компонент)
      --------------------------------------------------------------------------- */}
      <Infographics />

      {/* ---------------------------------------------------------------------------
          FEATURES (Для кого?)
      --------------------------------------------------------------------------- */}
      <section className='py-24 bg-white px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-20'>
            <h2 className='text-3xl md:text-5xl font-bold mb-6'>Одна платформа — две роли</h2>
            <p className='text-slate-500 max-w-xl mx-auto text-lg'>
              Мы объединили инструменты для создания контента и комфортного обучения в единую
              экосистему.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Card 1: Authors */}
            <div className='group relative bg-[#f8fafc] rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-slate-100 hover:border-sky-200 transition-colors'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-sky-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              <div className='relative z-10'>
                <div className='w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-sky-500'>
                  <Zap size={28} />
                </div>
                <h3 className='text-3xl font-bold mb-4 text-slate-900'>Авторам</h3>
                <p className='text-slate-500 mb-8 leading-relaxed text-lg'>
                  Конструктор курсов, приём платежей, сертификаты и аналитика прогресса. Забудьте о
                  технических проблемах.
                </p>
                <ul className='space-y-3 mb-10'>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-sky-500' /> Конструктор курсов
                  </li>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-sky-500' /> Автоматизация выплат
                  </li>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-sky-500' /> Аналитика продаж
                  </li>
                </ul>
                <button
                  className='bg-white text-slate-900 px-8 py-3 rounded-full font-bold border border-slate-200 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all'
                  type='button'
                >
                  Создать курс
                </button>
              </div>
            </div>

            {/* Card 2: Students */}
            <div className='group relative bg-[#f8fafc] rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-slate-100 hover:border-emerald-200 transition-colors'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

              <div className='relative z-10'>
                <div className='w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm text-emerald-500'>
                  <BookOpen size={28} />
                </div>
                <h3 className='text-3xl font-bold mb-4 text-slate-900'>Студентам</h3>
                <p className='text-slate-500 mb-8 leading-relaxed text-lg'>
                  Практико‑ориентированные проекты, дорожные карты и сертификаты. Учитесь в удобном
                  темпе.
                </p>
                <ul className='space-y-3 mb-10'>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-emerald-500' /> Личный кабинет
                  </li>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-emerald-500' /> Дорожные карты
                  </li>
                  <li className='flex items-center gap-3 text-slate-600'>
                    <CheckCircle2 size={20} className='text-emerald-500' /> Сертификаты
                  </li>
                </ul>
                <button
                  className='bg-white text-slate-900 px-8 py-3 rounded-full font-bold border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition-all'
                  type='button'
                >
                  Начать учиться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          COMMUNITY (Присоединяйтесь)
      --------------------------------------------------------------------------- */}
      <section className='py-24 px-6 bg-slate-900 text-white relative overflow-hidden'>
        {/* Background pattern */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-8 text-emerald-400'>
            <Users size={32} />
          </div>
          <h2 className='text-4xl md:text-6xl font-bold mb-8'>Сила в сообществе</h2>
          <p className='text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed'>
            Главная ценность нашей платформы — это люди. Присоединяйтесь к тысячам единомышленников,
            которые уже меняют своё будущее с Grow School.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            {/* Avatars Stack */}
            <div className='flex items-center -space-x-4'>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className='w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold'
                >
                  U{i}
                </div>
              ))}
              <div className='w-12 h-12 rounded-full border-4 border-slate-900 bg-emerald-500 flex items-center justify-center text-xs font-bold'>
                +2k
              </div>
            </div>
            <span className='flex items-center text-emerald-400 font-bold ml-4'>
              Присоединиться бесплатно <ArrowRight size={16} className='ml-2' />
            </span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------
          FOOTER (Contacts & Links)
      --------------------------------------------------------------------------- */}
      <footer className='bg-white pt-24 pb-12 px-6 border-t border-slate-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-start gap-12 mb-16'>
            <div className='max-w-sm'>
              <div className='flex items-center gap-2 mb-6'>
                <div className='w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold'>
                  G
                </div>
                <span className='font-bold text-xl'>Grow School</span>
              </div>
              <p className='text-slate-500 mb-6'>
                Образовательная платформа, созданная с любовью к знаниям и людям.
              </p>
              <div className='flex flex-col gap-2 text-sm text-slate-600'>
                <a href='tel:+79780694485' className='hover:text-emerald-600 transition-colors'>
                  8 (800) 555-35-35
                </a>
                <a
                  href='mailto:grow@school.com'
                  className='hover:text-emerald-600 transition-colors'
                >
                  grow@school.com
                </a>
              </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto'>
              <div>
                <h4 className='font-bold mb-4'>Платформа</h4>
                <ul className='space-y-3 text-sm text-slate-500'>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Курсы
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Менторы
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Цены
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='font-bold mb-4'>Компания</h4>
                <ul className='space-y-3 text-sm text-slate-500'>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      О нас
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Карьера
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Блог
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className='font-bold mb-4'>Правовое</h4>
                <ul className='space-y-3 text-sm text-slate-500'>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Конфиденциальность
                    </a>
                  </li>
                  <li>
                    <a href='#' className='hover:text-emerald-600'>
                      Оферта
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400'>
            <p>© 2025 Grow School. Все права защищены.</p>
            <div className='flex gap-6'>
              <a href='#'>VK</a>
              <a href='#'>Telegram</a>
              <a href='#'>YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
