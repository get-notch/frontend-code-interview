import {FC, FormEvent} from 'react';
import {StepInput} from "./Step";

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
                What is your Instagram username?
            </header>
            <form onSubmit={submitForm}>
                <input type="text" id={INPUT_ID}/>
                <input type="submit" value="Next"/>
            </form>
        </section>
    );
}