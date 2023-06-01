document.addEventListener("DOMContentLoaded", function () {
  var card = document.getElementById("card");
  var modal = document.getElementById("modal");
  var hex = document.getElementById("hex");
  var r = document.getElementById("r");
  var g = document.getElementById("g");
  var b = document.getElementById("b");
  var a = document.getElementById("a");
  var subtitle = document.getElementById("sub-title");
  var body = document.getElementById("body");
  var spanColor = document.getElementById("span");
  var spanColor2 = document.getElementById("span2");
  var spanColor3 = document.getElementById("span3");
  var spanColor4 = document.getElementById("span4");
  var spanColor5 = document.getElementById("span5");
  var spanColor6 = document.getElementById("span6");
  var spanColor7 = document.getElementById("span7");
  var spanColor8 = document.getElementById("span8");
  var spanColor9 = document.getElementById("span9");

  card.addEventListener("click", function () {
    modal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  var colorPicker = new iro.ColorPicker("#picker", {
    // Set the size of the color picker
    width: 320,
    // Set the initial color to pure red
    color: "#f00",
  });

  colorPicker.on("color:change", function (color) {
    // log the current color as a HEX string
    if (color.rgba.r > 200 && color.rgba.g > 200 && color.rgba.b > 200) {
      card.style.border = "5px solid #000";
    } else {
      card.style.border = "5px solid #fff";
    }
    body.style.background = color.hexString;
    subtitle.style.color = color.hexString;
    card.style.backgroundColor = color.hexString;
    spanColor.style.color = color.hexString;
    spanColor2.style.color = color.hexString;
    spanColor3.style.color = color.hexString;
    spanColor4.style.color = color.hexString;
    spanColor5.style.color = color.hexString;
    spanColor6.style.color = color.hexString;
    spanColor7.style.color = color.hexString;
    spanColor8.style.color = color.hexString;
    spanColor9.style.color = color.hexString;
    hex.innerHTML = color.hexString;
    r.innerHTML = color.rgba.r + ",";
    g.innerHTML = color.rgba.g + ",";
    b.innerHTML = color.rgba.b + ",";
    a.innerHTML = color.rgba.a + ")";

    // when user stop moving the picker close the modal
    colorPicker.on("input:end", function () {
      modal.style.display = "none";
    });
  });
});
