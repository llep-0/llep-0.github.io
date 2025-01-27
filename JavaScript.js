
var colors = ["rgba(255, 127, 80, 0.37)", "white"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }