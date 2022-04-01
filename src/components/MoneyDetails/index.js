import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-container">
      <div className="money-details-containerr box-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-styling"
          alt="balance"
        />
        <div className="money-details">
          <p className="money">Your Balance</p>
          <p className="rupees" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-details-containerr box-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          className="image-styling"
          alt="income"
        />
        <div className="money-details">
          <p className="money">Your Income</p>
          <p className="rupees" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-details-containerr box-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image-styling"
          alt="expenses"
        />
        <div className="money-details">
          <p className="money">Your Expenses</p>
          <p className="rupees" testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
