import React from 'react'
import { Chart, Geom, Axis, Tooltip } from 'bizcharts'

// 图标 style
const styles = {
  padding: '0 0 20px 20px',
  position: 'relative',
  overflow: 'hidden'
}
const MarketChart = props => {
  const data = [
    {
      year: '1951 年',
      sales: 38
    },
    {
      year: '1952 年',
      sales: 52
    },
    {
      year: '1956 年',
      sales: 61
    },
    {
      year: '1957 年',
      sales: 145
    },
    {
      year: '1958 年',
      sales: 48
    },
    {
      year: '1959 年',
      sales: 38
    },
    {
      year: '1960 年',
      sales: 38
    },
    {
      year: '1962 年',
      sales: 38
    }
  ]
  const cols = {
    sales: {
      tickInterval: 20
    }
  }
  return (
    <div style={styles}>
      <div style={{ marginBottom: 15 }}>
        <h6 style={{ fontSize: 14, marginBottom: 0 }}>{props.title}</h6>
      </div>
      <Chart padding='auto' height={295} data={data} scale={cols} forceFit>
        <Axis name='year' />
        <Axis name='sales' />
        <Tooltip
          crosshairs={{
            type: 'y'
          }}
        />
        <Geom type='interval' size={[40, 50]} position='year*sales' />
      </Chart>
    </div>
  )
}
export default MarketChart
