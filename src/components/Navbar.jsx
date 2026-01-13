import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Auditor Water | مدقق مياه</h1>
      <div className="space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}


export default Navbar