const greeting: string = 'Hello, TypeScript'
console.log(greeting);

const age: number = 25;
console.log(age); 
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());

interface Author{
  name: string;
  avatar: string;
  age: number;
}
const authorJohn: Author = {
  name: 'John',
  avatar: 'avatar.jpg',
  age: 25
};
interface Post{
  title: string;
  body: string;
  tags: string;
  created_at: Date;
  author: Author;
}
const newPost: Post = {
  title: 'New Post',
  body: 'This is the post body.',
  tags: 'some text',
  created_at: new Date(),
  author: authorJohn, 
};
function createPost(post: Post): void {
  console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);