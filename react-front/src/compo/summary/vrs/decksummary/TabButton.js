import styled from 'styled-components';

const TabBtn = styled.button`
    background-color: white;
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
