import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
// import cryptoInfo from '../../data/main/cryptoInfo.json';
import Link from 'next/link';



const MultiCriptoChart = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    // Define your API endpoints
    const APIs = [
        {
            id: 'USDT Last 7 Days',
            url: 'https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=7',
            color: 'rgb(75, 192, 192)',
            author: 'Diatrada Group',
            date: '2025'
        },
        {
            id: 'Bitcoin Last 7 Days',
            url: 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7',
            color: 'rgb(255, 165, 0)',
            author: 'Diatrada Group',
            date: '2025'
        },
        {
            id: 'Ethereum Last 7 Days',
            url: 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7',
            color: 'rgb(147, 51, 234)',
            author: 'Diatrada Group',
            date: '2025'
        }
    ];

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const responses = await Promise.allSettled(
                    APIs.map(api => fetch(api.url))
                );

                const results = await Promise.all(
                    responses.map((response, index) => {
                        if (response.status === 'fulfilled') {
                            if (!response.value.ok) {
                                throw new Error(`API ${APIs[index].id} request failed`);
                            }
                            return response.value.json();
                        }
                        return null;
                    })
                );

                const newData = {};
                const errorMessages = [];

                results.forEach((result, index) => {
                    if (!result) {
                        errorMessages.push(`Failed to fetch ${APIs[index].id} data`);
                        return;
                    }

                    newData[APIs[index].id] = {

                        labels: result.prices.map(entry => 
                            new Date(entry[0]).toLocaleDateString()),
                        datasets: [{
                            label: `${APIs[index].id.toUpperCase()} in (USD)`,
                            data: result.prices.map(entry => entry[1]),
                            borderColor: APIs[index].color,
                            tension: 0.1
                        }]
                    };
                });

                setChartData(newData);
                setErrors(errorMessages);
            } catch (err) {
                setErrors([err.message]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) return <div>Loading charts...</div>;

    return (
        <section className="blog-grid section-padding">
            <div className="container">
                <div className="row mb-80">
                    <div className="col-md-7">
                        <div className="simple-head">
                            <h6 className="sub-head radius mb-10">
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
                        
                        {/* {errors.length > 0 && (
                            <div className="error-message">
                                {errors.map((error, index) => (
                                    <p key={index}>⚠️ {error}</p>
                                ))}
                            </div>
                        )} */}
                        
                        {APIs.map(api => (
                            chartData[api.id] && (
                                <div className="col-lg-4">
                                    <div key={api.id}>
                                        <div className="item box-shadow crv">
                                            {/* <h2>{api.id.toUpperCase()} Price Chart</h2> */}
                                            <div className="img">
                                                <div style={{ height: '400px', width: '100%' }}>
                                                    <Line data={chartData[api.id]} options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: false }}}}/>
                                                </div>
                                                <div className="tags">
                                                    <Link href="">
                                                    <a>{api.id}</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="cont">
                                                <div className="info">
                                                    <div className="author">
                                                        <span>{ api.author }</span>
                                                    </div>
                                                    <div className="date">
                                                        <span className="fw-800 gr-purple-red-text inline">{ api.date }</span>
                                                    </div>
                                                </div>
                                                <div className="title">
                                                    <h5 className="fw-700 fz-18">
                                                        <Link href="">
                                                        <a>{ api.id }</a>
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        ))}
                    
                </div>
            </div>
        </section>
    );
};

/*  return (
        <section className="blog-grid section-padding">
        <div className="container">
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
}; */

export default MultiCriptoChart;