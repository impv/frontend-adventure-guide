import * as React from 'react'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'

import Skill from '~/types/Skill'
import SkillDetail from '~/types/SkillDetail'

export interface Props {
  /** 必要なスキル一覧 */
  requiredSkills: Skill[]
  /** スキルについての詳細 */
  skillDetails: SkillDetail[]
}

/** スキルグラフ */
export const SkillChart: React.SFC<Props> = ({
  requiredSkills,
  skillDetails
}) => (
  <RadarChart width={500} height={300} data={requiredSkills}>
    <PolarGrid stroke="#fff" />
    <PolarAngleAxis
      dataKey="skill"
      tickFormatter={name => lookupSkillLabel(name, skillDetails)}
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

const lookupSkillLabel = (skillName: string, skillDetails: SkillDetail[]) =>
  skillDetails.filter(d => d.name === skillName).map(d => d.label) || skillName
