import Logo from 'logo.svg';
import React from 'react';

function App() {
  return (
    <div className="h-screen w-full bg-gray-800 text-white flex items-center justify-center flex-col ">
      <img className="App-logo w-64 h-auto mx-auto -mt-32 mb-8" src={Logo} alt="" />
      <h1 className="text-4xl mb-4">Create React App with ExpressJS &  TailwindCSS!</h1>

      <p className="text-base mb-4">Eslint, Prettier, Absolute Imports & all the lastest Javascript features are available out of the box.</p>

      <p className="mb-8">The full list of supported feature can be found on <a href="/" className="underline text-gray-400 ">Github</a></p>

      <a href="https://expressjs.com/" className="max-w-max-content px-4 bg-green-500 text-base leading-6 text-white rounded-lg shadow-lg text-base block h-12 flex items-center justify-center mb-4">View ExpressJS Docs</a>

      <a href="https://tailwindcss.com/docs/installation" className="max-w-max-content px-4 bg-green-500 text-base leading-6 text-white rounded-lg shadow-lg text-base block h-12 flex items-center justify-center">View tailwindcss Docs</a>
    </div>
  );
}

export default App;
