import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  friends: {
    date: {},
  },
};

const loadDataState = () => {
  try {
    return JSON.parse(localStorage.getItem("expenseData")) || initialState;
  } catch (err) {
    console.error("Error loading data state from localStorage:", err);
    return initialState;
  }
};

const saveDataState = (state) => {
  try {
    localStorage.setItem("expenseData", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving data state to localStorage:", err);
  }
};

const generateDate = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const updateFriendData = (state, member, money, where) => {
  const category = where.toLowerCase();
  const moneyValue = parseFloat(money);
  const dateString = generateDate();

  state.friends.date[dateString] =
    (state.friends.date[dateString] || 0) + moneyValue;
  state.friends[member].dateSpend[dateString] =
    (state.friends[member].dateSpend[dateString] || 0) + moneyValue;
  state.friends[member].spends[category] =
    (state.friends[member].spends[category] || 0) + moneyValue;
  state.friends[member].total += moneyValue;
};

export const dataReducer = createSlice({
  name: "dataReducer",
  initialState: loadDataState(),
  reducers: {
    addFriends: (state, action) => {
      const { partners } = action.payload;
      partners.forEach((name) => {
        state.friends[name] = { spends: {}, total: 0, dateSpend: {} };
      });
      saveDataState(state);
    },

    addData: (state, action) => {
      const { member, money, where } = action.payload;
      updateFriendData(state, member, money, where);
      saveDataState(state);
    },

    resetData: (state) => {
      Object.assign(state, initialState);
      localStorage.removeItem("expenseData");
    },
  },
});

export const { addFriends, addData, resetData } = dataReducer.actions;
