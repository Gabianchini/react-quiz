/* React context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.*/


import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data.js"; 
/*If you've used useState() hook to manage a non-trivial state like a list of items, where you need to add, update and remove items in the state, you can notice that the state management logic takes a good part of the component's body.
A React component should usually contain the logic that calculates the output. But the state management logic is a different concern that should be managed in a separate place. Otherwise, you get a mix of state management and rendering logic in one place, and that's difficult to read, maintain, and test!
To help you separate the concerns (rendering and state management) React provides the hook useReducer(). The hook does so by extracting the state management out of the component.*/

const initialState = {
    currentQuestionIndex:0,
    questions,/*esse é o arquivo data que tem todas as perguntas em uma array de objetos*/
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
    



 export const QuizContext = createContext();

 export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    console.log("state",value);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
 
 
 };