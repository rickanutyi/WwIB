const hobby1 = document.getElementById("hobby1");
const hobby2 = document.getElementById("hobby2");
const hobby3 = document.getElementById("hobby3");
const hobby4 = document.getElementById("hobby4");

const hobbyWall = document.getElementById("section2__bottom");

let animeList = [
  { name: "Евангелион", img: "./assets/images/anime/evang.png" },
  { name: "Принцесса Мононоке", img: "./assets/images/anime/mononoke.jpg" },
  { name: "Ловцы забытых голосов", img: "./assets/images/anime/ловцы.jpg" },
  { name: "Унесенные призраками", img: "./assets/images/anime/унесенные.jpeg" },
  {
    name: "Меланхолия Харухи Судзумии",
    img: "./assets/images/anime/меланхолия.jpg",
  },
  { name: "Паприка", img: "./assets/images/anime/paprika.jpeg" },
];
//
let bookList = [
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
];
//
let movieList = [
  {
    name: "Бегущий по лезвию",
    img: "./assets/images/movie/бегущий-по-лезвию.jpg",
  },
];
//
let projectList = [{ name: "shop", img: "./assets/images/eva4.jpg" }];

hobby1.onclick = function () {
  showHobby(animeList);

  hobby1.classList.add("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby2.onclick = function () {
  showHobby(movieList);

  hobby1.classList.remove("active");
  hobby2.classList.add("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby3.onclick = function () {
  showHobby(bookList);

  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.add("active");
  hobby4.classList.remove("active");
};
hobby4.onclick = function () {
  showHobby(projectList);

  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.add("active");
};

function showHobby(hobbyList) {
  hobbyWall.innerHTML = "";

  if (hobbyList.length < 4) {
    hobbyWall.style.justifyContent = "flex-start";
  } else {
    hobbyWall.style.justifyContent = "space-between";
  }

  hobbyList.forEach((element, index) => {
    let elem = document.createElement("div");

    elem.classList.add("list__element");
    elem.innerHTML = `<img src='${element.img}'><span>${element.name}</span>`;
    hobbyWall.append(elem);
  });

  let listElem = document.querySelectorAll(".list__element");
  listElem.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("list__element__up");
    }, index * 100);
  });
}
function initialList() {
  showHobby(animeList);

  hobby1.classList.add("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
}
