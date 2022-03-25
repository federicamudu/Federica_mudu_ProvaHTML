function subscribe() {
    let name = document.getElementById("nameKey").value;
    
    localStorage.setItem("nameKey", name);
    
}

function unsubscribe() {
    
    localStorage.removeItem("nameKey");
    let key = document.getElementById("nameKey").value;
    localStorage.removeItem(key);
    document.getElementById("result").innerHTML = "Eliminato Item con nome " + key;
    
}

function welcomeMessage() {
    if (localStorage.getItem("nameKey").value == null) {
        alert("Benvenuto!");
    }
    else {
        return null;
    }
    
}
