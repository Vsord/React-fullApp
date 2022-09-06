async function getUser(email) {
  const users = await JSON.parse(localStorage.getItem("users"));
  if (!users) {
    await localStorage.setItem("users", JSON.stringify([]));
    return null;
  }
  return users.find((user) => user.email === email);
}

export async function registerUser({ email, password }) {
  const registeredUser = await getUser(email);
  if (registeredUser) {
    throw Error("User already registered!");
  }
  const users = JSON.parse(localStorage.getItem("users"));
  await localStorage.setItem("users", JSON.stringify([...users, { email, password }]));
  await localStorage.setItem("isAuthorized", "true");
}

export async function loginUser(user) {
  const registeredUser = await getUser(user.email);
  if (!registeredUser) {
    throw Error("User is not registered!");
  }
  if (registeredUser && registeredUser.password === user.password) {
    await localStorage.setItem("isAuthorized", "true");
    return;
  }
  throw Error("Failed login");
}

export async function logoutUser() {
  await localStorage.setItem("isAuthorized", "false");
}
