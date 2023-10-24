import styled from 'styled-components';
import GraphManager from '../../common/GraphManager';
import { Charts } from '../../common/GraphManager';
const FlexContainer = styled.div`
    display: flex;
    margin: 10px;
    background-color: white;
    border-bottom: 1px #f7f7f9 solid;
`;
const NormalDiv = styled.div`
    margin: 7px;
    flex: 1;
`;
const FlexDiv = styled.div`
    display: flex;
`;
const SmallDiv = styled.div`
    margin: 5px;
    font-size: small;
    color: gray;
`;
const RateDiv = styled(NormalDiv)`
    margin: 0 7px;
    line-height: 75px;
`;
export default function StatSummary() {
    return (
        <FlexContainer>
            <NormalDiv>
                <SmallDiv>최근 승률</SmallDiv>
                <FlexDiv>
                    <GraphManager graph={Charts.PieChart} size={{ width: '75px', height: '75px', flex: 1 }} />
                    <RateDiv>XX승 xx패</RateDiv>
                </FlexDiv>
            </NormalDiv>
            <NormalDiv>
                <SmallDiv>코인 확률</SmallDiv>
                <GraphManager graph={Charts.DoughnutChart} size={{ width: '75px', height: '75px', flex: 1 }} />
            </NormalDiv>
            <NormalDiv>
                <SmallDiv>시즌 승률</SmallDiv>
                <GraphManager graph={Charts.PieChart} size={{ width: '75px', height: '75px', flex: 1 }} />
            </NormalDiv>
            <NormalDiv>
                <SmallDiv>코인 확률</SmallDiv>
                <GraphManager graph={Charts.DoughnutChart} size={{ width: '75px', height: '75px', flex: 1 }} />
            </NormalDiv>
        </FlexContainer>
    );
}
