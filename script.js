let values = 10;
let div = document.createElement("div");
div.style.color = "Red";
div.style.fontSize = "100px";
div.style.display = "flex";
div.style.justifyContent = "center";

let func = function (value) {
  if (value > 0) {
    setTimeout(() => {
      console.log(value);
      div.innerHTML = value;
      document.body.append(div);
      func(value - 1);
    }, 1000);
  } else {
    setTimeout(() => (div.innerHTML = "Happy Independance Day!!!"), 1000);
  }
};
func(values);
