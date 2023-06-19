let exp = "";
function calc(v) {
  const result = document.getElementById("result");
  if (v === "=") {
    print("result", eval(exp));
    result.innerHTML = eval(exp);
    exp = "";
  } else {
    exp += v;
    result.innerHTML = exp;
    print(exp);
  }
}

const print = (data) => console.log(data);

// Array example
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const week = [mon, tue, wed, thu, fri, sat, sun, null, undefined];
print(week);
print(week[2]);
week.push("neo");
print(week);
print(week[100]); // undefined: access violation

print(null == false); // false
print(111, null == undefined); // true
print(111, null === undefined); // false
print(typeof true); // boolean
print(typeof 10); // number
print(typeof 10.5); // number
print(typeof "neo"); // string
print(typeof {}); // object
print(typeof null); // object
print(typeof undefined); // undefined

let x; print(typeof x); // undefined: not assigned variable

// Object example
const playerName = "neo"; print(playerName);
const player = {
  name: "neo",
  points: 5000,
  fat: true,
  increasePrice: function () {
    this.points += 10;
  },
  sayHello: function (name) {
    console.log("Hello " + name);
  },
};
print(player);

const keys = Object.keys(player); print(keys.length);
const values = Object.values(player); print(values.length);

player.fat = false; print(player);
player.lastName = "potato"; print(player, Object.keys(player).length);
player.points = player.points + 15; print(player, Object.keys(player).length);
player.increasePrice(); print(player, Object.keys(player).length);
player.sayHello("neo");

// Function
function sayHello(msg) { print("Hello! " + msg); } sayHello("neo");
const sayHello2 = (msg) => print("Hello! " + msg); sayHello2("neo");
const func = (a, b, c) => console.log(a, b, c);
func(1); // 1, undefined, undefined
func(1, 2); // 1, 2, undefined

const plus = (a, b) => print(a + b); plus(8, 60);
const divide = (a, b) => print(a / b); divide(8, 2);

// Recap
let isNeoFat = "true"; print(isNeoFat);
isNeoFat = "false"; print(isNeoFat);

const toBuy = ["poptat", "tomato", "pizza"]; print(toBuy);
toBuy[2] = "water"; print(toBuy);

// Fucntion returns
function calcAge(age) { return age + 2; } print(calcAge(96));

print(2 ** 3); // squre, equal to 2^3
print("2" ** 3); // is possible ? multiple string value

const text = "asdfasdf";
// const text = "5025";
if (isNaN(text)) { print(text); } else { print(parseInt(text)); }

const items = document.getElementsByClassName("hello");
console.log(items, typeof items, items.length);

// querySelector, querySelectorAll
const h1 = document.querySelector(".hello h1:first-child");
// update text
h1.innerHTML = "Click me";
// add events
// h1.addEventListener("click", () => { h1.style.color = h1.style.color === "blue" ? "white" : "blue" });
// h1.addEventListener("mouseenter", () => { h1.innerText = "Mouse here!"; });
// h1.addEventListener("mouseleave", () => { h1.innerText = "Mouse leave."; });
window.addEventListener("offline", () => alert("Network is SOS!"));
window.addEventListener("online", () => alert("Gooooood!"));
window.addEventListener("resize", () => { document.body.style.backgroundColor = "tomato"; });
window.addEventListener("copy", () => alert("copier!"));

h1.addEventListener("click", () => {
  const clickedClass = "clicked";
  // option-1
  // if(h1.classList.contains(clickedClass)) { h1.classList.remove(clickedClass); }
  // else { h1.classList.add(clickedClass); }

  // option-2
  h1.classList.toggle(clickedClass);
});

// const loginInput = document.querySelector("login-form input");
// const loginButton = document.querySelector("login-form button");
// loginButton.addEventListener("click", () => {
//   const username = loginInput.value;
//   console.log(username);
//  });
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const userKey = "username";
const hiddenClassName = "hidden";

const link = document.querySelector(".link a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("link", e);
});

const printGreetings = () => {
  const userName = localStorage.getItem(userKey);
  loginForm.classList.add(hiddenClassName);
  greeting.classList.remove(hiddenClassName);
  greeting.innerText = `hello ${userName}`;
};

const submitHandle = (e) => {
  e.preventDefault(); // refresh disabled.
  const { value } = loginInput;
  localStorage.setItem(userKey, value);
  printGreetings();
};

const savedUserName = localStorage.getItem(userKey);
if (savedUserName === null) {
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit", submitHandle);
} else {
  printGreetings();
}
