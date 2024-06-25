import {useState} from "react";
import Image from "next/image";
import notification from '../../../../public/images/notification.svg';
import closeIcon from '../../../../public/images/closeIcon.svg';
import notificationsIcon from "../../../../public/images/Group 8.svg";
import {DateRangePicker} from "@nextui-org/date-picker";
import {DateRangePickerDay} from "@mui/lab";

function FilterOption({text, isChecked = false, handleClick}) {
    return <div onClick={handleClick} style={{cursor: "pointer"}}
                className={`flex items-center justify-center bg-mGray py-1 px-2 rounded-full`}>
        <div className={`w-2 h-2 rounded-full ${isChecked ? "bg-lightGreen" : "bg-white"} me-2`}/>
        <div className={`line-clamp-1 text-xs ${isChecked ? "text-lightGreen" : ""}`}>
            {text}
        </div>
    </div>;
}

const FilterMenu = ({onFilterChange}) => {
    const [optionType, setOptionType] = useState({
        0: false,
        1: false,
        2: false,
    });

    return (
        <div className="relative flex items-center justify-center">

            <div className="w-96 absolute top-12 bg-white rounded-md shadow-lg">
                <div className="w-full flex flex-col items-start justify-start px-8 py-6">

                    <div className={`text-sm font-bold mt-2`}>
                        Filter Options
                    </div>
                    <div className={`h-[0.5px] w-full bg-darkGreen mt-2`}/>
                    <div
                        className={`w-full py-1 flex flex-col items-start justify-between text-xs text-lightBlack mt-4`}>
                        <div className={`text-navyBlue font-bold text-xs`}>
                            Status
                        </div>
                        <div className={`w-full flex items-center justify-between mt-1`}>
                            <FilterOption text={`Completed`} isChecked={optionType[0]}
                                          handleClick={() => setOptionType((prevState) => {
                                              return {...prevState, 0: !prevState[0]}
                                          })}/>
                            <FilterOption text={`On Hold`} isChecked={optionType[1]}
                                          handleClick={() => setOptionType((prevState) => {
                                              return {...prevState, 1: !prevState[1]}
                                          })}/>
                            <FilterOption text={`In Progress`} isChecked={optionType[2]}
                                          handleClick={() => setOptionType((prevState) => {
                                              return {...prevState, 2: !prevState[2]}
                                          })}/>
                        </div>
                        <div className={`text-navyBlue font-bold text-xs mt-4`}>
                            Date
                        </div>
                        <div className={`w-full flex items-center justify-between mt-4`}>
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">

                            </div>
                        </div>
                        <div className={`w-full flex items-center justify-start`}>

                            <div
                                onClick={() => {
                                    setOptionType({
                                        0: false,
                                        1: false,
                                        2: false,
                                    });
                                    onFilterChange({
                                        0: false,
                                        1: false,
                                        2: false,
                                    });
                                }}
                                style={{cursor: "pointer"}}
                                className="w-fit text-dark me-2 flex rounded-full bg-mGray items-center justify-between px-10 lg:px-6 py-1.5">
                                Reset
                            </div>

                            <div
                                onClick={() => onFilterChange(optionType)}
                                style={{cursor: "pointer"}}
                                className="w-fit text-white  flex rounded-full bg-dark items-center justify-between px-10 lg:px-6 py-1.5">
                                Apply
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FilterMenu;
