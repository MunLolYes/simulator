const click1 = document.querySelector("#click1");
const click2 = document.querySelector("#click2");
const clicksText = document.querySelector("#main-txt");

let ls = localStorage;

function main(n) {
    let clicks = ls.getItem("clicks");
    if (clicks !== null) {
        let value = parseInt(clicks) + n;
        ls.setItem("clicks", value);
        clicksText.textContent = "Clicks: " + value;
    } else {
        let value = 1;
        ls.setItem("clicks", value);
        clicksText.textContent = "Clicks: " + value;
    }
}

click1.addEventListener("click", () => {
    console.log("clicked button click1!");
    main(1);
})

click2.addEventListener("click", () => {
    console.log("clicked button click2!");
    let clicks = ls.getItem("clicks");
    if (clicks !== null) {
        if (parseInt(clicks) > 99) {
            main(2);
        }
    }
})
