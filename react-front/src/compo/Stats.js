import styled from 'styled-components';
import StatSummary from './stats/StatSummary';
const FlexDiv = styled.div`
    flex: 4;
`;

export default function Stats() {
    return (
        <FlexDiv>
            <StatSummary></StatSummary>
        </FlexDiv>
    );
}
