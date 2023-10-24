import Header from '../compo/Header';
import Stats from '../compo/Stats';
import Summary from '../compo/Summary';
import styled from 'styled-components';
const FlexDiv = styled.div`
    width: 100vw;
    display: flex;
    background-color: #f7f7f9;
`;
export default function Main() {
    return (
        <div>
            <Header></Header>
            <FlexDiv>
                <Summary></Summary>
                <Stats></Stats>
            </FlexDiv>
        </div>
    );
}
