import QCascader from './components/QCascader'

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
