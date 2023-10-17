import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import BackToHome from "./BackToHome";

const UpdateCoffee = () => {
    const {
        _id,
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
    } = useLoaderData();

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const updateCoffee = {
            name: e.target.name.value,
            chef: e.target.chef.value,
            supplier: e.target.supplier.value,
            taste: e.target.taste.value,
            category: e.target.category.value,
            details: e.target.details.value,
            photo: e.target.photo.value,
        };
        console.log(updateCoffee);
        fetch(`http://localhost:5500/coffees/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateCoffee),
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire(
                        'Good job!',
                        'Coffee updated successfully.',
                        'success'
                    )
                    e.target.reset();
                }
            });
    }
    return (
        <div>
            <div className="max-w-7xl min-h-screen mx-auto">
                <BackToHome></BackToHome>

                <div className="">

                    <div className="card flex-shrink-0 w-full bg-orange-50 rounded-md py-16 px-28">
                        <h2 className="text-center text-5xl font-rancho">Update Coffee</h2>
                        <p className="py-8 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handleAddCoffee} className="card-body p-0">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Chef</span>
                                    </label>
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee Chef" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Taste</span>
                                    </label>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Photo</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-block bg-[#D2B48C] hover:bg-[#cb9a5b] font-rancho normal-case text-2xl  text-[#331A15] border-2 hover:border-[#331A15]">Update Coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;