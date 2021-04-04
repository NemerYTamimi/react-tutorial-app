import Card from './Card';

function CardList({ robots }) {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card
                        key={i}
                        src={robots[i].src}
                        location={robots[i].location}
                        name={robots[i].name}
                        snap={robots[i].snap}
                    />
                })
            }
        </div>
    )
}
export default CardList;