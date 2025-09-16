'use client';

import { startTransition, useActionState } from 'react';

export default function AddStepBtn({
  children,
  courseId,
  lessonId,
  addStepAction,
  className,
}: {
  children: string;
  courseId: string;
  lessonId: string;
  addStepAction: (courseId: string, lessonId: string) => Promise<void>;
  className?: string;
}) {
  async function increment(prevState: number) {
    try {
      await addStepAction(courseId, lessonId);
    } catch (error: unknown) {
      console.log(error instanceof Error ? error.message : error);
    }
    return prevState + 1;
  }

  const [_state, clickAction, isPending] = useActionState(increment, 0);

  return (
    <button
      className={`${
        isPending
          ? 'hover:cursor-default border-gray-200 bg-gray-100'
          : 'hover:cursor-pointer hover:bg-mint/20 transition-all border-green-400'
      } inline-block px-6 py-4 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-2  ${className}`}
      type='button'
      onClick={() => startTransition(() => clickAction())}
      disabled={isPending}
    >
      {isPending ? 'Добавление шага...' : children}
    </button>
  );
}
