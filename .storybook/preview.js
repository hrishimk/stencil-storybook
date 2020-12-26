import {
  defineCustomElements
} from '../dist/custom-elements/index.js'

defineCustomElements()

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}