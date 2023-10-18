import { useLoaderData } from 'react-router-dom';
import BackToHome from './BackToHome';
// import PropTypes from 'prop-types';

const CoffeeDetails = () => {

    const {
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
    } = useLoaderData();
    return (

        <section className='max-w-7xl mx-auto'>
            <BackToHome></BackToHome>

            <div className="flex py-20 px-32 rounded-lg bg-orange-50 items-center gap-32">
                <img className="h-96" src={photo} alt="" />
                <div className="space-y-4 flex-grow text-2xl">
                    <h3><span className="font-bold">Name: </span>{name}</h3>
                    <h3><span className="font-bold">Price: </span>$20</h3>
                    <h3><span className="font-bold">Chef: </span>{chef}</h3>
                    <h3><span className="font-bold">Supplier: </span>{supplier}</h3>
                    <h3><span className="font-bold">Taste: </span>{taste}</h3>
                    <h3><span className="font-bold">Category: </span>{category}</h3>
                    <div>
                        <h3><span className="font-bold">Details: </span></h3>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// CoffeeDetails.propTypes = {

// };

export default CoffeeDetails;