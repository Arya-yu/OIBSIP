document.addEventListener("DOMContentLoaded", function (event) {
  let result = document.querySelector("#result");
  let clear = document.querySelector("#clear");
  let equalTo = document.querySelector("#equalTo");
  let backSpace = document.querySelector(".backspace");
  let squareRoot = document.querySelector("#square_root");
  let calBtn = document.querySelectorAll(".Cal_btn");

  let initial_value = "";

  calBtn.forEach((singleBtn) => {
    singleBtn.addEventListener("click", function () {
      let text = this.innerHTML;
      initial_value += text;
      result.innerHTML = initial_value;
    });
  });

  equalTo.addEventListener("click", function () {
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
  });

  clear.addEventListener("click", function () {
    result.innerHTML = "0";
    initial_value = "";
  });

  backSpace.addEventListener("click", function () {
    result.innerHTML = result.innerHTML.substring(
      0,
      result.innerHTML.length - 1
    );
    initial_value = result.innerHTML;
  });

  squareRoot.addEventListener("click", function () {
    const square_num = Math.sqrt(result.innerText);
    result.innerText = square_num;
  });
});
