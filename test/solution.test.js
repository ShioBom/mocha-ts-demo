import { Kata } from "../dist/solution";
let assert = require("chai").assert;

function testing(actual, expected) {
  assert.equal(actual, expected);
}
describe("revrot", function() {
  it("str:1234,size：0", function() {
    testing(Kata.revrot("1234", 0), "");
  });
  it("str:'',size：0", function() {
    testing(Kata.revrot("", 0), "");
  });
  it("str:'1234',size：5", function() {
    testing(Kata.revrot("1234", 5), "");
  });
  it("str:'733049910872815764',size：5", function() {
    var s = "733049910872815764";
    testing(Kata.revrot(s, 5), "330479108928157");
  });
});
describe("Roman Numerals Decoder", function() {
  it("tests", () => {
    var actual = Kata.solution("X");
    var expected = 10;
    testing(actual, expected);
  });
});
