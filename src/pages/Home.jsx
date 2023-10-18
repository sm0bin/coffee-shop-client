import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./shared/CoffeeCard";

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
            <section className="w-full overflow-x-auto bg-orange-50 py-14">
                <div className="flex justify-between gap-10 max-w-7xl mx-auto">


                    <div className="min-w-full md:min-w-0 px-5 md:p-0">
                        <img src="/images/icons/1.svg" alt="" />
                        <h3 className="font-rancho text-4xl mt-4 mb-2">Awesome Aroma</h3>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="min-w-full md:min-w-0 px-5 md:p-0">
                        <img src="/images/icons/2.svg" alt="" />
                        <h3 className="font-rancho text-4xl mt-4 mb-2">High Quality</h3>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                    <div className="min-w-full md:min-w-0 px-5 md:p-0">
                        <img src="/images/icons/3.svg" alt="" />
                        <h3 className="font-rancho text-4xl mt-4 mb-2">Pure Grades</h3>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="min-w-full md:min-w-0 px-5 md:p-0">
                        <img src="/images/icons/4.svg" alt="" />
                        <h3 className="font-rancho text-4xl mt-4 mb-2">Proper Roasting</h3>
                        <p>We served the coffee to you maintaining the best quality</p>
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

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-5 lg:mx-auto">
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