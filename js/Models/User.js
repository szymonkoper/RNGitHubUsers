export default class User {
  constructor(login, name, avatarUrl, repositoriesTotalCount) {
    this.login = login;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.repositoriesTotalCount = repositoriesTotalCount;
  }
}
