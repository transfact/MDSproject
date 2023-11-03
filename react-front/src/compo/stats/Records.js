import styled from 'styled-components';
import Record from './records/Record';
import Deck from '../../common/Decks';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useNavigate, useLocation } from 'react-router-dom';
import ImageManager from '../../common/ImageManger';
const FlexContainer = styled.div`
    display: flex;
    flex: auto;
    flex-direction: column;
    margin: 10px 10px 0 10px;
    background-color: white;
    border-radius: 5px;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
`;
const MoreBtn = styled.button`
    background-color: white;
    border: none;
    margin: 0 10px;
    padding: 10px;
    flex: 1;
    height: 30px;
    border-top: 1px solid #f7f7f9;
`;
export default function Records() {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);

    const onToDetails = () => {
        navigate('/details?all=true');
    };

    useEffect(() => {
        readCSVFile('recordTest.csv');
    }, []);

    const readCSVFile = (csvFilePath) => {
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (result) => {
                setData(result.data);
            },
        });
    };

    const tmp = data.map((row) => {
        const { No, 코인토스, 선후공, 전적, 티어, 사용덱, 상대덱, 날짜, 턴, 점수 } = row;
        const victory = 전적 === '승' ? 1 : 0;
        const coin = 코인토스 === '앞면' ? 1 : 0;
        const first = 선후공 === '선공' ? 1 : 0;
        const tier = 티어;
        const score = 점수;
        const myDeck = 사용덱;
        const oppoDeck = 상대덱;
        const turn = 턴;
        const date = 날짜;
        let tierSrc;
        switch (tier[0]) {
            case 'r':
                tierSrc = ImageManager.TierImg.RookieImg;
                break;
            case 'b':
                tierSrc = ImageManager.TierImg.BronzeImg;
                break;
            case 's':
                tierSrc = ImageManager.TierImg.SliverImg;
                break;
            case 'g':
                tierSrc = ImageManager.TierImg.GoldImg;
                break;
            case 'p':
                tierSrc = ImageManager.TierImg.PlatinumImg;
                break;
            case 'd':
                tierSrc = ImageManager.TierImg.DiamondImg;
                break;
            case 'm':
                tierSrc = ImageManager.TierImg.MasterImg;
                break;
            default:
                tierSrc = ImageManager.TierImg.RookieImg;
                break;
        }
        const imgSrc = Deck;
        return { victory, turn, myDeck, tierSrc, oppoDeck, coin, first, No, date };
    });
    return (
        <FlexDiv>
            <FlexContainer>
                {location.search
                    ? tmp.map((record) => {
                          return <Record record={record} key={record.No} />;
                      })
                    : tmp.slice(0, 10).map((record) => {
                          return <Record record={record} key={record.No} />;
                      })}
            </FlexContainer>
            <MoreBtn onClick={onToDetails}>더보기</MoreBtn>
        </FlexDiv>
    );
}

// const tempArray = [
//     {
//         victory: 1,
//         turn: 5,
//         myDeck: '마술사',
//         tier: '다이아몬드2',
//         oppoDeck: '인페르노이드',
//         coin: 1,
//     },
//     {
//         victory: 0,
//         turn: 1,
//         myDeck: '마술사',
//         tier: '다이아몬드2',
//         oppoDeck: '첩자',
//         coin: 1,
//         first: 1,
//     },
//     {
//         victory: 1,
//         turn: 3,
//         myDeck: '참기',
//         tier: '다이아몬드2',
//         oppoDeck: '크샤트리라',
//         coin: 1,
//     },
//     {
//         victory: 0,
//         turn: 3,
//         myDeck: '참기',
//         tier: '다이아몬드2',
//         oppoDeck: '마술사',
//         coin: 0,
//     },

//     {
//         victory: 1,
//         turn: 5,
//         myDeck: '마술사',
//         tier: '다이아몬드2',
//         oppoDeck: '인페르노이드',
//         coin: 1,
//     },
//     {
//         victory: 0,
//         turn: 1,
//         myDeck: '마술사',
//         tier: '다이아몬드2',
//         oppoDeck: '첩자',
//         coin: 1,
//     },
//     {
//         victory: 1,
//         turn: 3,
//         myDeck: '참기',
//         tier: '다이아몬드2',
//         oppoDeck: '크샤트리라',
//         coin: 1,
//     },
//     {
//         victory: 0,
//         turn: 3,
//         myDeck: '참기',
//         tier: '다이아몬드2',
//         oppoDeck: '마술사',
//         coin: 0,
//     },
// ];
