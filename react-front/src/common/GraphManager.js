import { PieChart } from 'react-minimal-pie-chart';

export default function GraphManager(props) {
    const { width, height, flex } = props.size;
    switch (props.graph) {
        //파이 그래프
        case 0:
            return (
                <PieChart
                    style={{ width: width, height: height }}
                    data={[
                        { title: 'Win', value: 20, color: '#2F5EC0' },
                        { title: 'Lose', value: 10, color: '#E84057' },
                    ]}
                    label={({ dataEntry }) => {
                        return dataEntry.title;
                    }}
                />
            );
        default:
            //도넛 그래프
            return (
                <PieChart
                    style={{ width: width, height: height }}
                    data={[{ title: 'CoinWin', value: 60, color: '#F6CB44' }]}
                    reveal={60}
                    lineWidth={20}
                    background="#f3f3f3"
                    lengthAngle={360}
                    rounded
                    animate
                    label={({ dataEntry }) => {
                        return dataEntry.value + '%';
                    }}
                    labelPosition={0}
                />
            );
    }
}
const Charts = {
    PieChart: 0,
    DoughnutChart: 1,
};
export { Charts };
