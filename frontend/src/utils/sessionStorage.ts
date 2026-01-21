export const getSessionNumber = (key: string, fallback: number): number => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const stored = window.sessionStorage.getItem(key);
  if (!stored) {
    return fallback;
  }

  const parsed = Number(stored);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export const setSessionNumber = (key: string, value: number): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!Number.isFinite(value)) {
    return;
  }

  window.sessionStorage.setItem(key, String(value));
};
