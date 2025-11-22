import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full  bg-gradient-to-l from-blue-400 to-purple-400 text-white">
      <div className="max-w-4xl mx-auto py-4 px-6 flex items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} LinkedPosts</div>
        <div className="text-sm text-gray-100">Built By Moamen </div>
      </div>
    </footer>
  )
}
