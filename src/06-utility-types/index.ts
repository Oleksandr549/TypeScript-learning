/* eslint-disable @typescript-eslint/no-unused-vars */

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}

type PartialUser = Partial<User>;

function updateUser(user: User, patch: Partial<User>): User {
  return { ...user, ...patch };
}

const baseUser: User = { id: 1, name: "Alex", email: "a@mail.com", role: "admin" };
const updated = updateUser(baseUser, { name: "Oleksandr" });

type RequiredUser = Required<User>;

const fullUser: RequiredUser = {
  id: 2,
  name: "Anna",
  email: "anna@mail.com",
  age: 25,
  role: "editor",
};

type ReadonlyUser = Readonly<User>;

const frozenUser: ReadonlyUser = { id: 3, name: "Ivan", email: "i@mail.com", role: "viewer" };

type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = { id: 1, name: "Alex" };

type UserWithoutEmail = Omit<User, "email">;

type CreateUserDto = Omit<User, "id">;

const newUser: CreateUserDto = { name: "Olga", email: "o@mail.com", role: "viewer" };

type Role = User["role"];

type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

type UsersById = Record<number, User>;

const usersById: UsersById = {
  1: baseUser,
};

type Status = "idle" | "loading" | "success" | "error";

type ActiveStatus = Exclude<Status, "idle">;

type FinalStatus = Extract<Status, "success" | "error">;

type MaybeString = string | null | undefined;

type DefiniteString = NonNullable<MaybeString>;

function createUser(name: string, age: number) {
  return { id: Date.now(), name, age, createdAt: new Date() };
}

type CreatedUser = ReturnType<typeof createUser>;

type CreateUserArgs = Parameters<typeof createUser>;

const args: CreateUserArgs = ["Alex", 22];
const created: CreatedUser = createUser(...args);

type FirstArg = Parameters<typeof createUser>[0];

class ApiClient {
  baseUrl: string;
  timeout: number;

  constructor(baseUrl: string, timeout: number) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }

  get(path: string) {
    return fetch(this.baseUrl + path);
  }
}

type ApiClientArgs = ConstructorParameters<typeof ApiClient>;

type ApiClientInstance = InstanceType<typeof ApiClient>;

// export function createInstance<T extends new (...args: any[]) => any>(
//   Ctor: T,
//   ...args: ConstructorParameters<T>
// ): InstanceType<T> {
//   return new Ctor(...args);
// }

// export const client = createInstance(ApiClient, "https://api.example.com", 5000);

async function fetchUser(): Promise<User> {
  return baseUser;
}

type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;

type DeepPromise = Awaited<Promise<Promise<number>>>;

function createStore<T extends string>(states: T[], initial: NoInfer<T>) {
  return { states, current: initial };
}

const store = createStore(["open", "closed"], "open");

function greet(this: { name: string }, greeting: string) {
  return `${greeting}, ${this.name}`;
}

type GreetThis = ThisParameterType<typeof greet>;

type GreetWithoutThis = OmitThisParameter<typeof greet>;

const boundGreet: GreetWithoutThis = greet.bind({ name: "Alex" });

function defineObject<D, M>(obj: { data: D; methods: M & ThisType<D & M> }): D & M {
  return { ...obj.data, ...obj.methods };
}

const counter = defineObject({
  data: { count: 0 },
  methods: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
});

type EventName = "click" | "hover";

type UpperEvent = Uppercase<EventName>;

type LowerEvent = Lowercase<"CLICK" | "HOVER">;

type CapitalEvent = Capitalize<EventName>;

type UncapitalEvent = Uncapitalize<"Click" | "Hover">;

type EventHandlers = {
  [K in EventName as `on${Capitalize<K>}`]: (e: Event) => void;
};

const handlers: EventHandlers = {
  onClick: () => {},
  onHover: () => {},
};

type UpdateUserDto = Partial<Omit<User, "id">> & Pick<User, "id">;

const updateDto: UpdateUserDto = { id: 1, name: "New name" };

type PublicUser = Readonly<Omit<User, "email">>;

type FormErrors = Partial<Record<keyof User, string>>;

const errors: FormErrors = { email: "Invalid email" };

type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type UserWithAge = RequiredKeys<User, "age">;

export {};