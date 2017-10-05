/**
 * @noflow
 */

export default class Page {
  id: string;
  title: string;
  body: string;
  description: ?string;
  format: string;
  createdAt: ?Date;
  updatedAt: ?Date;
  tags: Array<string>;

  constructor(values: Object) {
    this.id = values.id;
    this.title = values.title;
    this.body = values.body;
    this.description = values.description;
    this.format = values.format;
    this.createdAt = values.createdAt;
    this.updatedAt = values.updatedAt;
    this.tags = values.tags;
  }
}
