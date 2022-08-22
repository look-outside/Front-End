import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface WeatherT {
    [key :number] : any,
    [key :string] : any
}

interface nameT {
    name :string
}

const Map = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API

    const [Data,setData] = useState<WeatherT[]>()
    const weathers : string[] = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기도', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/group?id=1835847,1838519,1835329,1843561,1841811,1835235,1833747,1842616,1841610,1843125,1845106,1845105,1845789,1845788,1841597,1902028,1846265&appid=${apiKey}&lang=kr&units=metric`)
        .then(res => {
            setData(res.data.list)
        })
    }, [])

    return (
        <div>
            <Maps>
                <Img src='/weatherMap2.jpg' alt='map'/>
                {Data && (
                    Data.map((region, i) => (
                        <City key={i} name={region.name}>{weathers[i]} {region.main.temp}</City>
                    ))
                )}
            </Maps>
        </div>
    );
};

export default Map;

const Maps = styled.div`
    margin: 0 auto;
    position: relative;
    text-align: center;
`;

const Img = styled.img`
    width: 80%;
    height: auto;
`;

const City = styled.span<nameT>`
    font-weight: bold;
    position: absolute;
    background-color: skyblue;
    border: 2px solid skyblue;
    border-radius: 5px;
    ${props => {
        if (props.name === 'Seoul') {
            return css`
                top: 6.5em;
                left: 5em;
            `
        }else if (props.name === 'Busan') {
            return css`
                right: 5em;
                bottom: 10em;
            `
        }else if (props.name === 'Jeju-do') {
            return css`
                left: 10em;
                bottom: 2em;
            `
        }else {
            return css`
                left: 5em;
            `
        }
    }}
`;