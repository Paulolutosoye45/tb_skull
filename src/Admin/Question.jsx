import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router";
import axios from "axios";

function Question() {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/admin");
  };
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
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/admin/createQuestion`, {
        Questions: question,
        OptionA: options.optionA,  // Correct access to optionA
        OptionB: options.optionB,
        OptionC: options.optionC,
        OptionD: options.optionD,
        Answer: options[`option${correctAnswer}`],
      });
      setOptions({
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
      });
      setQuestion('')
    } catch (error) {
      console.error('Error fetching data:', error.response || error.message);
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


          <div class="p-8 bg-white rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Create a Question</h2>
            <form id="questionForm" onSubmit={handleSubmit}>

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
                Save Question
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Question;
