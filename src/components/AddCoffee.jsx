import { Link } from "react-router-dom";

const AddCoffee = () => {
    return (
        <div>
            <div className="max-w-7xl min-h-screen mx-auto">
                <div className="my-12">
                    <Link className="flex items-center gap-4" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>

                        <h2 className="font-rancho text-3xl">Back to home</h2>
                    </Link>
                </div>
                <div className="">

                    <div className="card flex-shrink-0 w-full bg-orange-50 rounded-md py-16 px-28">
                        <h2 className="text-center text-5xl font-rancho">Add New Coffee</h2>
                        <p className="py-8 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form className="card-body p-0">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Chef</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Chef" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Supplier</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Taste</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Category</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Details</span>
                                    </label>
                                    <input type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Photo</span>
                                </label>
                                <input type="text" placeholder="Enter photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-block bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 hover:border-[#331A15]">Add Coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;