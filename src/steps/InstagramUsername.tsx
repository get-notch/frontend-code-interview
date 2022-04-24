import {FC} from 'react';
import CustomerSupportUrl from '../assets/customerSupport.png';
import {StepInput} from "../models/Step";

export const InstagramUsername: FC<StepInput> = () => {

    return (
        <section>
            <header>
                <img src={CustomerSupportUrl}/>
                What is your Instagram username?
            </header>
            <div contentEditable style={{width: '600px', border: '1px solid black'}} />
        </section>
    );
}