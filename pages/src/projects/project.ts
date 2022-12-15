import MateModule from "./mate_module";

export default class Project {
  constructor(
    public name: string,
    public modules: MateModule[],
    public tags: string[],
    public description: string,
  ) {}
}
