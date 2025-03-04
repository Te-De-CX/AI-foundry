import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  // Initialize state for each FAQ
  const [openFaqId, setOpenFaqId] = React.useState(null);

  const faq = [
    {
      id: 1,
      question: "What is a startup?",
      answer: "A startup is like a mini company.",
    },
    {
      id: 2,
      question: "How do startups work?",
      answer: "Startups typically focus on innovative products or services.",
    },
    {
      id: 3,
      question: "Why are startups important?",
      answer: "Startups drive innovation and create jobs.",
    },
    {
      id: 4,
      question: "What challenges do startups face?",
      answer: "Startups often face funding, competition, and scalability challenges.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id); // Toggle FAQ open/close
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <div className="flex flex-col gap-6">
          {faq.map((faqs) => (
            <div
              key={faqs.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFaq(faqs.id)}
              >
                <p className="text-lg font-semibold text-gray-900">
                  {faqs.question}
                </p>
                <button className="text-gray-600 hover:text-green-700 transition-colors duration-300">
                  {openFaqId === faqs.id ? (
                    <IoIosArrowUp className="w-6 h-6" />
                  ) : (
                    <IoIosArrowDown className="w-6 h-6" />
                  )}
                </button>
              </div>
              {openFaqId === faqs.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faqs.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Profile Section */}
        <div className="bg-green-900 rounded-xl p-8 text-white flex flex-col justify-center items-center text-center">
          <img
            src="your-image-url.jpg" // Replace with your image URL
            alt="Startup illustration"
            className="w-48 h-48 rounded-full mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">
            Would you like to know more about startups?
          </h2>
          <button className="bg-white text-green-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;