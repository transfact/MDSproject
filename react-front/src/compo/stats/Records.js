import styled from 'styled-components';
import Record from './records/Record';

import Deck from '../../common/Decks';
import { useNavigate } from 'react-router-dom';
const FlexContainer = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    margin: 10px 10px 0 10px;
    background-color: white;
    border-radius: 5px;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
const MoreBtn = styled.button`
    background-color: white;
    border: none;
    margin: 0 10px;
    padding: 10px;
    flex: 1;
    height: 30px;
    border-top: 1px solid #f7f7f9;
`;
export default function Records() {
    const navigate = useNavigate();
    const onToDetails = () => {
        navigate('/details');
    };
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
        <FlexDiv>
            <FlexContainer>
                {tempArray.map((record) => {
                    return <Record record={record} key={record.myDeck + record.oppoDeck + record.turn} />;
                })}
            </FlexContainer>
            <MoreBtn onClick={onToDetails}>더보기</MoreBtn>
        </FlexDiv>
    );
}
