import Requirement from './Skill'

/** やりたいこと */
interface Purpose {
  /** やりたいことの内容 */
  description: string
  /** 必要なスキル */
  requirements: Requirement[]
}

export default Purpose

export interface SelectablePurpose extends Purpose {
  /** やりたいこととして選ばれているかどうか */
  selected: boolean
}
