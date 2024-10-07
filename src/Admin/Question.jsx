import React, { useState, useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import axios from "axios";

function Question() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin");
  };
  const divRef = useRef(null);
  const [Loading, setLoading]=useState(false)
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
  });
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleInputChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/createQuestion`, {
        Question: question, // The question text
        OptionA: options.optionA,  // Correct access to optionA
        OptionB: options.optionB,  // Correct access to optionB
        OptionC: options.optionC,  // Correct access to optionC
        OptionD: options.optionD,  // Correct access to optionD
        Answer: options[`option${correctAnswer}`],  // Correct answer based on user selection
      });

      // Reset form fields after successful submission
      setOptions({
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
      });
      setCorrectAnswer('');
      console.log('Question submitted successfully:', response.data);
      if (response.data.responseCode === '00') {
        if (divRef.current) {
          divRef.current.classList.remove('hidden'); // Add class to the div
          divRef.current.classList.add('block'); // Add class to the div
          setTimeout(() => {
            divRef.current.classList.remove('block'); // Remove the class
            divRef.current.classList.add('hidden'); // Remove the class
          }, 4000);
        }
    
      }
      setLoading(false)
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error('Error from server:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error creating request:', error.message);
      }
    }
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
              View Matches
            </p>
          </div>
          {/* <p className="uppercase text-white  font-josefin text-center font-bold flex-grow">
                  coming soon....
                </p> */}

          <div ref={divRef} className="absolute max-w-3xl mx-auto w-full text-center bg-[#29cc78e2]  top-0 py-3 text-white font-Roboto 
                transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn hidden">
            Successful
          </div>


          <div class="p-8 bg-white rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create a Question</h2>
            <form onSubmit={handleSubmit}>

              <div class="mb-6">
                <label for="question" class="block text-lg font-medium text-gray-700 mb-2">Question</label>
                {/* <input
                    type="text"
                    id="question"
                    name="question"
                    placeholder="Enter the question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  required /> */}

                <textarea
                  id="question"
                  name="question"
                  rows="4"
                  placeholder="Enter the question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300' required></textarea>
              </div>


              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">Options</label>
                {['A', 'B', 'C', 'D'].map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`option${option}`}
                    name={`option${option}`}
                    placeholder={`Option ${option}`}
                    value={options[`option${option}`]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    required={index < 4} // Require options A to D
                  />
                ))}
              </div>


              <div className="mb-6">
                <label htmlFor="correctAnswer" className="block text-lg font-medium text-gray-700 mb-2">
                  Correct Answer
                </label>
                <select
                  id="correctAnswer"
                  name="correctAnswer"
                  value={correctAnswer}
                  onChange={(e) => setCorrectAnswer(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  required
                >
                  <option value="">Select the correct answer</option>
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit"
                class=" px-4 py-3 bg-purple-600 text-white font-medium text-lg rounded-lg hover:bg-purple-700 transition transform hover:scale-105 duration-200">
                
                {Loading ? (
                  <div
                    role="status"
                    className="flex justify-center items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6  text-gray-200 animate-spin fill-[#213045]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentFill"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                ) : (
                  "Save Question"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Question;
