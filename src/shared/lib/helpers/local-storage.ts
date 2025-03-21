function getLocalStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

function setLocalStorage(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

export { getLocalStorage, setLocalStorage, removeLocalStorage };
