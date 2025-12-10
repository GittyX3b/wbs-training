// ------------------------------------------
// Built-in Utility Types Practice
// ------------------------------------------

// 1. Partial
// Use Partial to make all properties in the User type optional.

type User = {
  id: number;
  name: string;
  email: string;
};

// TODO: Create a variable `draftUser` of type Partial<User>
// and assign only one property to it.

// const draftUser: ??? = { name: "Draft" };

const draftUser: Partial<User> = { id: 12 };

// ------------------------------------------
// 2. Required
// Use Required to make sure all fields are required.

type Settings = {
  darkMode?: boolean;
  fontSize?: number;
};

// TODO: Create a variable `strictSettings` of type Required<Settings>
// and provide all the properties.

// const strictSettings: ??? = { darkMode: true, fontSize: 16 };

const strictSettings: Required<Settings> = {
  darkMode: true,
  fontSize: 16,
};

// ------------------------------------------
// 3. Readonly
// Make a Book object that cannot be edited after creation.

type Book = {
  title: string;
  author: string;
};

// TODO: Use Readonly<Book> to make the book immutable.
// Try changing a property and see the error.

// const book: ??? = { title: "1984", author: "George Orwell" };
// book.title = "Animal Farm"; // ❌ Should be a compile error

const book1: Readonly<Book> = {
  title: "Herr der Ringe",
  author: "J.K.Rowling",
};
//book1.author = "Edgar Wallace"

// ------------------------------------------
// 4. Record
// You’re building a key-value map of scores per user.
// Keys are usernames (string), values are numbers.

// TODO: Use Record<string, number> to type this object

// const scores: ??? = {
//   alice: 42,
//   bob: 36
// };

const scores: Record<string, number> = {
  alice: 42,
  bob: 36,
};

// ------------------------------------------
// 5. Pick
// Pick only the name and email from the User type.

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

// TODO: Create a type ContactInfo using Pick
// Then create a variable `contactInfo` with only those props.

// const contactInfo: ??? = { name: "Grace", email: "grace@example.com" };

type ContactInfo = Pick<Contact, "name" | "email">;

const user: ContactInfo = {
  name: "Grace",
  email: "grace@example.com",
};

// ------------------------------------------
// 6. Omit
// Now do the reverse: remove the phone from Contact.

// TODO: Create a type ContactNoPhone using Omit
// Then try assigning a variable with a `phone` property and see the error.

// const contactNoPhone: ??? = {
//   id: 1,
//   name: "Alan",
//   email: "alan@example.com",
//   phone: "should not be allowed" // ❌
// };

type ContactNoPhone = Omit<Contact, "phone">;

const contactNoPhone: ContactNoPhone = {
  id: 1,
  name: "Alan",
  email: "alan@example.com",
};
