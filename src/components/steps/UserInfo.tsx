import {
    setFirstName,
    setLastName,
    setRecipient,
} from "../../features/newUser/newUser-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserInfo = () => {
    const dispatch = useAppDispatch();

    const firstName = useAppSelector((state) => state.newUser.firstName);
    const lastName = useAppSelector((state) => state.newUser.lastName);
    const recipient = useAppSelector((state) => state.newUser.recipient);

    const setActionTypes = {
        firstName: "FIRST_NAME",
        lastName: "LAST_NAME",
        recipient: "RECIPIENT",
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        actionType: string
    ) => {
        switch (actionType) {
            case setActionTypes.firstName:
                dispatch(setFirstName(e.target.value));
                break;
            case setActionTypes.lastName:
                dispatch(setLastName(e.target.value));
                break;
            case setActionTypes.recipient:
                dispatch(setRecipient(e.target.value));
                break;
            default:
                throw new Error("Invalid action type");
        }
    };

    return (
        <fieldset>
            <legend>User Info</legend>
            <h3>
                Are you receiving benefits for yourself or are you the
                representative payee for someone else?
            </h3>
            <div>
                <input
                    onChange={(e) =>
                        handleInputChange(e, setActionTypes.recipient)
                    }
                    type="radio"
                    name="benefits"
                    value="self"
                    checked={recipient === "self"}
                />{" "}
                <label>Myself</label>
            </div>
            <div>
                <input
                    onChange={(e) =>
                        handleInputChange(e, setActionTypes.recipient)
                    }
                    type="radio"
                    name="benefits"
                    value="other"
                    checked={recipient === "other"}
                />{" "}
                <label>Someone Else</label>
            </div>
            <div>
                <input
                    onChange={(e) =>
                        handleInputChange(e, setActionTypes.recipient)
                    }
                    type="radio"
                    name="benefits"
                    value="both"
                    checked={recipient === "both"}
                />{" "}
                <label>Both</label>
            </div>
            <div className="text-inputs">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) =>
                            handleInputChange(e, setActionTypes.firstName)
                        }
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) =>
                            handleInputChange(e, setActionTypes.lastName)
                        }
                    />
                </div>
            </div>
        </fieldset>
    );
};

export default UserInfo;
