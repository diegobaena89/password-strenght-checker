export function hasLowerCaseChars(password: string) {
  return /[a-z]/.test(password);
}

export function hasUpperCaseChars(password: string) {
  return /[A-Z]/.test(password);
}

export function hasNumbers(password: string) {
  return /[0-9]/.test(password);
}

export function hasSymbols(password: string) {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
}

export function hasEightChars(password: string) {
  return password.length >= 8;
}
