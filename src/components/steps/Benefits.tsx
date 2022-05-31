import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setBenefits } from "../../features/newUser/newUser-slice";
import { Outlet } from "react-router-dom";
const benefitOptions = [
    {
        title: "Free Money",
        description: "Get free money",
        icon: "💰",
        color: "green",
        id: "1",
    },
    {
        title: "Free Stuff",
        description: "Get free stuff",
        icon: "🎁",
        color: "blue",
        id: "2",
    },
    {
        title: "Free Burger",
        description: "Get free burger",
        icon: "🍔",
        color: "red",
        id: "3",
    },
    {
        title: "Free Pizza",
        description: "Get free pizza",
        icon: "🍕",
        color: "yellow",
        id: "4",
    },
];
const MAX_NUMBER_OF_BENEFITS = 3;
const Benefits = () => {
    const benefits = useAppSelector((state) => state.newUser.benefits);
    const user = useAppSelector((state) => state.newUser);
    const dispatch = useAppDispatch();
    const handleSelectedBenefits = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            //if checked add to benefits
            dispatch(setBenefits([...benefits, e.target.value]));
        } else {
            //if unchecked remove from benefits
            dispatch(setBenefits(benefits.filter((b) => b !== e.target.value)));
        }
    };
    return (
        <div>
            <fieldset>
                <legend>Benefits</legend>
                {benefitOptions.map((benefit) => (
                    <>
                        <input
                            type={"checkbox"}
                            key={benefit.id}
                            value={benefit.id}
                            onChange={handleSelectedBenefits}
                            disabled={
                                !benefits.includes(benefit.id) &&
                                benefits.length >= MAX_NUMBER_OF_BENEFITS
                            }
                            checked={benefits.includes(benefit.id)}
                        />
                        <label>
                            {benefit.title} {benefit.icon}
                        </label>
                    </>
                ))}
                {JSON.stringify(user)}
                <Outlet />
            </fieldset>
        </div>
    );
};

export default Benefits;
