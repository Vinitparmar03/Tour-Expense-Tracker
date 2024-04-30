// dataProcessor.js

export function processData(friends) {
  const user = Object.keys(friends).filter((key) => key !== "date");
  const spend = Object.values(friends)
    .filter((friend) => !friend.hasOwnProperty("date"))
    .map((friend) => friend.total)
    .filter((total) => typeof total === "number");

  const uniqueCategories = new Set();

  Object.values(friends).forEach((friend) => {
    if (friend.hasOwnProperty("spends")) {
      Object.keys(friend.spends).forEach((where) => {
        uniqueCategories.add(where);
      });
    }
  });

  const categories = Array.from(uniqueCategories);

  const totalByCategory = {};

  Object.values(friends).forEach((friend) => {
    if (friend.hasOwnProperty("spends")) {
      Object.entries(friend.spends).forEach(([where, amount]) => {
        if (!totalByCategory[where]) {
          totalByCategory[where] = 0;
        }
        totalByCategory[where] += amount;
      });
    }
  });

  const totalValues = categories.map(
    (category) => totalByCategory[category] || 0
  );

  const categoriesSpend = totalValues;

  const date = Object.keys(friends.date);
  const dateVal = date.map((date) => friends.date[date]);

  return {
    user,
    spend,
    categories,
    categoriesSpend,
    date,
    dateVal,
  };
}
