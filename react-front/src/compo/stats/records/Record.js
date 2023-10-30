import styled from 'styled-components';
import ImageManager from '../../../common/ImageManger';

const RecordWrapper = styled.div`
    margin: 1px 5px;
    padding: 2.5px;
    display: flex;
    border-bottom: 1px solid #ccc;
    background-color: ${(props) => (props.$victory == 1 ? '#B3CDFF' : '#FFD1A9')};
`;
const ImgBox = styled.img`
    width: 35px;
    height: 35px;
`;

const RecordDiv = styled.div`
    line-height: 35px;
`;

export default function Record({ record }) {
    return (
        <>
            <RecordWrapper $victory={record.victory}>
                <ImgBox src={ImageManager.TierImg.DiamondImg} />
                <ImgBox src={ImageManager.BlueEyes} />
                <RecordDiv style={{ flex: 2 }}>
                    {record.myDeck} {record.coin == 1 ? <span>선</span> : null}
                </RecordDiv>
                <ImgBox src={ImageManager.BlueEyes} />
                <RecordDiv style={{ flex: 2 }}>
                    {record.oppoDeck} {record.coin == 0 ? <span>선</span> : null}
                </RecordDiv>
                {record.victory == 1 ? <RecordDiv style={{ flex: 1 }}>승리</RecordDiv> : <RecordDiv style={{ flex: 1 }}>패배</RecordDiv>}
                <RecordDiv style={{ flex: 1 }}>턴: {record.turn}</RecordDiv>
            </RecordWrapper>
        </>
    );
}
