const arrayItems = ['div1', 'div2', 'div3', 'div4', 'div5', 'div6', 'div7', 'div8', 'div9'];
const singleItem = [];
arrayItems.forEach((thingy) => {
  singleItem.push(document.getElementById(thingy));
});

const colorChange = (event) => {
  event.target.style.backgroundColor = 'blue';
};

const colorReturn = (event) => {
  event.target.style.backgroundColor = '';
};

const eventAssignment = (thingy) => {
  thingy.onmousedown = () => {
    colorChange(event);
  };
  thingy.onmouseup = () => {
    colorReturn(event);
  };
};

// const colorChange = (event) => {
//   event.target.style.backgroundColor = 'blue';
// };

// const colorReturn = (event) => {
//   event.target.style.backgroundColor = 'rgba(255, 220, 22, 1)';
// };

// const eventAssign = (thingy) => {
//   thingy.onclick = () => {
//     colorChange(event);
//   };
// thingy.onmouseup = () => {
//   colorReturn(event);
// };
// };
singleItem.forEach(eventAssignment);