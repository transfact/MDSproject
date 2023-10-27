import styled from 'styled-components';
import Record from './records/Record';
const FlexContainer = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
`;

export default function Records() {
    const tempArray = [
        {
            victory: 1,
            turn: 5,
            myDeck: '마술사',
            tier: '다이아몬드2',
            oppoDeck: '인페르노이드',
            coin: 1,
        },
        {
            victory: 0,
            turn: 1,
            myDeck: '마술사',
            tier: '다이아몬드2',
            oppoDeck: '첩자',
            coin: 1,
        },
        {
            victory: 1,
            turn: 3,
            myDeck: '참기',
            tier: '다이아몬드2',
            oppoDeck: '크샤트리라',
            coin: 1,
        },
        {
            victory: 0,
            turn: 3,
            myDeck: '참기',
            tier: '다이아몬드2',
            oppoDeck: '마술사',
            coin: 0,
        },

        {
            victory: 1,
            turn: 5,
            myDeck: '마술사',
            tier: '다이아몬드2',
            oppoDeck: '인페르노이드',
            coin: 1,
        },
        {
            victory: 0,
            turn: 1,
            myDeck: '마술사',
            tier: '다이아몬드2',
            oppoDeck: '첩자',
            coin: 1,
        },
        {
            victory: 1,
            turn: 3,
            myDeck: '참기',
            tier: '다이아몬드2',
            oppoDeck: '크샤트리라',
            coin: 1,
        },
        {
            victory: 0,
            turn: 3,
            myDeck: '참기',
            tier: '다이아몬드2',
            oppoDeck: '마술사',
            coin: 0,
        },
    ];
    return (
        <FlexContainer>
            {tempArray.map((record) => {
                return <Record record={record} key={record.myDeck + record.oppoDeck + record.turn} />;
            })}
        </FlexContainer>
    );
}
