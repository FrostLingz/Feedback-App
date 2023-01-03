import {createContext, useState} from "react"
import { v4 as uuid4 } from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item1 from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item2 from context",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback item3 from context",
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Delete Feedback
  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter(item => item.id != id))
    }
  }

  // Add Feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuid4()
    setFeedback([newFeedback ,...feedback])
  }

  // Set item to be updated
  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Update feedback item
  function updateFeedback(id, updItem) {
    setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem }: item))
    )
  }

  return (
    <FeedbackContext.Provider 
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext