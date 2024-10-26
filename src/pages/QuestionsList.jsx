import { useState } from "react"

function QuestionsList({ question, handleRemove, handleChange, setSelectQuestion }) {

  const handlePick = (option) => {
    // console.log(question);
    // if (option !== question.answer) {
    //   console.log('incorrect');
    //   return; // Stop further execution if the answer is incorrect
    // }


    handleChange({
     ...question,
     userSelected:option
  });
  }

  return (
    <div key={question.id} className="section py-6 relative">
      <h2 className="text-white font-Roboto text-xl absolute top-0 right-4 bg-[#29cc78] px-4 py-2 rounded-full shadow-lg">
        {question.id}
      </h2>

      <div className="border-2 border-gray-700 text-white text-lg py-3 capitalize px-4 min-h-[9rem] rounded-2xl my-10 font-Roboto bg-gray-800">
        {question.question}
      </div>

      <div className="item-section flex flex-col space-y-4">
        {['optionA', 'optionB', 'optionC', 'optionD'].map((optionKey) => (
          <div
            key={optionKey}
            className="group border-2 border-gray-600 rounded-2xl py-3 bg-gray-700 hover:bg-gray-600 transition-colors duration-300"

          >
            <input
              type="radio"
              onClick={() => handlePick(question[optionKey])}
              name={`answer-${question.id}`} // Make each question's radio group unique
              id={`${question.id}-${optionKey}`}
              className="hidden peer"
            />

            <label
              htmlFor={`${question.id}-${optionKey}`}
              className="flex items-center cursor-pointer text-white text-lg font-semibold font-mono peer-checked:text-green-400 label"
            >
              {question[optionKey]}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionsList