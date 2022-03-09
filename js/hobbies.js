const hobby1 = document.getElementById("hobby1");
const hobby2 = document.getElementById("hobby2");
const hobby3 = document.getElementById("hobby3");
const hobby4 = document.getElementById("hobby4");

const hobbyWall = document.getElementById("section2__bottom");

let mangaList = [
  { name: "Евангелион", img: "./assets/images/anime/evang.png" },
  { name: "Принцесса Мононоке", img: "./assets/images/anime/mononoke.jpg" },
  { name: "Ловцы забытых голосов", img: "./assets/images/anime/ловцы.jpg" },
  { name: "Унесенные призраками", img: "./assets/images/anime/унесенные.jpeg" },
  {
    name: "Меланхолия Харухи Судзумии",
    img: "./assets/images/anime/меланхолия.jpg",
  },
  { name: "Блич", img: "./assets/images/manga/bleach.jpeg" },
];
let bookList = [{ name: "", img: "./assets/images/eva2.jpg" }];
let movieList = [
  {
    name: "Бегущий по лезвию",
    img: "./assets/images/movie/бегущий-по-лезвию.jpg",
  },
];
let projectList = [{ name: "shop", img: "./assets/images/eva4.jpg" }];

hobby1.onclick = function () {
  hobbyWall.innerHTML = "";
  showHobby(mangaList);

  hobby1.classList.add("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby2.onclick = function () {
  hobbyWall.innerHTML = "";
  showHobby(movieList);
  hobby1.classList.remove("active");
  hobby2.classList.add("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby3.onclick = function () {
  hobbyWall.innerHTML = "";
  showHobby(bookList);
  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.add("active");
  hobby4.classList.remove("active");
};
hobby4.onclick = function () {
  hobbyWall.innerHTML = "";
  showHobby(projectList);
  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.add("active");
};

function showHobby(hobbyList) {
  hobbyWall.innerHTML = "";
  hobbyList.forEach((element, index) => {
    setTimeout(() => {
      let elem = document.createElement("div");
      elem.classList.add("list__element");
      elem.innerHTML = `<img src='${element.img}'><span>${element.name}</span>`;
      hobbyWall.append(elem);
    }, index * 200);
  });
}
