import {FC} from 'react';
import {StepInput} from "./Step";

const RADIO_BUTTON_GROUP = "hacked-before-radio";
export const HackedBefore: FC<StepInput> = ({userInput, setUserInput}) => {
    const setAnswer = (answer: boolean) => {
        setUserInput({hackedBefore: answer});
    }

    return (
        <section>
            <header>
                Have you ever been hacked before?
            </header>
            <main>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(true)}
                           checked={userInput.hackedBefore}/>
                    Yes, I've been hacked before
                </label>
                <label>
                    <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(false)}
                           checked={userInput.hackedBefore === false}/>
                    No, I've never been hacked
                </label>
            </main>
        </section>
    );
}