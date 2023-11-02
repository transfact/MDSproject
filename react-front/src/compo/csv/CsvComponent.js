import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function CsvComponent() {
    const [data, setData] = useState([]);

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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>코인토스</th>
                        <th>선후공</th>
                        <th>전적</th>
                        <th>점수</th>
                        <th>사용 덱</th>
                        <th>상대 덱</th>
                        <th>비고</th>
                        <th>날짜</th>
                        <th>턴</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row['No']}</td>
                            <td>{row['코인토스']}</td>
                            <td>{row['선후공']}</td>
                            <td>{row['전적']}</td>
                            <td>{row['티어']}</td>
                            <td>{row['사용덱']}</td>
                            <td>{row['상대덱']}</td>
                            <td>{row['비고']}</td>
                            <td>{row['날짜']}</td>
                            <td>{row['턴']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CsvComponent;
