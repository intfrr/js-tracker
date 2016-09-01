const Collection = require('../../structures/Collection')

module.exports = ({criteria, callee, statusData}) => {
  if (criteria.hasOwnProperty(callee.method) && callee.arguments.length === 0) {
    return Object.assign({type: Collection.EVENT}, statusData)
  }
  return undefined
}