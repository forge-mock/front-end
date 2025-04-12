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
