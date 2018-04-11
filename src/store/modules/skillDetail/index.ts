// Workaround for parcel's JSPackager bug.
// TODO: Remove when https://github.com/parcel-bundler/parcel/pull/1011 is merged
const moduleName = '~/store/modules/skillDetail'

export { default } from './reducer'

export * from './actions'
export * from './state'
