import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


function Unique() {
    const getArcLabel = (params) => {
        return `${(params.value)}%`;
    };
    return (
        <div className="mx-auto p-4">
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">What Makes Us Different?</h2>
                <div className="flex items-center justify-around">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-xl font-semibold">2,000</p>
                        <p className="">Active Users</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <p className="text-xl font-semibold">50+</p>
                        <p className="">Properties</p>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-xl font-semibold">$2.5M</p>
                        <p className="">Portfolio Value</p>
                    </div>
                </div>
            </div>
            <div className="px-4 vsm:grid vsm:grid-rows-2 vsm:gap-4 md:gap-x-6 vsm:mx-4 md:mx-24 lg:flex">
                <div className="lg:w-[60%]">
                    <h2 className="text-2xl font-semibold">WHO ARE WE?</h2>
                    <p className='text-justify'>
                        UpChange Investment offers a comprehensive perspective on a diverse
                        array of real estate investment opportunities, sourced from various
                        firms. It establishes a streamlined system that enables investors to
                        conveniently evaluate and compare multiple investment options on a
                        single platform. This platform empowers investors to make
                        well-informed decisions when allocating their capital, thereby
                        maximizing their potential returns.
                    </p>
                </div>
                <div className='h-[280px] md:-mt-12 lg:w-[60%] lg:mt-0'>
                    {/* pie chart here */}
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 1, value: 18, label: 'Commercial Properties', color: "#1CD0BB" },
                                    { id: 2, value: 7, label: 'Single Family Properties', color: "#F5F5F5" },
                                    { id: 3, value: 9, label: 'Town Homes Properties', color: "#DFDFDF" },
                                    { id: 4, value: 19, label: 'Rental Properties', color: "#00A9D7" },
                                    { id: 0, value: 47, label: 'Housing Properties', color: "#3A8DDE" },
                                ],
                                innerRadius: 80,
                                outerRadius: 120,
                                paddingAngle: 1,
                                cornerRadius: 0,
                                startAngle: 0,
                                endAngle: 360,
                                arcLabel: getArcLabel,
                                arcLabelRadius: 100,
                                cx: 120,
                                cy: 130,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Unique;
