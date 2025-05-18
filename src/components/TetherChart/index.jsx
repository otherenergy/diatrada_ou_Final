import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import cryptoInfo from '../../data/main/cryptoInfo.json';
import Link from 'next/link';

const TetherChart = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=7');
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                const formattedData = {
                    labels: data.prices.map(entry => 
                        new Date(entry[0]).toLocaleDateString()),
                        datasets: [{
                            label: 'Price in (USD)',
                            data: data.prices.map(entry => entry[1]),
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1}]};
    setChartData(formattedData);
} catch (err) {
    setError(err.message);
} finally {
    setLoading(false);
}
};

fetchData();
}, []);

if (loading) return <div>Loading chart...</div>;
if (error) return <div>Error: {error}</div>;

    return (
        <section className="blog-grid section-padding">
    {/* <div className="chart-container">
        <h1>{cryptoInfo.title}</h1>
        <p>{cryptoInfo.description}</p>
    <div style={{ height: '400px', width: '100%' }}>
        <Line data={chartData} options={{responsive: true, maintainAspectRatio: false, scales: {y: {beginAtZero: false}}}}/>
    </div>
    </div> */}


        <div className="container">
            <div className="row mb-100">
                <div className="col-md-7">
                    <div className="simple-head">
                        <h6 className="sub-head radius mb-20">
                            <span className="fz-12 ls2 text-u">Cripto News</span>
                        </h6>
                        <div>
                            <h2 className="fw-800 gr-purple-red-text inline">Blockchain Latest Prices</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 justify-content-end valign">
                    <div className="s-title valign ml-auto">
                        <h6>
                            <a href="">View all Prices Live</a>
                            <i className="icon fz-20 pe-7s-angle-right"></i>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                <div className="col-lg-4">
                    <div className="item box-shadow crv">
                        <div className="img">
                            <div style={{ height: '400px', width: '100%' }}>
                                <Line data={chartData}options={{responsive: true,maintainAspectRatio: false,scales: {y: {beginAtZero: false}}}}/>
                            </div>
                            <div className="tags">
                                <Link href="">
                                <a>{cryptoInfo.title}</a>
                                </Link>
                            </div>
                        </div>
                        <div className="cont">
                        <div className="info">
                            <div className="author">
                                <span>{ cryptoInfo.author }</span>
                            </div>
                            <div className="date">
                                <span className="fw-800 gr-purple-red-text inline">{ cryptoInfo.date }</span>
                            </div>
                        </div>
                        <div className="title">
                            <h5 className="fw-700 fz-18">
                                <Link href="">
                                <a>{ cryptoInfo.title }</a>
                                </Link>
                            </h5>
                        </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    </section>
    );
};

export default TetherChart;