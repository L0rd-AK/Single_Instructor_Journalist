
const Card = ({card}) => {
    const hour=Math.floor(card.length / 60 / 60);
    const minute=Math.floor(card.length / 60) - (hour * 60);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full" src={card.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-[#FF630E] font-bold text-xl">{card.price}</p>
                    <h2 className="card-title">{card.title}</h2>
                    <p>{card.description}</p>
                    <p className="font-bold">{hour} hours {minute} minutes</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#FF630E] text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;