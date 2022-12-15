type ModuleType = "model" | "trainer" | "data_loader";

export default class MateModule {
  url: string = "";
  description: string = "";
  // creates a property called avatarUrl
  get avatarUrl(): string {
    return `https://avatars.githubusercontent.com/${this.userName}`;
  }
  get userName(): string {
    return this.url.split("/")[3];
  }
  constructor(
    public name: string,
    public type: ModuleType,
    public tags: string[],
    public dependencies: string[],
  ) {
  }
}
