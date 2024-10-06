import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

function UpdateQuestions() {
    const navigate = useNavigate();
    const handleNav = () => {
      navigate("/admin");
    };
    return (
        <div className=''>
            <div className="mx-auto w-full max-w-screen-xl  overflow-hidden min-h-screen  relative">
                <div className="max-w-3xl mx-auto p-2 ">
                    <div className="p-4 flex items-center font-josefin font-medium my-3">
                        <FaArrowLeft
                            className="text-2xl text-white cursor-pointer hover:text-gray-300"
                            onClick={() => handleNav()}
                        />
                        <p className="uppercase text-white text-center font-bold flex-grow">
                            View questions
                        </p>
                    </div>updateQuestions
                </div>
            </div>
        </div>
    )
}

export default UpdateQuestions


// htpps://476a-105-112-17-156.ngrok-free.app