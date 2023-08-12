  import React, {useState, useEffect } from 'react';
  import { ResponsiveContainer, PieChart, Pie,Cell } from 'recharts';

  const EventGenresChart = ({ events }) => {
    let [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#006fdd', '#00dd00', '#00dddd', '#dd6f00', '#0000dd'];

      useEffect(() => {
          setData(getData());
      }, [`${events}`]);
      
      const getData = () => {
          data = genres.map(genre => { 
              const filteredEvents = events.filter(event=> event.summary.includes(genre));      
              return {
                name: genre, 
                value: filteredEvents.length
              }
          })
          return data; 
      }
    
      const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
          const RADIAN = Math.PI / 180;
          const radius = outerRadius;
          const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
          const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
          return percent ? (
            <text
              x={x}
              y={y}
              fill="#000000"
              textAnchor={x > cx ? 'start' : 'end'}
              dominantBaseline="central"
            >
              {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
          ) : null;
      };
    
      return (
          <ResponsiveContainer width="99%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
              outerRadius={130} >
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                )
                )
              }
            </Pie>
            </PieChart>
          </ResponsiveContainer>
        );
  }
  
  export default EventGenresChart