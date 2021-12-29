import {FC, FormEvent} from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import {StepInput} from "../models/Step";

const INPUT_ID = "ig-username-input";
export const InstagramUsername: FC<StepInput> = ({userInput, setUserInput}) => {
    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        const {'ig-username-input': {value}} = event.target as unknown as { "ig-username-input": { value: string } };
        setUserInput({instagramUsername: value});
        event.preventDefault();
    }

    return (
        <section>
            <header>
                <img src={CustomerSupportUrl}/>
                What is your Instagram username?
            </header>
            <form onSubmit={submitForm}>
                <input type="text" id={INPUT_ID}/>
                <input type="submit" value="Next"/>
            </form>
        </section>
    );
}