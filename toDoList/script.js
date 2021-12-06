const button = document.querySelector("#push");

function outputtask() {
  if (document.querySelector("#newtask input").value.length != 0) {
    const info = document.querySelector("#newtask input").value;
    const outputtime = document.querySelector("#time").value;

    console.log(info);
    console.log(outputtime);

    document.querySelector(".task").innerHTML += info;
    document.querySelector(".timeoutput").innerHTML+=outputtime;

  } 
  else if (document.querySelector("#newtask input").value.length == 0) {
    alert("Molim vas, unesite podatke u polje!");
  }
}

button.addEventListener("click", outputtask);

var close = document.getElementsByClassName("delete");
var deletetext = document.getElementsByClassName("task");

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    this.parentNode.remove();
  };
}

var zadatci = document.querySelectorAll("#tasks");

function checked() {
  this.classList.toggle("done");
}

for (var i = 0; i < zadatci.length; i++) {
  zadatci[i].onclick = function () {
    this.classList.toggle("done");
  };
}

var vrijeme = document.querySelectorAll("#time").value;
