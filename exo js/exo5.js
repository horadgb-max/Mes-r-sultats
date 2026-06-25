let villeInput = document.getElementById("ville");
let villeButton = document.getElementById("villeButton");
villeButton.addEventListener("click", () => {
const url = "https://wttr.in/{ville}?format=j1";   
const ville = villeInput.value;
fetch(url)
.then(response => response.json())
.then(data => {
    const temperature = data.current_condition[0].temp_C;
    const description = data.current_condition[0].weatherDesc[0].value;
})
})