/**
 *
 */

export default class Page {
  id;
  title;
  body;
  description;
  format;
  createdAt;
  updatedAt;
  tags;

  constructor(values) {
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
