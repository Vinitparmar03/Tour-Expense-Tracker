function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lightnessIncrement = 100 / 7;

export const getUserColors = (user) => {
  const userBackgroundColors = [];
  user.forEach((category, index) => {
    const randomInteger = getRandomInteger(2, 360);
    const lightness = 40 + lightnessIncrement * index;
    const color = `hsl(${randomInteger}, 70%, ${lightness}%)`;
    userBackgroundColors.push(color);
  });

  return userBackgroundColors;
};

export const getDateColors = (date) => {
  const dateBackgroundColors = [];
  date.forEach((date, index) => {
    const randomInteger = getRandomInteger(2, 80);
    const lightness = 40 + lightnessIncrement * index;
    const color = `hsl(${randomInteger * 2}, 100%, ${lightness}%)`;
    dateBackgroundColors.push(color);
  });

  return dateBackgroundColors;
};

export const getCategoriesColors = (categories) => {
  const categoriesBackgroundColors = [];
  categories.forEach((category, index) => {
    const randomInteger = getRandomInteger(2, 100);
    const lightness = 40 + lightnessIncrement * index;
    const color = `hsl(${randomInteger * 2}, 20%, ${lightness}%)`;
    categoriesBackgroundColors.push(color);
  });

  return categoriesBackgroundColors;
};
