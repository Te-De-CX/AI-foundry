import Navbar from "./routes/Navbar";
import Hero from "./Hero";
import Marque from "./Marque";
import Testimonials from "./Testimonials";
import Become from "./Become";
import NextLevel from "./NextLevel";
import Faq from "./Faq";
import Footer from "./routes/Footer"

const Layout = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Marque />
            <Testimonials />
            <Become />
            <NextLevel />
            <Faq />
            <Footer />
        </>
    )
}

export default Layout;