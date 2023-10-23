import MasterImg from '../../imgs/master.png';
import DiamondImg from '../../imgs/diamond.png';
import PlatinumImg from '../../imgs/platinum.png';
import GoldImg from '../../imgs/gold.png';
import SliverImg from '../../imgs/sliver.png';
import BronzeImg from '../../imgs/bronze.png';
import RookieImg from '../../imgs/rookie.png';
import ConstTier from '../../common/ConstTier';
import { styled } from 'styled-components';

const TierImg = styled.img`
    width: 72px;
    max-width: 100%;
`;
const TierSpan = styled.span`
    padding-left: 7px;
`;
const TierContainer = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: white;
`;
const FlexContainer = styled.div`
    display: flex;
`;
const SmallDiv = styled.div`
    font-size: small;
    color: lightgray;
`;
const PointContainer = styled.div`
    flex: 1;
`;
export default function Tier(props) {
    const test = 0;
    switch (test) {
        case ConstTier.MASTER:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={MasterImg} alt="master" />
                        <PointContainer>
                            <TierSpan>마스터 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );
        case ConstTier.DIAMOND:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={DiamondImg} alt="master" />
                        <PointContainer>
                            <TierSpan>다이아몬드 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );
        case ConstTier.PLATINUM:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={PlatinumImg} alt="PlatinumImg" />
                        <PointContainer>
                            <TierSpan>플래티넘 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );

        case ConstTier.GOLD:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={GoldImg} alt="GoldImg" />
                        <PointContainer>
                            <TierSpan>마스터 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );

        case ConstTier.SLIVER:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={SliverImg} alt="SliverImg" />
                        <PointContainer>
                            <TierSpan>마스터 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );

        case ConstTier.BRONZE:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={BronzeImg} alt="BronzeImg" />
                        <PointContainer>
                            <TierSpan>브론즈 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );
        case ConstTier.ROOKIE:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={RookieImg} alt="루키" />
                        <PointContainer>
                            <TierSpan>루키 {props.tierNum} </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );
        default:
            return (
                <TierContainer>
                    <span>솔로랭크</span>
                    <hr />
                    <FlexContainer>
                        <TierImg src={RookieImg} alt="RookieImg" />
                        <PointContainer>
                            <TierSpan>언랭크 </TierSpan>
                        </PointContainer>
                        <PointContainer>
                            <SmallDiv>xx승 xx패</SmallDiv>
                            <SmallDiv>승률 ??%</SmallDiv>
                        </PointContainer>
                    </FlexContainer>
                </TierContainer>
            );
    }
}
