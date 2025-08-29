"use client";

import { IStepClient } from "@/types/Step.interface";

import { useState } from "react";

export default function StepContentForm({
	initialData,
	updateStepAction,
	deleteStepAction
}: {
	initialData: IStepClient;
	updateStepAction: (currentStep: IStepClient) => Promise<void>;
	deleteStepAction: (currentStep: IStepClient) => Promise<void>;
}) {
	const [step, setStep] = useState(initialData);
	return (
		<form className="flex flex-col gap-2 px-4">
			<label htmlFor="step-content" className="text-2xl font-medium">
				Содержание шага
			</label>
			<textarea
				className="p-4 border-2 border-gray-200 resize-none w-4xl rounded-2xl focus:outline-skiey"
				id="step-content"
				name="step-content"
				placeholder="введите содержимое шага"
				title="Содержимое шага"
				inputMode="text"
				required
				rows={13}
				maxLength={9999}
				value={step.content ?? "..."}
				onChange={(e) =>
					setStep((prev) => ({ ...prev, content: e.target.value }))
				}
			></textarea>
			<div className="flex gap-4">
				<button
					className="px-16 py-4 text-xs font-medium transition-all border-2 shadow-lg cursor-pointer w-fit md:text-base border-skiey rounded-4xl  hover:bg-skiey hover:text-white shadow-black/10 hover:shadow-skiey/20"
					type="button"
					onClick={(e) => updateStepAction(step)}
				>
					Сохранить
				</button>
				<button
					className="flex items-center px-16 py-4 text-xs font-medium md:text-base transition-all bg-white border-2 border-red-500 shadow-lg cursor-pointer rounded-4xl w-40h-full shadow-black/10 hover:text-white hover:bg-red-500 hover:shadow:red-700/20 hover:border-red-700"
					type="button"
					onClick={(e) => deleteStepAction(step)}
				>
					Удалить шаг 🗑️
				</button>
			</div>
		</form>
	);
}
