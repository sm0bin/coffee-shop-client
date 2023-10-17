import BackToHome from "./BackToHome";
import Footer from "./Footer";
import Header from "./Header";

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