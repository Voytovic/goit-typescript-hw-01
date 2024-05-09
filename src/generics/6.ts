type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const params: Params = {
  email: "example@mail.com",
  firstName: "John",
  lastName: "Doe",
  phone: "123456789",
};

console.log(params);
