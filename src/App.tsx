import {useState} from 'react'
import {UserInputs} from "./models/UserInputs";
import {HackedBefore} from "./steps/EverBeenHacked";

function App() {
    const [userInput, setUserInput] = useState<UserInputs>({})

    return (
        <HackedBefore userInput={userInput} setUserInput={setUserInput}/>
    )
}

export default App
