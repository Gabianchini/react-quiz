import { useReducer } from "react";
import Question from "./Question";

/*If you've used useState() hook to manage a non-trivial state like a list of items, where you need to add, update and remove items in the state, you can notice that the state management logic takes a good part of the component's body.
A React component should usually contain the logic that calculates the output. But the state management logic is a different concern that should be managed in a separate place. Otherwise, you get a mix of state management and rendering logic in one place, and that's difficult to read, maintain, and test!
To help you separate the concerns (rendering and state management) React provides the hook useReducer(). The hook does so by extracting the state management out of the component.*/

const initialState = {
    currentQuestionIndex:0,
    questions:[],
};

const reducer = (state, action) => {
    if(action.type === "NEXT_QUESTION"){
        return{
            ...state, /*pega todas as propriedades do estado*/
            currentQuestionIndex:state.currentQuestionIndex + 1, /*o estado sera alterado para estado atual + 1*/
        };
        }
        return state;
    };


const Quiz = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("state",state);
    //const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    //const [question, setQuestion] = ([])



    return (
    <div className="quiz">
    <div>
        <div className="score">
            Question 1/8
        </div>
        <Question questions={state.questions}/>
        <div className="next-button" onClick={() => dispatch({type:"NEXT_QUESTION"})}>Next</div>
    </div>
    </div>
    )
}

export default Quiz;