export type TypeWithKey<T> = {
  [key: string]: T;
};

const person: TypeWithKey<string> = {
  name: 'John',
};
