import {Line} from '@ant-design/plots';

import {format_ts} from '../utils';

export default function TopStarPlot({data}) {
    let points=[];
    let timepoints={};

    data.topstars.forEach((topstar) => {
        topstar.submissions.forEach((sub) => {
            timepoints[sub.timestamp_ms]=true;
        });
    });
    timepoints=[
        ...Object.keys(timepoints).map((x) => +x),
        data.time_range[0]*1000,
        data.time_range[1]*1000,
        Infinity,
    ].sort();

    data.topstars.forEach((topstar, idx) => {
        let tot_score=0;
        let time_idx=0;

        topstar.submissions.forEach((sub) => {
            for(; timepoints[time_idx]<sub.timestamp_ms; time_idx++) {
                points.push({
                    timestamp_ms: timepoints[time_idx],
                    score: tot_score,
                    idx0: ''+idx,
                });
            }
            tot_score+=sub.gained_score;
        });
        for(; time_idx<timepoints.length-1; time_idx++) {
            points.push({
                timestamp_ms: timepoints[time_idx],
                score: tot_score,
                idx0: ''+idx,
            });
        }
    });

    //console.log('! render chart', data, timepoints.map((x)=>new Date(x)), points);

    return (
        <Line
            height={350}
            data={points}
            xField="timestamp_ms" yField="score" seriesField="idx0"
            stepType="hv"
            legend={{
                layout: 'horizontal',
                position: 'top',
            }}
            meta={{
                idx0: {
                    formatter: (x) => (data.topstars[x] || {nickname: '--'}).nickname,
                },
                timestamp_ms: {
                    type: 'linear',
                    minLimit: data.time_range[0]*1000,
                    maxLimit: data.time_range[1]*1000,
                    formatter: (x) => format_ts(x/1000),
                }
            }}
        />
    );
}