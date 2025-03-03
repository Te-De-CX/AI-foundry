import { FaGlobe } from "react-icons/fa";

const Become = () => {

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
        {
            id: 5,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
        {
            id: 6,
            name: "networking",
            text: "monday we go to school a ma lon fa loud, tuesday we stay at homw i no go agian, wednesday we call shade when she come we hum, thurday bla sl do.",
            icon: <FaGlobe/>
        },
    ]

    return (
        <>
            <section>
                <div>
                    <h2>why become a member?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita atque suscipit fugit, et at ?</p>
                </div>
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
                <div>
                    <div>
                        <div>
                            <h2>30,000</h2>
                            <p>invested</p>
                        </div>
                        <div>
                            <h2>100,000</h2>
                            <p>investing</p>
                        </div>
                    </div>
                    <div>
                        <h1>raise funding for your startup</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate commodi debitis, alias, iste eligendi velit atque amet possimus obcaecati doloribus esse similique deleniti doloremque fuga aut est. Tempora, omnis ea!</p>
                        <button>learn more</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Become;