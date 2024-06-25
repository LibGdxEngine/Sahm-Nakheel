// components/contractList.js
import React from 'react';
import formatDate from '../../../components/utils/dateFormatter';
import viewIcon from "../../../../public/view_icon.svg";
import Image from "next/image";

const getStatusClass = (status) => {
    switch (status) {
        case 'COMPLETED':
            return 'text-green-500';
        case 'ON_HOLD':
            return 'text-orange-500';
        case 'IN_PROGRESS':
            return 'text-blue-500';
        default:
            return '';
    }
};

const ContractList = ({contracts}) => {
    if (!contracts) return null;

    return (
        <div className="space-y-0">
            {contracts.map((contract) => (
                <div style={{cursor: "pointer"}} key={contract.pkid}
                     className="flex flex-col mx-8 hover:bg-lighterGray hover:opacity-80">
                    <div
                        className="flex flex-row md:flex-row mb-2 mt-3 md:items-center justify-between space-y-0 md:space-y-0">
                        <div className="flex-1 text-center">
                            <div className="text-xs text-midGreen font-normal">Contract #1</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs text-primary font-normal">{contract.date}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs font-normal">{contract.method}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className={`text-xs font-normal ${getStatusClass(contract.amount)}`}>
                                {contract.amount}
                            </div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs text-midGreen font-normal">{contract.all}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs text-midGreen font-normal">{contract.done}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs text-midGreen font-normal">{contract.left}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs font-normal">{contract.status}</div>
                        </div>
                        <div className="flex-1 text-center">
                            <div className="text-xs font-normal">
                                <Image src={viewIcon} alt={`view`} width={17} height={17} className="mx-3"/>
                            </div>
                        </div>
                    </div>
                    <div className={`bg-mildGray w-full h-[0.09px]`}></div>
                </div>
            ))}
        </div>
    );
};

export default ContractList;
