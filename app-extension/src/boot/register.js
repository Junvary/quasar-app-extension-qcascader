import { boot } from 'quasar/wrappers'
//import VuePlugin from 'quasar-ui-qcascader'
import * as VuePlugin from '@junvary/quasar-ui-qcascader/src/vue-plugin'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
