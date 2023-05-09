import QCascader from './components/QCascader.vue'

import pkg from '../package.json'
const { version } = pkg

function install(app) {
    app.component(QCascader.name, QCascader)

}

export {
    version,
    QCascader,

    install
}
