export const MODELS = {
  USER: 'user',
};

export const checkNameRegex = (name: string) => {
  return name.length >= 1 && name.length <= 50;
};

export const checkPasswordRegex = (password: string) => {
  const passwordRegex = new RegExp(
    '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).{8,50}$',
  );
  return passwordRegex.test(password);
};
