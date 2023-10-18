import BackToHome from "./shared/BackToHome";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

const ErrorPage = () => {
    return (
        <section>
            <Header></Header>
            <div className="max-w-7xl mx-auto">
                <BackToHome></BackToHome>
                <img className="w-full" src="/images/404.gif" alt="" />
            </div>
            <Footer></Footer>
        </section>
    );
};

export default ErrorPage;