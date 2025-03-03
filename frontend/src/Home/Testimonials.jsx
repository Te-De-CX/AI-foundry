const Testimonials = () => {

    const card = [
        {
                id: 1,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
            {
                id: 2,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
            {
                id: 3,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
            {
                id: 4,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
            {
                id: 5,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
            {
                id: 6,
                name: "networking",
                text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            },
        ]
    

    return (
        <>
            <section>
                <h1>this is the testimonial section</h1>
                <img src="" alt="" />
                <main>
                <div>
                    {
                        card.map((content) => (
                            <div key={content.id}>
                                {content.icon}
                                <h3>{content.name}</h3>
                                <p>{content.text}</p>
                                <button>Details</button>
                            </div>
                        ))
                    }
                </div>
                </main>
            </section>
        </>
    )
}

export default Testimonials;