import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    inputTitle: '',
    inputAmount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state
    const updatedTransactionList = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionsList: updatedTransactionList,
    })
  }

  onAddingTransaction = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, optionId} = this.state

    const optionType = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    console.log(optionType)
    const newTransaction = {
      id: v4(),
      title: inputTitle,
      amount: parseInt(inputAmount),
      type: optionType.displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      inputTitle: '',
      inputAmount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmount: event.target.value})
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {transactionsList, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="money-manager-container">
            <h1 className="name">Hi,Richard</h1>
            <p className="description">
              Welcome back to your
              <span className="span-element">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="form-transaction-container">
            <div className="form-container">
              <h1 className="main-heading">Add Transaction</h1>
              <form onSubmit={this.onAddingTransaction}>
                <label className="label-element" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  className="input-element"
                  id="title"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
                <br />
                <label htmlFor="amount" className="label-element">
                  Amount
                </label>
                <br />
                <input
                  type="text"
                  id="amount"
                  className="input-element"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
                <br />
                <label htmlFor="select" className="label-element">
                  TYPE
                </label>
                <br />
                <select
                  id="select"
                  value={optionId}
                  onChange={this.onChangeOption}
                  className="select-element"
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="main-heading">History</h1>
              <div className="history-transaction-list">
                <hr className="separator" />
                <div className="transaction-header">
                  <p className="header-text">Title</p>
                  <p className="header-text">Amount</p>
                  <p className="header-text">Type</p>
                </div>
                <hr className="separator" />
                <ul className="transactions-list">
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      eachTransaction={eachTransaction}
                      key={eachTransaction.id}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
