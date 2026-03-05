import React from 'react'
import { toggleTheme } from "./utils/theme"

const ThemeToggle = () => {
  return (
    <div>
        <button
        onClick={toggleTheme}
        className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            Toggle Theme
        </button>
    </div>
  )
}

export default ThemeToggle
