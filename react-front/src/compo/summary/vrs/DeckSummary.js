import styled from 'styled-components';
import ImageManager from '../../../common/ImageManger';

const FlexContainer = styled.div`
    display: flex;
    padding: 10px;
    background-color: white;
    margin: 0 10px;
    border-bottom: 1px #f7f7f9 solid;
`;
const FlexDiv = styled.div`
    flex: 1;
    line-height: 35pt;
    padding-left: 3px;
`;
const SmallDiv = styled.div`
    font-size: small;
    color: lightgray;
    line-height: 16pt;
`;
const DeckImg = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
`;

export default function DeckSummary() {
    return (
        <>
            <FlexContainer>
                {/* 실제는 props값을 참조하겠죠. */}

                <DeckImg src={ImageManager.BlueEyes} />
                <FlexDiv>푸른 눈</FlexDiv>
                <FlexDiv>
                    <SmallDiv>선공횟수</SmallDiv>
                    <SmallDiv>Y회</SmallDiv>
                </FlexDiv>
                <FlexDiv>
                    <SmallDiv>XX승 XX패</SmallDiv>
                    <SmallDiv>승률 ??%</SmallDiv>
                </FlexDiv>
            </FlexContainer>
        </>
    );
}
