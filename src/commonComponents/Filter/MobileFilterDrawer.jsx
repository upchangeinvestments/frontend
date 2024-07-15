import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Drawer } from "@material-tailwind/react";
import Tooltip from '@mui/material/Tooltip';
import companyData from "../../assets/companyData.json";
import { FaRegQuestionCircle } from "react-icons/fa";

const getTooltipContent = (location) => {
    switch (location) {
        case "West":
            return "California, Oregon, Washington, Nevada, Arizona, Idaho, Montana, Wyoming, Utah, Colorado, New Mexico, Alaska,Hawa";
        case "Central":
            return "Texas, Illinois, Colorado, Missouri ,Iowa, Kansas, Nebraska, South Dakota , North Dakota, Minnesota";
        case "South":
            return "Florida, Georgia, Louisiana, Mississippi, Alabama,South Carolina, North Carolina , Tennessee, Arkansas, Kentucky, Virginia ,West Virginia, Oklahoma";
        case "Midwest":
            return "Ohio, Michigan, Indiana, Wisconsin";
        case "East":
            return "New York, Pennsylvania, Massachusetts, Maine , New Hampshire, Vermont , Rhode Island, Connecticut , New Jersey , Delaware , Maryland";
        default:
            return "";
    }
};

const MobileFilterDrawer = forwardRef(({ open, closeDrawer, data, Index, sendFilteredData }, ref) => {
    const [mngFee, setMngFee] = useState(0);
    const { title, options, inputType } = data || {};
    const [selectedOptions, setSelectedOptions] = useState({});
    const [toolTip, setToolTip] = useState({ open: false, content: "" });

    const ToolTipHandler = (item) => {
        setToolTip(prev => ({
            open: !prev.open,
            content: getTooltipContent(item)
        }));
    };

    var filterType;
    if (title === 'Class Type') filterType = "classType";
    else if (title === "Location") filterType = "locations";
    else if (title === "Investment Range") filterType = "investmentRange";
    else if (title === "Company Age") filterType = "companyAge";
    else if (title === "Investor Type") filterType = "investorType";
    else if (title === "Management Fee") filterType = "managementFee";
    else if (title === "Risk Level") filterType = "riskLevel";

    const [filters, setFilters] = useState({
        classType: [],
        investmentRange: [],
        managementFee: 0,
        companyAge: [],
        riskLevel: [],
        investorType: [],
        locations: [],
    });
    const [checkedValues, setCheckedValues] = useState({
        classType: [],
        investmentRange: "",
        companyAge: [],
        investorType: "",
        riskLevel: [],
        locations: []
    });

    const isChecked = (value) => {
        if (inputType === 'checkbox') {
            return checkedValues[filterType]?.includes(value);
        } else if (inputType === 'radio') {
            return checkedValues[filterType] === value;
        }
        return false;
    };

    const applyFilters = () => {
        let filtered = companyData.filter(item => {
            return (
                (filters.classType.length === 0 || filters.classType.includes(item.classType)) &&
                (filters.riskLevel.length === 0 || filters.riskLevel.includes(item.riskLevel)) &&
                (filters.investmentRange.length === 0 ||
                    item.minInvestment >= parseInt(filters.investmentRange.split('-')[0].replace("$", "").replace("k", "000").replace("M", "000000").replace("+", "")) &&
                    (filters.investmentRange.split('-')[1] ? item.minInvestment <= parseInt(filters.investmentRange.split('-')[1].replace("$", "").replace("k", "000").replace("M", "000000").replace("+", "")) : true)
                ) &&
                (filters.managementFee == 0 || parseFloat(item.feeStructure) <= filters.managementFee) &&
                (filters.investorType.length === 0 || item.investorEligibility.includes(filters.investorType)) &&
                (filters.companyAge.length === 0 || filters.companyAge.some(period => {
                    const [min, max] = period.split('-').map(x => parseInt(x.replace('YRS', '')));
                    return item.age >= min && item.age <= max;
                })) &&
                (filters.locations.length === 0 || filters.locations.some(region => getTooltipContent(region).includes(item.state)))
            );
        });
        sendFilteredData(filtered, filters);
    };

    const updateFilters = (filterType, value, inputType, checked) => {
        if (inputType === "checkbox") {
            if (checked) {
                setFilters(prevFilters => ({
                    ...prevFilters,
                    [filterType]: [...prevFilters[filterType], value]
                }));
                setCheckedValues(prevValues => ({
                    ...prevValues,
                    [filterType]: [...prevValues[filterType], value]
                }));
            } else {
                setFilters(prevFilters => ({
                    ...prevFilters,
                    [filterType]: prevFilters[filterType].filter(item => item !== value)
                }));
                setCheckedValues(prevValues => ({
                    ...prevValues,
                    [filterType]: prevValues[filterType].filter(item => item !== value)
                }));
            }
        } else if (inputType === "radio") {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: value
            }));
            setCheckedValues(prevValues => ({
                ...prevValues,
                [filterType]: value
            }));
        } else {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: value
            }));
        }
    };

    const handleClearFilter = (filterType, Index) => {
        clearFilter(filterType);
        if (Index === 0) {
            setSelectedOptions(current => ({
                ...current,
                [Index]: []
            }))
        } else if (Index !== 4 && Index !== 5) {
            setSelectedOptions(current => ({
                ...current,
                [Index]: []
            }))
        }
    };

    const clearFilter = (filterType) => {
        if (filterType === "managementFee") {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: 0,
            }));
            setMngFee(0);
        } else {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: []
            }));
            setCheckedValues(prevValues => ({
                ...prevValues,
                [filterType]: []
            }));
        }
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const updateMngFeeValue = (event) => {
        setMngFee(event.target.value);
        updateFilters("managementFee", event.target.value, "range", false);
    };

    const handleOptionChange = (filterIndex, optionValue, inputType, checked) => {
        if (inputType === "radio") {
            setSelectedOptions((prevOptions) => ({
                ...prevOptions,
                [filterIndex]: optionValue,
            }));
        } else {
            setSelectedOptions((prevOptions) => {
                const newOptions = { ...prevOptions };
                if (newOptions[filterIndex]) {
                    if (newOptions[filterIndex].includes(optionValue)) {
                        newOptions[filterIndex] = newOptions[filterIndex].filter((value) => value !== optionValue);
                    } else {
                        newOptions[filterIndex] = [...newOptions[filterIndex], optionValue];
                    }
                } else {
                    newOptions[filterIndex] = [optionValue];
                }
                return newOptions;
            });
        }
        updateFilters(filterType, optionValue, inputType, checked);
    };

    const clearAllFilters = () => {
        setFilters({
            classType: [],
            investmentRange: [],
            managementFee: 0,
            companyAge: [],
            locations: [],
            investorType: [],
            riskLevel: [],
        });
        setCheckedValues({
            classType: [],
            investmentRange: "",
            investorType: "",
            companyAge: [],
            locations: [],
            riskLevel: [],
        });
        setMngFee(0);
    };

    useImperativeHandle(ref, () => ({
        clearAllFilters
    }));

    return (
        <Drawer open={open} className="p-4 fixed left-0 top-0 z-50 bg-white/20 backdrop-blur-xl text-xl md:hidden" >
            <div variant="text" className="w-full flex justify-end" color="blue-gray" onClick={() => closeDrawer()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
            <div className="flex items-center justify-center font-['Playfair-Display'] mb-4 uppercase">
                <div className="text-xl text-[#6e30a7] font-bold ">{title}</div>
            </div>
            <div className="flex flex-col gap-3 max-w-xs md:max-w-md font-['Playfair-Display']">
                {options &&
                    options.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <label className="flex flex-row gap-4 w-full items-center uppercase">
                                <input
                                    name={inputType === "radio" ? "radioType" : item}
                                    type={inputType}
                                    value={item}
                                    checked={isChecked(item)}
                                    onChange={(e) => handleOptionChange(index, item, inputType, e.target.checked)}
                                    className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <Tooltip
                                    open={toolTip.open && toolTip.content === getTooltipContent(item)}
                                    onClose={() => setToolTip({ open: false, content: "" })}
                                    title={toolTip.content}
                                >
                                    <div className="text-base">{item}</div>
                                </Tooltip>
                            </label>
                            {Index === 6 && (
                                <div className="flex items-center justify-end w-full">
                                    <FaRegQuestionCircle size={15} onClick={() => ToolTipHandler(item)} />
                                </div>
                            )}
                        </div>

                    ))
                }
                {Index === 3 && <div className="flex flex-col w-full font-['Playfair-Display'] items-start justify-center my-4">
                    <div className="flex items-center">
                        <p className='text-[#6e30a7]'>0</p>
                        <div className="flex-grow mx-4 FilterSection">
                            <input type="range" name="managementFee" min={0} max={3} value={mngFee} onChange={updateMngFeeValue} step="0.2" className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none focus:outline-none"
                                style={{
                                    background: `linear-gradient(to right, #6e30a7 0%, #6e30a7 ${(mngFee / 3) * 100}%, #CBD5E0 ${(mngFee / 3) * 100}%, #CBD5E0 100%)`,
                                }} />
                        </div>
                        <p className='text-[#6e30a7]'>{mngFee == 0 ? 3 : mngFee}%</p>
                    </div>
                </div>}
            </div >
            <div className="mt-4 flex items-center justify-center">
                <button className="bg-[#6e30a7] text-sm text-[#fff] rounded-lg py-2 px-4" onClick={() => closeDrawer()}>Apply Filter</button>
            </div>
            <div className="mt-4 flex items-center justify-center">
                <button className="bg-[#6e30a7] text-sm text-[#fff] rounded-lg py-2 px-4" onClick={() => handleClearFilter(filterType, Index)}>Clear {title} Filter</button>
            </div>
        </Drawer >
    )
})

export default MobileFilterDrawer;
