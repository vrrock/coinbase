import styled from "styled-components";
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
    labels: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
    ],
    datasets: [
        {
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3773f5',
        borderColor: '#3773f5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3773f5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773f5',
        pointHoverBorderColor: '#3773f5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1900, 2100, 1850, 1921, 1999, 2000, 1772, 1584, 1500, 1782],
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

const BalanceChart = () => {
  return (
      <Wrapper>
        <Line data={data} options={options} width={400}/>
      </Wrapper>

  );
};

export default BalanceChart;


const Wrapper = styled.div``
