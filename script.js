const content = document.querySelector(".content")

function show(type, text) {
    const uiString = `<div class="div-${type} div-show">
                            ${text}
                        </div>`;
    content.innerHTML = uiString;
}

const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    setTimeout(() => {

        const input = document.querySelector(".input")
        const text = document.querySelector(".input").value;
        e.preventDefault();
    
        if (text >= 0 && text < 65535 && text != "") {
            show("success", `You're being redirected to http://127.0.0.1:${text} in 5 seconds`);
    
            setTimeout(() => {
                window.location.port = text;
            }, 5000);
        }   else {
            show("danger", "Invalid Port... Port Number should be more than or equal to 0 and must be less than 65535")
            // setTimeout(() => {
            //     content.innerHTML = ""
            // }, 3000);
        }
    }, 1000)

})