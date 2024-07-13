let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});
    // Event listener for delete button
    ul.addEventListener("click", function (event) {
        if (event.target.nodeName === "BUTTON") { // Fixed: nodeName comparison should use ===
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("Deleted");
        }
   
});
