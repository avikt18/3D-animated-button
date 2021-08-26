import "./styles.css";

//Grabing elements
const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".display-shoe-image");
const heading = document.querySelector(".adidas-heading");
const description = document.querySelector(".text");
const sizes = document.querySelector(".sizes-container");
const purchase = document.querySelector(".purchase-button");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 18;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  console.log(e);
  sneaker.style.transform = `translateZ(200px)`;
  card.style.transition = "all 0.1s ease";
  //Popout
  heading.style.transform = "translateZ(150px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

card.addEventListener("mousemove", (e) => {
  sneaker.style.transform = `translateZ(200px) rotateZ(${
    e.pageX - e.pageX / 1.1 - 80
  }deg)`;
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  heading.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
