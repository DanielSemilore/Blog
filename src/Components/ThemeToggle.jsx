import React from 'react'


const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div>
        <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    </div>
  )
}

export default ThemeToggle
