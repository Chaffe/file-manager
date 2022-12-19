const startUsernameIndex = 11;
let username = 'Anonymous';

export function getUsername() {
  const argUsername = process.argv.filter(username => username.startsWith('--username='))[0];
  if(argUsername) {
    username = argUsername.slice(startUsernameIndex);
  }

  return username;
}
