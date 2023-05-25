import { firstLetterCap } from "./firstLetterCap";

describe("formatting", () => {
  it("firstLetterCap capitalizes the first letter in a given string", () => {
    const str = "steve Rogers";
    expect(firstLetterCap(str)).toBe("Steve Rogers");
    expect(firstLetterCap(str)).not.toBe("steve Rogers");
  });
});
