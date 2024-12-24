function likes(names) {
  names[0] = names[0] || "no one";
  if (names.length > 3) names[2] = names.length - 2 + " others";
  return (
    names.slice(0, 3).join(" ,").replace(/(.*),/, "$1 and") +
    "like" +
    (names.length < 2 ? "s" : "") +
    " this"
  );
}
console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Luki"]));
