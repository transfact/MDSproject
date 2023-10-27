import { useState } from 'react';
import DeckSummary from './vrs/DeckSummary';
import TabBtn from './vrs/decksummary/TabButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const FlexContainer = styled.div`
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f7f7f9;
    border-bottom: 1px #f7f7f9 solid;
`;

const MoreBtn = styled.button`
    background-color: white;
    border: none;
    margin: 0 10px;
    flex: 1;
    height: 30px;
`;
export default function VictoryRateSummary() {
    const [season, setSeason] = useState(0);
    const navigate = useNavigate();
    const DeckList = [1, 2, 3, 4, 5];
    const onToDetails = () => {
        navigate('/details');
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FlexContainer>
                <TabBtn></TabBtn>
            </FlexContainer>
            {DeckList.map((deck, idx) => {
                return <DeckSummary key={idx}></DeckSummary>;
            })}
            <MoreBtn onClick={onToDetails}>더보기</MoreBtn>
        </div>
    );
}
