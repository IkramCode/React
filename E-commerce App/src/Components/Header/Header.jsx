import React from 'react'

export default function Header(props) {
    

    return (
        <>
            <header class="bg-white shadow-md">
  <div class="container mx-auto p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="https://via.placeholder.com/40" alt="Logo" class="mr-2" />
      <h1 class="text-2xl font-bold text-gray-800">E-Commerce</h1>
    </div>
    <nav class="hidden md:flex space-x-6">
      <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
      <a href="/shop" class="text-gray-600 hover:text-gray-800">Shop</a>
      <a href="/about" class="text-gray-600 hover:text-gray-800">About</a>
      <a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
    </nav>
    <div class="flex items-center space-x-4">
      <a href="/cart" class="text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.857 4.286M7.714 15h8.572L21 6.857H6.571L5.714 3M7.714 15l.571 2.857a2 2 0 01-1.943 2.286H4.714M7.714 15h8.572m0 0l.571 2.857a2 2 0 01-1.943 2.286H13.286M11 13v-2m0 0V7m0 4h2m0 0h2m0 0V7m0 4h2" />
        </svg>
      </a>
      <a href="/profile" class="text-gray-600 hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 14.625a4.875 4.875 0 110-9.75 4.875 4.875 0 010 9.75zm0 0c-3.375 0-6.375 2.25-6.375 5.625M12 14.625c3.375 0 6.375 2.25 6.375 5.625" />
        </svg>
      </a>
      <button class="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
  </div>
  <nav class="md:hidden bg-white border-t">
    <div class="container mx-auto p-4 flex flex-col space-y-4">
      <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
      <a href="/shop" class="text-gray-600 hover:text-gray-800">Shop</a>
      <a href="/about" class="text-gray-600 hover:text-gray-800">About</a>
      <a href="/contact" class="text-gray-600 hover:text-gray-800">Contact</a>
    </div>
  </nav>
</header>

        </>
    )
}
