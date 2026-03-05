export function initTheme() {
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark")
  }
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark")

  localStorage.setItem("theme", isDark ? "dark" : "light")
}