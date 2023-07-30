interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

const merge = (user: MyUser, overrides: Partial<MyUser>): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 2,
      email: "jack@google.com",
    },
    {
      email: "saint.seiya@gmail.com",
      phone: "080989999",
    }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((acc, v) => {
    const { id, ...other } = v;
    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      name: "Jack",
      id: 45,
      email: "jack@google.com",
    },
    {
      id: 34,
      name: "Alex",
      email: "saint.seiya@gmail.com",
      phone: "080989999",
    },
  ])
);
