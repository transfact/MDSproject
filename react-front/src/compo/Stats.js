import styled from 'styled-components';
import StatSummary from './stats/StatSummary';
import Records from './stats/Records';
const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
`;

export default function Stats() {
    return (
        <FlexDiv>
            <StatSummary></StatSummary>
            <Records></Records>
        </FlexDiv>
    );
}
