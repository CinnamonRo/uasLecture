import React, { useState, useRef } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbyIHOoYDqS14aJAGl9G-5Ogk-1o9liG-GvIYutCo-j4xGdnNJkW2hXajh-jyCXNRtwH/exec",
      {
        method: "POST",
        body: new formData(formRef.current),
      }
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    formRef.current.reset();
    setShowModal(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Send Us a Message
        </h1>
        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              name="Name"
              type="text"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              name="Email"
              type="email"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1-5"
              name="Rating"
              min="1"
              max="5"
              type="number"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              name="Message"
              rows="4"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
