function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}




function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}




interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availableText = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableText}`
  );
}




function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  const addValue = (v: string | number) => {
    let exists = false;

    for (let i = 0; i < result.length; i++) {
      if (result[i] === v) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(v);
    }
  };

  for (let v of arr1) addValue(v);
  for (let v of arr2) addValue(v);

  return result;
}





interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((p) => {
      const total = p.price * p.quantity;

      if (typeof p.discount === "number") {
        return total - (total * p.discount) / 100;
      }

      return total;
    })
    .reduce((a, b) => a + b, 0);
}
