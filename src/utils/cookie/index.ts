export function getCookie(name: string) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg) || [];
  if (arr.length > 0) {
    return decodeURIComponent(arr[2]).replace(/"/g, '');
  } else {
    return '';
  }
}
