import {useState} from 'react'
import {UserInputs} from "./models/UserInputs";
import {HackedBefore} from "./steps/EverBeenHacked";
import {InstagramUsername} from "./steps/InstagramUsername";
import {IsThisYou} from "./steps/IsThisYou";

function App() {
    const [userInput, setUserInput] = useState<UserInputs>({})

    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
            <HackedBefore userInput={userInput} setUserInput={setUserInput}/>
            <InstagramUsername userInput={userInput} setUserInput={setUserInput}/>
            <IsThisYou userInput={userInput} setUserInput={setUserInput}/>
            Answers: {JSON.stringify(userInput)}
        </main>
    );
}

export default App
