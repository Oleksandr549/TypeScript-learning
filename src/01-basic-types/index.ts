// const greeting: string = 'Hello, TypeScript'
// console.log(greeting);

// const age: number = 25;
// console.log(age); 
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());

// interface Author{
//   name: string;
//   avatar: string;
//   age: number;
// }
// const authorJohn: Author = {
//   name: 'John',
//   avatar: 'avatar.jpg',
//   age: 25
// };
// interface Post{
//   title: string;
//   body: string;
//   tags: string;
//   created_at: Date;
//   author: Author;
// }
// const newPost: Post = {
//   title: 'New Post',
//   body: 'This is the post body.',
//   tags: 'some text',
//   created_at: new Date(),
//   author: authorJohn, 
// };
// function createPost(post: Post): void {
//   console.log(`Created post: ${post.title} by ${post.author.name}`);
// }
// createPost(newPost);

// const posts: Post[] = [];
// posts.push(newPost);
// posts.push({
//   title: 'Another Post',
//   body: 'This is another post body.',
//   tags: 'another text',
//   created_at: new Date(),
//   author: authorJohn,
// });
// console.log(posts);

type User = {
  name: string;
  age: number;
};
const user1: User = {
  name: 'John',
  age: 25,
};
console.log(user1);
type ColorRGB = [
  red: number,
  green: number,
  blue: number,
]; 


function getRandomColor(): ColorRGB {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return [red, green, blue];
}
const SomeColor = getRandomColor();
console.log(SomeColor);

// enum UserRole {
//   Admin = 'ADMIN',
//   User = 'USER',
//   Guest = 'GUEST',
// }
// const userRole: UserRole = UserRole.Admin;
// console.log(userRole);