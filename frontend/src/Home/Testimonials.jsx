const Testimonials = () => {
    const card = [
      {
        id: 1,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
      {
        id: 2,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
      {
        id: 3,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
      {
        id: 4,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
      {
        id: 5,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
      {
        id: 6,
        name: "Networking",
        text: "Monday we go to school a ma lon fa loud, Tuesday we stay at home I no go again, Wednesday we call Shade when she come we hum, Thursday bla sl do.",
      },
    ];
  
    return (
      <>
        <section className="py-20 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gray-50">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              This is the Testimonial Section
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our clients have to say about our services.
            </p>
          </div>
  
          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {card.map((content) => (
                <div
                  key={content.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-green-900 hover:border-green-700 transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-4xl text-green-900 mb-4">
                    {/* Replace with your icon if needed */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    {content.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{content.text}</p>
                  <button className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                    Details
                  </button>
                </div>
              ))}
            </div>
          </main>
        </section>
      </>
    );
  };
  
  export default Testimonials;