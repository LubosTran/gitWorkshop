class Cheer {
  static addTeamName(teamName) {
    const myDiv = document.createElement('h2');
    myDiv.innerText = 'Greetings for the ' + teamName;
    document.body.append(myDiv);
  }
}

Cheer.addTeamName('React team');
