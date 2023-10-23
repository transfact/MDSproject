import DeckSummary from './vrs/DeckSummary';

export default function VictoryRateSummary() {
    const DeckList = [1, 2, 3, 4, 5];
    return (
        <div>
            {DeckList.map((deck, idx) => {
                return <DeckSummary key={idx}></DeckSummary>;
            })}
        </div>
    );
}
