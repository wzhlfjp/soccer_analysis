'use client';

import { useMemo, useState } from 'react';

const JUNK_FOODS = [
  'chips',
  'french fries',
  'fries',
  'candy',
  'donut',
  'doughnut',
  'ice cream',
  'pizza',
  'soda',
  'burger',
  'hot dog',
  'cookies',
  'cake',
];

function checkFoodType(foodName) {
  const cleaned = foodName.trim().toLowerCase();

  if (!cleaned) {
    return { status: 'idle', message: 'Type a food name to get started.' };
  }

  const isJunkFood = JUNK_FOODS.some((item) => cleaned.includes(item));

  if (isJunkFood) {
    return {
      status: 'junk',
      message: `"${foodName}" is likely junk food.`,
    };
  }

  return {
    status: 'not-junk',
    message: `"${foodName}" is likely not junk food.`,
  };
}

export default function HomePage() {
  const [foodName, setFoodName] = useState('');

  const result = useMemo(() => checkFoodType(foodName), [foodName]);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto flex w-full max-w-xl flex-col gap-4 p-6 sm:p-10">
        <h1 className="text-3xl font-bold">Junk or No Junk</h1>
        <p className="text-sm text-slate-600">
          Enter a food item and this beginner-friendly checker will tell you if it is likely junk food.
        </p>

        <label htmlFor="food-input" className="text-sm font-medium">
          Food name
        </label>
        <input
          id="food-input"
          type="text"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          placeholder="Example: apple, pizza, salad"
          className="rounded-md border border-slate-300 bg-white px-3 py-2 outline-none ring-sky-500 transition focus:ring-2"
        />

        <div
          className={`rounded-md border p-4 text-sm font-medium ${
            result.status === 'junk'
              ? 'border-red-300 bg-red-50 text-red-700'
              : result.status === 'not-junk'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                : 'border-slate-300 bg-white text-slate-600'
          }`}
        >
          {result.message}
        </div>
      </section>
    </main>
  );
}
