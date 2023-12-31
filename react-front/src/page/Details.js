import styled from 'styled-components';
import StatSummary from '../compo/stats/StatSummary';
import Records from '../compo/stats/Records';
import CsvComponent from '../compo/csv/CsvComponent';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Details() {
    return (
        <FlexDiv>
            <StatSummary></StatSummary>
            <Records></Records>
        </FlexDiv>
    );
}
