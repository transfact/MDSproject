import styled from 'styled-components';

const TabBtn = styled.button`
    background-color: white;
    height: 30px;
    line-height: 30px;
    flex: 1;
    border: none;
`;
export default function TabButton() {
    return (
        <>
            <TabBtn>Season 21</TabBtn>
            <TabBtn>총 통계</TabBtn>
        </>
    );
}
