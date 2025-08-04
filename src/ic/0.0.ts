(() => {
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = { name: "Jack", age: 32 };
  // see hidden class 0.1
  // 0.1 is what happening when vm is working

  console.log("Name:", person.name, "age:", person.age);
})();
