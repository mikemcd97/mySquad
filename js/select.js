function showMe(e) {
    var strdisplay = e.options[e.selectedIndex].value;
    var e = document.getElementById("idShowMe");

    if(strdisplay == "") {
        e.style.display = "none";
    } else if (strdisplay === "Chill") {
        e.style.display = "block";
        // e.innerHTML = "<a href='www.google.com'></a>";
    } else if (strdisplay === "Hyped") {
    	e.style.display = "block";
    	// e.innerHTML = "<a href='www.yahoo.com'></a>";
    } else {
    	e.style.display = "block";
    }
};