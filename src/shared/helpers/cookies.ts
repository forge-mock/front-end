function getCookie(name: string): string | null {
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

function setCookie(name: string, value: string, days: number = 365): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;

  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

export { getCookie, setCookie };
