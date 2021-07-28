const enhancer = require("./enhancer.js");
// test away!

describe("repair()", function () {
  const damagedItem = { name: "sword", durability: 32, enhancement: 15 };
  const repairedItem = enhancer.repair(damagedItem);

  it("restores durability to 100", () => {
    expect(repairedItem.durability).toBe(100);
  });

  it("doesn't change/add other properties", () => {
    expect(repairedItem).toEqual({ ...damagedItem, durability: 100 });
  });

  it.todo("throws error if argument is not an object");
  it.todo("throws error if argument is missing required properties");
});

describe("success()", function () {
  const item = { name: "sword", durability: 32, enhancement: 15 };
  const result = enhancer.success(item);

  it("increases enhancement by 1", () => {
    expect(result.enhancement).toBe(16);
  });

  it("doesn't change/add other properties", () => {
    expect(result).toEqual({ ...item, enhancement: 16 });
  });

  it("it doesn't modify enhancement if value is 20", () => {
    const itemX = { ...item, enhancement: 20 };
    const result = enhancer.success(itemX);

    expect(result.enhancement).toBe(20);
  });

  it("enforces maximum enhancement at 20", () => {
    const itemY = { ...item, enhancement: 40 };
    const result = enhancer.success(itemY);

    expect(result.enhancement).toBe(20);
  });

  it.todo("throws error if argument is not an object");
  it.todo("throws error if argument is missing required properties");
});

describe("fail()", function () {
  const item = { name: "sword", durability: 14, enhancement: 19 };
  const result = enhancer.fail(item);

  it("doesn't add new properties", () => {
    expect(result).toEqual({ ...item, durability: 9, enhancement: 18 });
  });

  it("handles enhancement above 16 correctly", () => {
    expect(result.enhancement).toBe(18);
  });

  it("handles enhancement values 16 and below correctly", () => {
    const itemA = { ...item, enhancement: 16 };
    const itemB = { ...item, enhancement: 9 };

    const resultA = enhancer.fail(itemA);
    const resultB = enhancer.fail(itemB);

    expect(resultA.enhancement).toBe(16);
    expect(resultB.enhancement).toBe(9);
  });

  it("handles durability below 15 correctly", () => {
    expect(result.durability).toBe(9);
  });

  it("handles durability values 15 and above correctly", () => {
    // Arrange
    const itemX = { ...item, durability: 15 };
    const itemY = { ...item, durability: 47 };

    // Act
    const resultX = enhancer.fail(itemX);
    const resultY = enhancer.fail(itemY);

    // Assert
    expect(resultX.durability).toBe(5);
    expect(resultY.durability).toBe(37);
  });

  it("keeps durability minimum value at 0", () => {
    const itemX = { ...item, durability: 3 };
    const result = enhancer.fail(itemX);

    expect(result.durability).toBe(0);
  });

  //   it.todo("throws error if argument is not an object");
  //   it.todo("throws error if argument is missing required properties");
});
