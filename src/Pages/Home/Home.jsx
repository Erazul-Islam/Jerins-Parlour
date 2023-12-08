import Banner from "../../Components/Banner/Banner";
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
        </div>
    );
};

export default Home;