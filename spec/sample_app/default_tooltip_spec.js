import tooltipWithDefaults from "demo_app/default_tooltip"

describe("Demo Default Tooltip", () => {

  it("calls tooltip with defaults", () => {
    tooltipSpy = spyOn(DashTooltip, "tooltip")
    tooltipWithDefaults();
    expect(tooltipSpy).toHaveBeenCalled();
  });

});
