import {FC} from 'react';
import profilePictureUrl from '../assets/profilepic.jpeg';
import {StepInput} from "../models/Step";

const RADIO_BUTTON_GROUP = "is-this-you";
export const IsThisYou: FC<StepInput> = ({userInput, setUserInput}) => {
    const setAnswer = (answer: boolean) => {
        setUserInput({isThisYou: answer});
    }

    return (
        <section>
            <header>
                Is this you?
            </header>
            <main>
                <div id = 'profile-details'>
                    <img src={profilePictureUrl} />
                    {userInput.instagramUsername}
                </div>
                <div id = 'is-this-you-questions'>
                    <label>
                        <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(true)}
                               defaultChecked={userInput.isThisYou}/>
                        Yes, that's me!
                    </label>
                    <label>
                        <input type="radio" name={RADIO_BUTTON_GROUP} onClick={() => setAnswer(false)}
                               defaultChecked={userInput.isThisYou === false}/>
                        No, that's somebody else
                    </label>
                </div>
            </main>
        </section>
    );
}