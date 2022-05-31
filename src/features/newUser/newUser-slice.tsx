import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewUserState {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    benefits: string[];
    recipient: string;
}

const initialState: NewUserState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    benefits: [],
    recipient: "",
};

const newUserSlice = createSlice({
    name: "newUser",
    initialState,
    reducers: {
        setFirstName: (
            state: { firstName: string },
            action: PayloadAction<string>
        ) => {
            state.firstName = action.payload;
        },
        setLastName: (
            state: { lastName: string },
            action: PayloadAction<string>
        ) => {
            state.lastName = action.payload;
        },
        setEmail: (state: { email: string }, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhoneNumber: (
            state: { phoneNumber: string },
            action: PayloadAction<string>
        ) => {
            state.phoneNumber = action.payload;
        },
        setBenefits: (
            state: { benefits: string[] },
            action: { payload: string[] }
        ) => {
            state.benefits = [...action.payload];
        },
        setRecipient: (
            state: { recipient: string },
            action: PayloadAction<string>
        ) => {
            state.recipient = action.payload;
        },
    },
});

export const {
    setFirstName,
    setLastName,
    setEmail,
    setPhoneNumber,
    setBenefits,
    setRecipient,
} = newUserSlice.actions;

export default newUserSlice.reducer;
