import styled from 'styled-components';

const TabBtn = styled.button`
    background-color: white;
`;
export default function TabButton() {
    return (
        <div>
            <TabBtn>Season 21</TabBtn>
            <TabBtn>총 통계</TabBtn>
        </div>
    );
}
