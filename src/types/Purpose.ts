/** やりたいこと */
interface Purpose {
  /** やりたいことの内容 */
  description: string
  /** 必要なスキル */
  requirements: Array<{
    /** スキル名 */
    skill: string
    /** 必要なスキルのレベル */
    level: number
  }>
}

export default Purpose

export interface SelectablePurpose extends Purpose {
  /** やりたいこととして選ばれているかどうか */
  selected: boolean
}
