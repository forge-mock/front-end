export function getLocalStorageItem<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

export function setLocalStorageItem(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageItem(key: string): void {
  localStorage.removeItem(key);
}
