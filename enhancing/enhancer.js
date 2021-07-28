module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancement = item.enhancement < 20 ? item.enhancement + 1 : 20;

  return {
    ...item,
    enhancement,
  };
}

function fail(item) {
  const durability =
    item.durability < 15 ? item.durability - 5 : item.durability - 10;

  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return { ...item, enhancement, durability: durability < 0 ? 0 : durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const name =
    item.enhancement > 0 ? `[+${item.enhancement}] ${item.name}` : item.name;
  return { ...item, name };
}
