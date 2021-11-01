//listakohdat vierekkäin
document.getElementsByTagName("ul")[0].className = "rivit-vierakkain";
// jokainen rivi (even)
var section2 = document.getElementById("toka");
section2.getElementsByTagName("table")[0].className = "even";
//joka toinen rivi odd
var section3 = document.getElementById("kolmas");
section3.getElementsByTagName("table")[0].className = "odd";

var a = document.links;
for (var i = 0; i < a.length; i++) {
    document.getElementsByTagName("a")[i].className = "dotted";
}
var pdf = document.getElementsByTagName("a")[1];
pdf.insertAdjacentHTML("afterend", '<i class="fas fa-file-pdf"></i>');
document.getElementsByTagName("a")[2].insertAdjacentHTML("beforebegin", ' <i class="fas fa-envelope-square"></i>');
document.getElementsByTagName("a")[2].insertAdjacentHTML("beforebegin", '<i class="fas fa-external-link-alt"></i>');
document.getElementsByTagName("a")[3].insertAdjacentHTML("beforebegin", '<i class="fas fa-external-link-alt"></i>');