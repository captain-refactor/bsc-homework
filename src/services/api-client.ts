export class ApiClient {
  apiBaseUrl = "https://private-anon-7762247fb2-note10.apiary-mock.com";

  getUrl(path: string) {
    return new URL(path, this.apiBaseUrl);
  }

  async fetch(path: string, options: RequestInit): Promise<Response> {
    let response = await fetch(this.getUrl(path).toString(), options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }
}
