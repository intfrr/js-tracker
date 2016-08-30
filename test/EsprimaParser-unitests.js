const importAllFrom = require('import-all-from')

const registerHelpers = require('./helpers/registerHelpers')
const unregisterHelpers = require('./helpers/unregisterHelpers')

describe('EsprimaParser tests', () => {
  it('should pass this canary test', () => {
    expect(true).to.be.true
  })

  before(() => {
    global.libDir = '../../../../lib/EsprimaParser'
  })

  after(() => {
    delete global.libDir
  })

  describe('parsers', () => {
    const PARSERS_PATH = `${__dirname}/lib/EsprimaParser-unitests/parsers`
    const EsprimaParser = require('../lib/EsprimaParser')
    const esprimaParserHelpers = require('./lib/EsprimaParser-unitests/helpers')

    before(() => {
      registerHelpers(esprimaParserHelpers)
    })

    beforeEach(() => {
      global.esprimaParser = new EsprimaParser()
    })

    after(() => {
      delete global.esprimaParser
      unregisterHelpers(esprimaParserHelpers)
    })

    importAllFrom(PARSERS_PATH)
  })

  describe('structures', () => {
    const STRUCTURES_PATH = `${__dirname}/lib/EsprimaParser-unitests/structures`

    importAllFrom(STRUCTURES_PATH)
  })

  describe.only('dispatchers', () => {
    const DISPATCHERS_PATH = `${__dirname}/lib/EsprimaParser-unitests/dispatchers`

    before(() => {
      global.importAllFrom = importAllFrom
    })

    after(() => {
      delete global.importAllFrom
    })

    importAllFrom(DISPATCHERS_PATH)
  })

  describe('checkers', () => {
    const CHECKERS_PATH = `${__dirname}/lib/EsprimaParser-unitests/checkers`

    importAllFrom(CHECKERS_PATH)
  })
})
