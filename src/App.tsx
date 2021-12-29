import {useState} from 'react'
import {UserInputs} from "./models/UserInputs";
import {HackedBefore} from "./steps/EverBeenHacked";
import {InstagramUsername} from "./steps/InstagramUsername";
import {IsThisYou} from "./steps/IsThisYou";

function App() {
    const [userInput, setUserInput] = useState<UserInputs>({})
    const setPartialUserInput = (partialInput: Partial<UserInputs>) => setUserInput({...userInput, ...partialInput});

    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
            <HackedBefore userInput={userInput} setUserInput={setPartialUserInput}/>
            <InstagramUsername userInput={userInput} setUserInput={setPartialUserInput}/>
            <IsThisYou userInput={userInput} setUserInput={setPartialUserInput}/>
            Answers: {JSON.stringify(userInput)}
        </main>
    );
}

export default App
