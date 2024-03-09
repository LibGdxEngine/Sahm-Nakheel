const Row = ({year, kilos, kiloPrice , offshoots, offshootPrice}) => {
    return (
        <>
            <div className="px-6 py-3 bg-white text-navyBlue  text-center text-xs font-medium ">
                #{year}
            </div>
            <div className="px-6 py-3 bg-white text-darkGreen  text-center text-xs font-extrabold ">
                {kilos} Kilos
            </div>
            <div className="px-6 py-3  bg-white text-navyBlue  text-center text-xs font-medium ">
                {kiloPrice} EGP
            </div>
            <div className="px-6 py-3 bg-white text-darkGreen  text-center text-xs font-extrabold ">
                {offshoots}
            </div>
            <div className="px-6 py-3 bg-white text-navyBlue  text-center text-xs font-medium ">
                {offshootPrice} EGP
            </div>
        </>
    );
};

const Table = () => {
    return (
        <div
            className="w-full border rounded-tr-3xl rounded-tl-3xl bg-lightGray
    grid grid-cols-5 gap-y-0.5 gap-x-15 mt-24"
        >
            <div className="px-6 py-3 text-navyBlue text-center text-xs sm:px-2 font-medium uppercase tracking-wider">
                <span>Year</span> <span className="sm:hidden">Number</span>
            </div>
            <div
                className="px-6 py-3 text-darkGreen  text-center text-xs sm:px-2 font-extrabold uppercase tracking-wider">
                <span>Date</span> <span className="sm:hidden">Produced</span>
            </div>
            <div className="px-6 py-3 text-navyBlue  text-center text-xs sm:px-2 font-medium uppercase tracking-wider">

                <span>Date</span> <span className="sm:hidden">Price</span>
            </div>
            <div
                className="px-6 py-3 text-darkGreen  text-center text-xs sm:px-2 font-extrabold uppercase tracking-wider">

                <span className="sm:hidden">Off shoots </span> <span>produced</span>
            </div>
            <div className="px-6 py-3 text-navyBlue  text-center text-xs sm:px-2 font-medium uppercase tracking-wider">

                <span className="sm:hidden">Off shoots </span> <span>price</span>
            </div>

            <Row year={"4"} kilos={"25"} kiloPrice={"120"} offshoots={"2"} offshootPrice={"1300"}/>
            <Row year={"5"} kilos={"50"} kiloPrice={"120"} offshoots={"2"} offshootPrice={"1300"}/>
            <Row year={"6"} kilos={"75"} kiloPrice={"120"} offshoots={"2"} offshootPrice={"1300"}/>
            <Row year={"7"} kilos={"100"} kiloPrice={"120"} offshoots={"2"} offshootPrice={"1300"}/>
            <Row year={"8"} kilos={"125"} kiloPrice={"120"} offshoots={"2"} offshootPrice={"1300"}/>
        </div>
    );
};

export default Table;