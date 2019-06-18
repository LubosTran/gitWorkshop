class Cheer {
  static addTeamName(teamName) {
    const myDiv = document.createElement('h2');
    myDiv.innerText = teamName;
    document.body.append(myDiv);
  }
}

Cheer.addTeamName('React team');

let index = 0;
setInterval(() => {
  const hello = ['Martin M.', 'Martin S.', 'Lubos'];
  const currentHello = hello[index];
  index++;
  Cheer.addTeamName(currentHello);
  if (index === hello.length) {
    index = 0;
  }
}, 500);
