import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <div className="my-12">
            <Link className="flex items-center gap-4" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

                <h2 className="font-rancho text-3xl">Back to home</h2>
            </Link>
        </div>
    );
};

export default BackToHome;