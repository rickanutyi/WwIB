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
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
  { name: "Акира", img: "./assets/images/anime/akira.jpg" },
];
//
let bookList = [
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
  { name: "", img: "./assets/images/eva2.jpg" },
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

let section = 1;
hobby1.onclick = function () {
  showHobby(animeList, 0, 12);

  section = 1;

  hobby1.classList.add("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby2.onclick = function () {
  showHobby(movieList, 0, 12);

  section = 2;

  hobby1.classList.remove("active");
  hobby2.classList.add("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
};
hobby3.onclick = function () {
  showHobby(bookList, 0, 12);

  section = 3;

  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.add("active");
  hobby4.classList.remove("active");
};
hobby4.onclick = function () {
  showHobby(projectList, 0, 12);

  hobby1.classList.remove("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.add("active");
};

function showHobby(hobbyList, start, end) {
  hobbyWall.innerHTML = "";
  let list = hobbyList.slice(start, end);
  //
  list.forEach((element, index) => {
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

  createBtnNext(hobbyList, end, list.length);
}

function createBtnNext(hobbyList, index, listLength) {
  //
  let length = hobbyList.length;

  if (length > 12) {
    let btn = document.createElement("button");
    if (index >= length) {
      createBtnPrev(btn, hobbyList, index, listLength);
      return;
    }
    btn.classList.add("next__list__btn");

    if (index >= 12 && index < 24) {
      btn.onclick = function () {
        showHobby(hobbyList, 12, listLength + 12);
      };
    } else if (index >= 24 && index < 36) {
      btn.onclick = function () {
        showHobby(hobbyList, 24, listLength + 12);
        console.log(listLength + 12);
      };
    }
    hobbyWall.append(btn);
  }
}

function createBtnPrev(btn, hobbyList, index) {
  btn.classList.add("prev__list__btn");
  if (index >= 13 && index < 25) {
    btn.onclick = function () {
      showHobby(hobbyList, 0, 12);
    };
  } else if (index >= 24 && index < 26) {
    btn.onclick = function () {
      showHobby(hobbyList, 12, 24);
    };
  }
  hobbyWall.append(btn);
}

function initialList() {
  showHobby(animeList, 0, 12);

  hobby1.classList.add("active");
  hobby2.classList.remove("active");
  hobby3.classList.remove("active");
  hobby4.classList.remove("active");
}
