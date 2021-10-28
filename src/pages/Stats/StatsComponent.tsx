import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react'
import { useQuery } from 'react-query';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import FullscreenSpinner from '../../components/FullscreenSpinner';
import { useAxios } from '../../context/AxiosContext';
import { useAuth } from '../../hooks/Auth.hooks';
import './stats.css'
import StatsCharts from './StatsCharts';
const StatsComponent: React.FC = () => {
    const { userData } = useAuth();
    const { authAxios } = useAxios();
    const { data, isFetching } = useQuery(["gameHistories", userData?.user.userId], () => authAxios.get<Records[]>(`GameHistory/All/${userData?.user.userId}`));

    const slides = data?.data.map((item, key) => {
        let dates = item.records.map((item) => {
            return new Date(item.addedDate).getDate() + "/" + new Date(item.addedDate).getMonth()
        })
        var unique = dates.filter((v, i, a) => a.indexOf(v) === i);

        for (let i in dates) {
            item.records[i].addedDate = dates[i]
        }

        for (let x in unique) {
            let ok = true;
            for (let index in item.records) {
                if (unique[x] === item.records[index].addedDate) {
                    if (ok) {
                        item.records[index].addedDate = unique[x];
                        ok = false;
                    }
                    else {
                        item.records[index].addedDate = ""
                    }
                }
            }
        }

        return (
            <IonSlide className="slides" key={key}>
                <StatsCharts
                    chartDataScore={item.records.map((record) => {
                        return {
                            name: record.addedDate,
                            score: record.score
                        }
                    })}
                    chartDataTime={item.records.map((record) => {
                        return {
                            name: record.addedDate,
                            time: record.minutes * 60 + record.seconds
                        }
                    })}
                    title={item.game}
                />
            </IonSlide>
        )
    })

    return (
        <>
            {isFetching ? <FullscreenSpinner /> :
                <IonSlides pager={true} className="slides">
                    {slides}
                </IonSlides>
            }
        </>
    )
}

export default StatsComponent;

interface Records {
    game: string,
    records: GameHistory[]
}

interface GameHistory {
    addedDate: string,
    score: number,
    minutes: number,
    seconds: number,
    gameName: string
}