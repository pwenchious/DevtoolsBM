(function () {
    if (document.getElementById("devtools-iframe")) return;

    let iframe = document.createElement("iframe");
    iframe.src = "https://pwenchious.github.io/DevtoolsBM/";
    iframe.id = "devtools-iframe";
    iframe.style = `
        position:fixed;
        z-index:999999;
        top:20px;
        right:20px;
        width:400px;
        height:500px;
        border:none;
        border-radius:10px;
        box-shadow:0 0 20px #0008;
        background:white;
    `;
    document.body.appendChild(iframe);

    // Make draggable (optional)
    let pos = { x: 0, y: 0 };
    iframe.onmousedown = function (e) {
        pos = { x: e.clientX - iframe.offsetLeft, y: e.clientY - iframe.offsetTop };
        document.onmousemove = function (e) {
            iframe.style.left = e.clientX - pos.x + "px";
            iframe.style.top = e.clientY - pos.y + "px";
        };
        document.onmouseup = () => document.onmousemove = null;
    };
})();
