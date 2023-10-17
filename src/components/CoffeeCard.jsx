import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const navigate = useNavigate();
    const {
        _id,
        name,
        chef,
        photo,
    } = coffee;

    const handleView = () => {
        navigate(`/coffee/${_id}`);
    }
    const handleUpdate = () => {
        navigate(`/update-coffee/${_id}`)
    }
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5500/coffees/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (


        <div className="flex p-8 pr-12 rounded-lg bg-orange-50 items-center gap-6">
            <img className="h-64" src={photo} alt="" />
            <div className="space-y-2 flex-grow">
                <h3><span className="font-bold">Name: </span>{name}</h3>
                <h3><span className="font-bold">Chef: </span>{chef}</h3>
                <h3><span className="font-bold">Price: </span>$20</h3>
            </div>
            <div className="space-y-4">
                <button onClick={handleView} className="block p-2.5 rounded bg-teal-500 text-white hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={handleUpdate} className="block p-2.5 rounded bg-gray-800 text-white hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
                <button onClick={handleDelete} className="block p-2.5 rounded bg-rose-500 text-white hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
}

export default CoffeeCard;