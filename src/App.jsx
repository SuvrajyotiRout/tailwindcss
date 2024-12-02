import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="p-6 max-w-lg bg-white rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">learning TailwindCSS</h1>
          <p className="text-gray-600 mb-4">This is a simple project using React and TailwindCSS</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App
