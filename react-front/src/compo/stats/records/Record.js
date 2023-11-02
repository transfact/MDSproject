import styled from 'styled-components';
import ImageManager from '../../../common/ImageManger';
const RecordWrapper = styled.div`
    margin: 1px 5px;
    padding: 2.5px;
    display: flex;
    border-bottom: 1px solid #ccc;
    background-color: ${(props) => (props.$victory == 1 ? '#B3CDFF' : '#FFD1A9')};
`;

const FrameBox = styled.div`
    width: 35px;
    height: 35px;
    position: relative;
`;
const FrameImg = styled.img`
    position: absolute;
    width: 35px;
    height: 35px;
    z-index: 99;
    overflow: hidden;
`;
const ImgBox = styled.img`
    width: 35px;
    height: 35px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); // 육각형 모양
`;

const RecordDiv = styled.div`
    line-height: 35px;
`;

export default function Record({ record }) {
    return (
        <>
            <RecordWrapper $victory={record.victory}>
                <ImgBox src={ImageManager.TierImg.DiamondImg} />
                <FrameBox>
                    <FrameImg src={ImageManager.FrameImg.DefaultFrame} />
                    <ImgBox src={ImageManager.BlueEyes} />
                </FrameBox>
                <RecordDiv style={{ flex: 2 }}>
                    {record.myDeck} {record.coin == 1 ? <span>선</span> : null}
                </RecordDiv>
                <FrameBox>
                    <FrameImg src={ImageManager.FrameImg.DefaultFrame} />
                    <ImgBox src={ImageManager.BlueEyes} />
                </FrameBox>
                <RecordDiv style={{ flex: 2 }}>
                    {record.oppoDeck} {record.coin == 0 ? <span>선</span> : null}
                </RecordDiv>
                {record.victory == 1 ? <RecordDiv style={{ flex: 1 }}>승리</RecordDiv> : <RecordDiv style={{ flex: 1 }}>패배</RecordDiv>}
                <RecordDiv style={{ flex: 1 }}>턴: {record.turn}</RecordDiv>
            </RecordWrapper>
        </>
    );
}
