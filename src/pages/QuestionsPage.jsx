import React, { useContext, useEffect, useState } from "react";
import Flexwrapper from "../components/Flexwrapper";
import MaxWidthScreen from "../components/MaxWidthScreen";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import QuestionsList from "./QuestionsList";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";

function QuestionPage() {
  const { referralCode } = useContext(UserContext);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };

  const [question, setQuestion] = useState([])
  const [answerArray, setAnswerArray]=useState([])
  const [selectQuestion, setSelectQuestion]=useState([])
  const [Loading, setLoading] = useState(false)
  const [loading, setLoadings] = useState(false)
  const [date, setDate]=useState(null)


  const fetchQuestion = async () => {
    setLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/bot/getQuestions`)
      const result = response.data
      setDate(result.date)
      setQuestion(result.questions)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error.response || error.message);
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchQuestion()
  }, [])

  
  const handleChange = (selection) => {
    // Check if the item already exists in the state by matching its ID
    setSelectQuestion((prevState) => {
      const exists = prevState.find((item) => item.id === selection.id);
      // If the item does not exist, add it to the state
      if (!exists) {
        const updatedState = [...prevState, selection];
  
        // Log the updated state
        // console.log('Updated state:', updatedState);
  
        // Check if the selected answer is incorrect
        if (selection.userSelected !== selection.answer) {
          handleRemove(selection.id)
        }
  
        // Return the updated state to update the component's state
        return updatedState;
      }
  
      // If the item already exists, just return the current state
      return prevState;
    });
  };
  
  
  const handleRemove = (id) => {
    setSelectQuestion((prevState) => {
      prevState.filter((question) => {
        question.id !==  id
      })
  });
  };
  

  const handleSubmit = async () => {
    //'userId : ', referralCode 
      console.log('selectQuestion : ',answerArray )

}

  return (
    <div>
      <MaxWidthScreen>
      {Loading ? (
            <div className="flex justify-center items-center h-screen"><span className="loader flex"></span></div>
      ): (
        <div>
        <div className="p-4 flex items-center font-josefin font-medium my-3">
          <FaArrowLeft className="text-2xl text-white " onClick={handleNav} />
          <p className="uppercase  text-white text-center font-bold flex-grow">
            question and answer
          </p>
        </div>
        <div className="pb-20">
          <div className="main p-4 mt-4  scrollbar-hide">
            {question &&  question.length > 0 ? (
              question.map((question) => (
                <QuestionsList key={question.id} question={question}  handleRemove={handleRemove} setSelectQuestion={setSelectQuestion} handleChange={handleChange} />
              ))
            ) : (
              <p className="text-white leading-6 text-lg p-2 font-josefin font-bold">No question available</p>
            )}

          </div>

          <div className="mx-auto my-7 w-11/12 md:w-6/12">
            
           {question && question.length > 0 ? ( 
            <button type="submit" onClick={handleSubmit}
                class="bg-[#f4f4f4] border-2 text-blue-700 font-medium rounded-lg text-base capitalize px-4 py-2  hover:bg-purple-700 transition hover:border-none hover:text-white transform hover:scale-105 duration-200 w-full">
                {loading ? (
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
                  "Submit"
                )}
              </button>
               ): null} 
              </div>
        </div>
        </div>
      )}
      </MaxWidthScreen>
    </div>
  );
}

export default QuestionPage;
