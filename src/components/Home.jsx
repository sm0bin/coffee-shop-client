import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <>
            <section className="hero min-h-[90vh] bg-[url('/images/3.png')] bg-bottom">
                <div className="hero-overlay bg-orange-800 bg-opacity-10"></div>
                <div className="hero-content w-full justify-end text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-rancho font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn block mb-12 bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 border-opacity-0 hover:border-[#331A15]">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="mt-32">
                <h4 className="text-center text-xl">--- Sip & Savor ---</h4>
                <h1 className="font-rancho text-center font-bold text-6xl mt-2 mb-4">Our Popular Products</h1>
                <Link to="/coffees/new">
                    <button className="btn block mb-12 mx-auto bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 hover:border-[#331A15]">Add Coffee</button>
                </Link>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {
                    coffees.map(coffee => (
                        <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
                    ))
                }
            </section>
        </>

    );
};

export default Home;