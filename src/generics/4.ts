type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T): User {
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const updatedUser: User = { ...defaultUser, ...initialValues };

  return updatedUser;
}

const updatedUserData = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(updatedUserData);
