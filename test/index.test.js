import Package from "../src/index";

describe("Start", () => {
    it("First import right", () => {
        expect(typeof Package).toBe("function");
    });

    it("Launched", () => {
        const instance = Package();
    });
});
