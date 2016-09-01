const proxyquire = require('proxyquire')

describe('callManiArg2Object checker tests', () => {
  const criteria = {}
  const caller = {}
  const callee = 'callee'
  const statusData = {execute: caller}
  let checkerStub, checker

  before(() => {
    checkerStub = sandbox.stub().returns('resultFromChecker')
    checker = proxyquire(`../${libDir}/checkers/jQuery/Call/maniArg2Object`, {
      './criteria': criteria,
      '../../../helpers/callManiArg2ObjectChecker': checkerStub
    })
  })

  it('should call callManiArg2ObjectChecker with an object containing proper criteria, callee and statusData (execute -> caller) then return', () => {
    const result = checker({caller, callee})

    expect(checkerStub.calledOnce).to.be.true
    expect(
      checkerStub
        .calledWithExactly({criteria, callee, statusData})
    ).to.be.true
    expect(result).to.be.eql('resultFromChecker')
  })
})
