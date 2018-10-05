export default class User {
  constructor(login, name, avatarUrl, totalRepos) {
    this.login = login;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.totalRepos = totalRepos;
  }
}
