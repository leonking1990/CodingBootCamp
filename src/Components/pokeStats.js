import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';



const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -87%)',
  lineHeight: '24px',
};
const label = { position: 'outsideStart', fill: 'black' }
export default class PokeStats extends PureComponent {

  render() {
    //console.log(this.props.hp)
    const data = [
        {
          name: 'HP',
          uv: this.props.hp,
          pv: 2400,
          fill: 'Violet',
        },
        {
          name: 'Attack',
          uv: this.props.attack,
          pv: 4567,
          fill: 'red',
        },
        {
          name: 'Defense',
          uv: this.props.defense,
          pv: 1398,
          fill: 'blue',
        },
        {
          name: 'Special Attack',
          uv: this.props.sAttack,
          pv: 9800,
          fill: '#fe6700',
        },
        {
          name: 'Special Defense',
          uv: this.props.sDefense,
          pv: 3908,
          fill: 'green',
        },
        {
          name: 'Speed',
          uv: this.props.speed,
          pv: 4800,
          fill: 'purple',
        },
        
      ];
    return (
      <ResponsiveContainer width={600} aspect={2}>
        <RadialBarChart margin={10} innerRadius="90%" outerRadius='1' barSize={10} data={data} startAngle={180} endAngle={0}>
          <PolarAngleAxis type="number" domain={[0, 255]} angleAxisId={0} tick={false}/>
          <PolarAngleAxis type="number" domain={[0, 180]} angleAxisId={1} tick={false}/>
          <PolarAngleAxis type="number" domain={[0, 230]} angleAxisId={2} tick={false}/>
          <PolarAngleAxis type="number" domain={[0, 180]} angleAxisId={3} tick={false}/>
          <PolarAngleAxis type="number" domain={[0, 230]} angleAxisId={4} tick={false}/>
          <PolarAngleAxis type="number" domain={[0, 180]} angleAxisId={5} tick={false}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={0} data={[data[0]]}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={1} data={[data[1]]}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={2} data={[data[2]]}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={3} data={[data[3]]}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={4} data={[data[4]]}/>
          <RadialBar minAngle={15}  background clockWise dataKey="uv" angleAxisId={0} data={[data[5]]}/>
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
