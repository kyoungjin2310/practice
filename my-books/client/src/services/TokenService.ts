const LOCAL_STORAGE_TOKEN_KEY_NAME = "access_token";

export default class TokenService {
  public static get(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
  public static set(access_token: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, access_token);
  }
  public static remove(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
  }
}
