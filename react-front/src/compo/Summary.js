import styled from 'styled-components';
import Tier from './summary/Tier';
import VictoryRateSummary from './summary/VictoryRateSummary';
// 집에서 한거 어디감 ㅋㅋㅋㅋ;

const FlexDiv = styled.div`
    flex: 1;
`;

export default function Summary() {
    return (
        <FlexDiv>
            <Tier />
            <VictoryRateSummary />
        </FlexDiv>
    );
}
