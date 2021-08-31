import _ from "lodash";
import "./style.css";
//import Bg from "./bg.png";

function component() {
  let ele = document.createElement("div");

  ele.innerHTML = _.join(["Hello", "webpack"], " ");
  ele.classList.add("hello");
  //   let myIcon = new Image();
  //   myIcon.src = Bg;
  //   ele.appendChild(myIcon);

  return ele;
}
document.body.appendChild(component());
