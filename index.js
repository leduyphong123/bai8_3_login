let useName = prompt("Nhap ten:");
if (useName == "Admin") {
    let passworld = prompt("Nhap passworld");
    if (passworld == "TheMaster") {
        document.write("Welcome");
    } else if (passworld == "null") {
        document.write("Canceled");
    } else {
        document.write("Wrong password");
    }

} else if (useName == "null") {
    document.write("canceld");

}
else {
    alert("Didn’t know? ECMAScript!");

}