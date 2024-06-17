import Image from 'next/image';

const ArticleCard = ({image,title, text, date, onClick}) => {
    return (
        <div onClick={()=>{
            onClick()
        }} className=" bg-gradient-to-t from-white/50 to-white/100  rounded-lg shadow-lg max-w-sm mx-auto">
            <div className=" rounded-lg overflow-hidden">
                <Image src={image} alt="Blog post" width={400} height={250} className="w-full h-fit object-cover" />
            </div>
            <div className=" px-6 pt-1 pb-4 ">
                <h2 className="text-2xl font-bold mb-2">New semaphore puzzle lights up at Adobe HQ</h2>
                <p className="text-darkGreen mb-4">A new puzzle is transmitting on the Adobe San Jose Semaphore that is visible...</p>
                <div className="flex justify-between items-center">
                    <p className="text-lightGreen">05-11-2023</p>
                    <div style={{cursor:"pointer"}} className="w-40 text-center shadow bg-white text-darkGreen text-xl py-2 px-4 rounded-full">View</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;