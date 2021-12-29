import {UserInputs} from "../models/UserInputs";

export type StepInput = {
    userInput: UserInputs,
    setUserInput: (partialInput: Partial<UserInputs>) => void;
}