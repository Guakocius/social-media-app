const darkMode = document.getElementById("darkMode")

darkMode.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkMode.checked)
    localStorage.setItem("darkMode", darkMode.checked.toString())
})

const isDarkMode = localStorage.getItem("darkMode") === "true"
darkMode.checked = isDarkMode
document.body.classList.toggle("dark-mode", isDarkMode)