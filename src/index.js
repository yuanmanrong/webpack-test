import _ from "lodash";
import "./css/style.css";
import Print from "./print";
//import Bg from "./bg.png";

function component() {
  let ele = document.createElement("div");
  let btn = document.createElement("button");

  ele.innerHTML = _.join(["22Hello11", "webpackyesss"], " ");
  ele.classList.add("hello");
  ele.onclick = Print.bind(null, "hello webpack");
  btn.innerHTML = "点击这里看console";
  btn.onclick = (e) =>
    import(/*webpackChunkName:"print"*/ "./print").then((module) => {
      var print = module.default;
      print();
    });
  //   let myIcon = new Image();
  //   myIcon.src = Bg;
  //   ele.appendChild(myIcon);
  ele.appendChild(btn);

  return ele;
}
document.body.appendChild(component());
// if (module.hot) {
//   module.hot.accept("./print.js", function () {
//     console.log("Accepting the updated printMe module!");
//     printMe();
//   });
// }
