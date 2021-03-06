import {FC} from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import {StepInput} from "../models/Step";

const RADIO_BUTTON_GROUP = "hacked-before-radio";
export const HackedBefore: FC<StepInput> = ({userInput, setUserInput}) => {
    const setAnswer = (answer: boolean) => {
        setUserInput({hackedBefore: answer});
    }

    return (
        <section>
            <header>
                <img src={CustomerSupportUrl}/>
                Have you ever been hacked before?
            </header>
            <main>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(true)}
                           defaultChecked={userInput.hackedBefore}/>
                    Yes, I've been hacked before
                </label>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(false)}
                           defaultChecked={userInput.hackedBefore === false}/>
                    No, I've never been hacked
                </label>
            </main>
        </section>
    );
}