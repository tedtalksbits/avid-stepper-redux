import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

// define pre-typed hooks
// we will use these hooks(useAppDispatch, useAppSelector) to access the state of the store instead of the base functions useDispatch and useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
