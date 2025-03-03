import React from "react";

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
        <section>
            <div>
                {faq.map((faqs) => (
                    <div key={faqs.id}>
                        <p>{faqs.question}</p>
                        <button onClick={() => toggleFaq(faqs.id)}>
                            {openFaqId === faqs.id ? "Hide Answer" : "Show Answer"}
                        </button>
                        {openFaqId === faqs.id && <p>{faqs.answer}</p>}
                    </div>
                ))}
            </div>
            <div>
                <img src="your-image-url.jpg" alt="Startup illustration" />
                <h2>Would you like to know more about startups?</h2>
                <button>Get Started</button>
            </div>
        </section>
    );
};

export default Faq; 