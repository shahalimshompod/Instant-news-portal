import HomeSecondSecCard from "./HomeSecondSecCard";
import LatestNews from "./LatestNews";

const HomeSecondSec = () => {
    // fake data for frontend..
    const otherData = [
        { id: 4, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" },
        { id: 5, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" },
        { id: 6, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" },
        { id: 7, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" }
    ]
    // fake data for frontend..
    const cardData = [
        { id: 1, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" },
        { id: 2, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" },
        { id: 3, category: "category", heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt. Nulla natus iusto nobis praesentium, nihil distinctio ducimus eligendi mollitia!", name: "KRISTIN STOLLER", date: "Deccember 1, 2024" }
    ]
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-14 mb-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 px-3 lg:px-0">
                    {
                        cardData.map(card => <HomeSecondSecCard key={card.id} card={card}></HomeSecondSecCard>)
                    }
                </div>
                <div>
                    <LatestNews></LatestNews>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 px-3 lg:px-0">
                {
                    otherData.map(card => <HomeSecondSecCard key={card.id} card={card} ></HomeSecondSecCard>)
                }
            </div>
        </>
    );
};

export default HomeSecondSec;