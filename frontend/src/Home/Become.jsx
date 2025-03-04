import { FaGlobe } from "react-icons/fa";

const Become = () => {
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
    {
      id: 5,
      name: "Networking",
      text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      icon: <FaGlobe />,
    },
    {
      id: 6,
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
            Why Become a Member?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita
            atque suscipit fugit, et at?
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {card.map((content) => (
            <div
              key={content.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-900 hover:border-green-700 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl text-green-900 mb-4">{content.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {content.name}
              </h3>
              <p className="text-gray-600 mb-6">{content.text}</p>
              <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Stats and CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Stats Section */}
          <div className="bg-green-900 p-8 rounded-2xl text-white">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold">30,000</h2>
                <p className="text-lg">Invested</p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold">100,000</h2>
                <p className="text-lg">Investing</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Raise Funding for Your Startup
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
              commodi debitis, alias, iste eligendi velit atque amet possimus
              obcaecati doloribus esse similique deleniti doloremque fuga aut est.
              Tempora, omnis ea!
            </p>
            <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Become;