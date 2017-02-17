module.exports = {
  closed_accounts: [
    {
      name: "Checking",
      type: "Checking",
      balance: 0,
      note: "String"
    }
  ],
  accounts: [
    {
      name: "Checking",
      type: "checking",
      balance: 100000,
      note: "String"
    },
    {
      name: "Credit Card",
      type: "credit card",
      balance: -100,
      note: "String"
    }
  ],
  transactions: [
    {
      account: "Checking",
      date: Date.now,
      payee: "Dominos",
      category: "Food",
      memo: "twas good",
      outflow: 30.05,
      inflow: null,
      cleared: true
    }
  ],
  categories: [
    {
      master_category: "Monthly Bills",
      sub_categories: [
        {
          name: "Rent",
          budgeted_amount: 500
        }
      ]
    }
  ]
}
