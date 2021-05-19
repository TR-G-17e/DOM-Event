const persons = [
  { id: Date.now() + 10, nickname: "a007", name: "James Bond" },
  { id: Date.now() + 20, nickname: "IronMan", name: "Tonny Stark" },
  { id: Date.now() + 30, nickname: "BlackWidow", name: "Natasha Romanoff" },
  { id: Date.now() + 40, nickname: "Pyatachok", name: "Mini Pig" },
];

// 1. button id=nickname, text=nocname
//  <button type="button" id="id_datenow">Nickname</button>
// 2. Name says 'Hello!'

const createButton = (prsn) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = prsn.nickname;
  btn.id = `id_${prsn.id}`;
  return btn;
};

const saysHello = (event) => {
  event.preventDefault();
  let id = +event.target.id.split("_")[1];
  const idx = persons.findIndex((person) => person.id === id);
  if (idx === -1) {
    return false;
  }
  document.querySelector("#greeting").innerHTML = `
    <div><p>Hello from person ${persons[idx].name}</p></div>
    `;
};

const btns = document.querySelector("#btns");

persons.forEach((person) => {
  btns.appendChild(createButton(person));
});

btns.addEventListener("click", saysHello);
