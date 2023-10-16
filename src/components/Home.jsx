import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

    const loadCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadCoffees);

    return (
        <div>
            <h4 className="text-center text-xl">--- Sip & Savor ---</h4>
            <h1 className="font-rancho text-center font-bold text-6xl mt-2 mb-4">Our Popular Products</h1>
            <Link to="/add-coffee">
                <button className="btn block mb-12 mx-auto bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 hover:border-[#331A15]">Add Coffee</button>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {
                    coffees.map(coffee => (
                        <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
                    ))
                }
            </div>
        </div>

    );
};

export default Home;