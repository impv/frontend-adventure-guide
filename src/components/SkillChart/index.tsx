import * as React from 'react'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'

import Skill from '~/types/Skill'

export interface Props {
  /** 必要なスキル一覧 */
  skills: Skill[]
}

/** スキルグラフ */
export const SkillChart: React.SFC<Props> = ({ skills }) => (
  <RadarChart width={500} height={300} data={skills}>
    <PolarGrid stroke="#fff" />
    <PolarAngleAxis
      dataKey="skill"
      tickFormatter={x => x}
      tick={{ fill: '#fff', fontSize: '0.8em' }}
    />
    <PolarRadiusAxis
      domain={[0, 5]}
      tickCount={6}
      stroke="rgba(0,0,0,0)"
      tickFormatter={x => x}
    />
    <Radar dataKey="level" stroke="#03D1AB" fill="#03D1AB" fillOpacity={0.5} />
  </RadarChart>
)

export default SkillChart
