document.addEventListener("DOMContentLoaded", function () {
    let darkMode
    document.getElementById("darkMode").checked = localStorage.getItem("darkTheme") === "true"

    document.getElementById("settingsForm").addEventListener("submit", function(e) {
        e.preventDefault()
         darkMode = document.getElementById("darkMode").checked
        localStorage.setItem("darkTheme", darkMode)
        applyTheme(darkMode)
    })

    function applyTheme(darkMode) {
        document.body.classList.toggle("dark-mode", darkMode
        )
    }
})
