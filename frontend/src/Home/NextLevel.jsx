import { FaGlobe } from "react-icons/fa";

const NextLevel = () => {

    const card = [
        {
            id: 1,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
        {
            id: 2,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
        {
            id: 3,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
        {
            id: 4,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
    ]

return (
    <>
        <section>
            <h2>everything you need to take your startup to the next level</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ercitationem laborum minus magni? Accusamus, modi!</p>
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
        </section>
    </>
)
}

export default NextLevel;