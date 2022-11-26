(() => {
    const frame = document.createElement("iframe")
    frame.src = `https://charlesyiu.github.io/steam-miniprofile/index.min.html#${document.currentScript.getAttribute("data-id")||""}`
    frame.style.border = "none"
    frame.style.scrolling = "no"
    frame.style.frameborder = "1"
    frame.style.marginheight = "0px"
    frame.style.marginwidth = "0px"
    frame.style.height = document.currentScript.getAttribute("data-h") || "265px"
    frame.style.width = document.currentScript.getAttribute("data-w") || "365px"
    document.currentScript.parentElement.insertBefore(frame, document.currentScript)
    document.currentScript.remove()
})()