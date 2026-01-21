export const getLocalNumber = (key: string, fallback: number): number => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const stored = window.localStorage.getItem(key);
  if (!stored) {
    return fallback;
  }

  const parsed = Number(stored);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export const setLocalNumber = (key: string, value: number): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!Number.isFinite(value)) {
    return;
  }

  window.localStorage.setItem(key, String(value));
};
