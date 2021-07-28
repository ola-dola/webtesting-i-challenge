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
  })
});
