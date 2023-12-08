import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Project from "../../Components/Project/Project";
import Review from "../../Components/Review/Review";
import Demo from "../../Components/Services/Demo";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Demo></Demo>
            <Review></Review>
            <Project></Project>
            <Footer></Footer>
        </div>
    );
};

export default Home;