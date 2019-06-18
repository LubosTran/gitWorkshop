class Cheer {
  static class addTeamName(teamName) {
    const myDiv = document.createElement('h2');
    myDiv.innerText = teamName;
    document.body.append(myDiv);
  }
}

Cheer.addTeamName('React team');
