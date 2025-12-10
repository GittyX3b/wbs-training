// === Generics Practice ===
// You will be implementing three utility functions using generics.
// These functions are very common patterns in typed codebases.

// ----------------------------------------------------
// 1. Create a generic function called `wrapInArray`
//    It should take a single value of any type and return an array with that value inside.
//
//    For example:
//    const wrappedNumber = wrapInArray(5);         // [5]
//    const wrappedString = wrapInArray("hello");   // ["hello"]
//    const wrappedBool = wrapInArray(true);        // [true]
//
//    Hint: Use a generic type parameter <T>

function wrapInArray<T>(val: T): T[] {
  return [val];
}

// ----------------------------------------------------
// 2. Create a generic function called `firstItem`
//    It should take an array of any type and return the first element of that array.
//    If the array is empty, return undefined.
//
//    For example:
//    const name = firstItem(["Ada", "Grace"]); // "Ada"
//    const number = firstItem([10, 20, 30]);    // 10
//    const none = firstItem([]);               // undefined
//
//    Hint: return type should be T | undefined

function firstItem<T>(val: T[]): T | undefined {
  return val.length > 0 ? val[0] : undefined;
}

// ----------------------------------------------------
// 3. Create a generic function called `mergeObjects`
//    It should take two objects and merge them into a single object.
//    The resulting object should contain all the keys and values from both.
//
//    For example:
//    const merged = mergeObjects({ name: "Ada" }, { age: 36 });
//    // Result: { name: "Ada", age: 36 }
//
//    const result = mergeObjects({ loggedIn: true }, { role: "admin" });
//    // Result: { loggedIn: true, role: "admin" }
//
//    Hint: Use <T, U> as generic type parameters and return T & U

function mergeObjects<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

// ----------------------------------------------------
// 4. Create a type alias called `ApiResponse<T>`
//    It should describe an object with:
//    - `success: boolean`
//    - `data: T`
//
//    Then use this type to define what the response of a fake API call might look like.
//
//    Example:
//    const userResponse: ApiResponse<{ name: string; age: number }> = {
//      success: true,
//      data: { name: "Ada", age: 36 }
//    };

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: { name: "Ada", age: 36 },
};

// ----------------------------------------------------
// 5. Create a generic function called `pluck`
//    It should take an object and a key, and return the value at that key.
//
//    - The object can be of any shape (use a generic type T)
//    - The key must be one of the keys of that object (use keyof T)
//    - The return type should be the type of that value (T[K])
//
//    For example:
//    const user = { name: "Ada", age: 36 };
//    const name = pluck(user, "name"); // "Ada"
//    const age = pluck(user, "age");   // 36
//
//    Hint: Function signature will look something like:
//    function pluck<T, K extends keyof T>(obj: T, key: K): ????

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
