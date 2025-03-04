import { FaGlobe } from "react-icons/fa";

const NextLevel = () => {
  const card = [
    {
      id: 1,
      name: "Networking",
      text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      icon: <FaGlobe />,
    },
    {
      id: 2,
      name: "Networking",
      text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      icon: <FaGlobe />,
    },
    {
      id: 3,
      name: "Networking",
      text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      icon: <FaGlobe />,
    },
    {
      id: 4,
      name: "Networking",
      text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      icon: <FaGlobe />,
    },
  ];

  return (
    <>
      <section className="py-20 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gray-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to take your startup to the next level
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            exercitationem laborum minus magni? Accusamus, modi!
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {card.map((content) => (
            <div
              key={content.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-600 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">{content.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {content.name}
              </h3>
              <p className="text-gray-600 mb-6">{content.text}</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NextLevel;