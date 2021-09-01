import _ from "lodash";
import "./css/style.css";
import printMe from "./print";
//import Bg from "./bg.png";

function component() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");

  ele.innerHTML = _.join(["22Hello11", "webpackyesss"], " ");
  ele.classList.add("hello");
  btn.innerHTML = "点击这里看console";
  btn.onclick = printMe;
  //   let myIcon = new Image();
  //   myIcon.src = Bg;
  //   ele.appendChild(myIcon);
  ele.appendChild(btn);

  return ele;
}
document.body.appendChild(component());
if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
