var buttonNode = document.querySelectorAll("button.drum");

for (var i = 0; i < buttonNode.length; i++) {

    console.log(buttonNode[i]);

    buttonNode[i].addEventListener("click", handleClick);

    function handleClick() {

        alert("I got clicked");

    }
}