import React, { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAIResponse = () => {
    const responses = {
      "heart attack": "Call 911 immediately. Keep the person calm and help them sit down.",
      "burns": "Cool the burn under running water for at least 10 minutes. Do not apply ice.",
      "choking": "Encourage coughing. If the person cannot breathe, perform abdominal thrusts."
    };
    setResponse(responses[query.toLowerCase()] || "Sorry, I don't have information on that condition.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Rythmo Clone</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Get Started</button>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold">Enhancing Health with AI</h2>
        <p className="mt-4 text-lg text-gray-600">Discover AI-powered wellness solutions for a better life.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">Learn More</button>
      </header>

      {/* AI First Aid Assistant */}
      <section className="p-10 bg-white shadow-md rounded-lg mx-10 text-center">
        <h3 className="text-2xl font-bold">AI First Aid Assistant</h3>
        <input 
          type="text" 
          placeholder="Enter a medical condition..." 
          className="mt-4 p-2 border rounded-md w-1/2" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={handleAIResponse}>
          Get Advice
        </button>
        {response && <p className="mt-4 text-lg text-gray-700">{response}</p>}
      </section>

      {/* Articles Section */}
      <section className="p-10 bg-white shadow-md rounded-lg mx-10">
        <h3 className="text-2xl font-bold">Latest Articles</h3>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-200 rounded-md">How AI is Transforming Wellness</div>
          <div className="p-4 bg-gray-200 rounded-md">The Future of Health Tech</div>
          <div className="p-4 bg-gray-200 rounded-md">Personalized AI in Daily Life</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 mt-10 bg-gray-800 text-white">
        <p>&copy; 2025 Rythmo Clone. All rights reserved.</p>
      </footer>
    </div>
  );
        }
        
