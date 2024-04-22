const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// descriptor.writable = true;
// descriptor.value = 4;
// console.log(descriptor);

// console.log((Math.PI = 5));
// console.log(`PI: ${Math.PI = 5}`);
// Math.PI = 5;
// console.log(Math.PI);

Object.defineProperty(descriptor, "PI", {
  writable: true,
  enumerable: true,
});
console.log(descriptor);


