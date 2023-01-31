const categoriesList = [
  "",
  "Rent",
  "Groceries",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Insurance",
  "Phone Bill",
  "Internet",
  "Loan Repayments",
  "Savings",
  "Clothes",
  "Medical Expenses",
  "Gym Membership",
  "Education",
  "Vacation",
  "Shopping",
  "Foods",
  "Income",
  "Invesments",
];

const categories = categoriesList.map((cat) => {
  if (!cat) {
    return { value: "", label: "Choose", disabled: true };
  } else {
    return { value: cat, label: cat, disabled: false };
  }
});
export default categories;
