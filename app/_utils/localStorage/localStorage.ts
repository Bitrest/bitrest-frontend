/* eslint-disable @typescript-eslint/no-explicit-any */
export class UserTokenStorage {
  private static isClient = typeof window != "undefined";

  static setUserToken = (token: string) => {
    if (!this.isClient) return;
    localStorage.setItem("user-token", JSON.stringify(token));
  };

  static getUserToken = () => {
    if (!this.isClient) return null;
    const token = localStorage.getItem("user-token");
    return token ? JSON.parse(token) : null;
  };

  static setUser = (user: any) => {
    if (!this.isClient) return;
    localStorage.setItem("user", JSON.stringify(user));
  };
  static getUser = () => {
    if (!this.isClient) return;
    const user = localStorage.getItem("user");

    try {
      if (!user) return null;
      return JSON.parse(user);
    } catch {
      return null;
    }
  };

  static clearToken = () => {
    if (!this.isClient) return;
    localStorage.clear();
  };
}
