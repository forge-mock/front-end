export function getCookie(name: string): string | null {
  const nameEq = `${name}=`;
  const cookies = document.cookie.split(";");

  for (const element of cookies) {
    const cookie = element.trim();

    if (cookie.startsWith(nameEq)) {
      return decodeURIComponent(cookie.substring(nameEq.length));
    }
  }

  return null;
}

export function setCookie(name: string, value: string, days: number = 30): void {
  let expires = "";

  const date = new Date();
  date.setDate(date.getDate() + days);
  expires = `; expires=${date.toUTCString()}`;

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/`;
}
