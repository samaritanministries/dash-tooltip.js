import tooltip from "dash_tooltip/tooltip.js"

describe("Tooltip", () => {
  it("it wired up", () => {
    // const fixture = setFixtures('<span title="tooltip">Hover</span>')
    expect(tooltip()).toEqual("Hello World!")
  })
})
