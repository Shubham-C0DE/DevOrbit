import { seedQuestions, STORAGE_KEY } from './data/initialQuestions.js';

export function loadQuestions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : seedQuestions;
  } catch {
    return seedQuestions;
  }
}

export function pct(n, d) {
  return d ? Math.round((n / d) * 100) : 0;
}
