var urls = {

}

function process_response(r, o) {
    console.log(r);

    if (urls[r] === undefined) {
        o.value = "Invalid option!";
    } else {
        window.location = urls[r];
    }
}

function textlink(i, t, u) {
    var listobject = document.createElement("li");
    var paragraphobj = document.createElement("p");
    paragraphobj.innerText = t;

    urls[i] = u

    listobject.appendChild(paragraphobj);
    var orderedlist = document.getElementById("options").appendChild(listobject);
}

function normaltext(t) {
    var paragraphobj = document.createElement("p");
    paragraphobj.innerText = t;

    document.getElementById("text").appendChild(paragraphobj);
}

function addselect() {
    var selectobject = document.createElement("input");
    selectobject.className = "select";
    document.body.appendChild(selectobject)

    selectobject.addEventListener("keyup", function onEvent(e){
        if (e.keyCode == 13) {
            process_response(selectobject.value, selectobject);
        }
    })
}