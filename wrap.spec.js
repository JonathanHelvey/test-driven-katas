const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("short string", () => {
    expect(wrap("WORD", 5)).to.equal("WORD");
  });
});
