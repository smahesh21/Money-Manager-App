import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {title, amount, type, id} = eachTransaction
  const onDelete = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transaction-list">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">RS {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        type="button"
        testid="delete"
        onClick={onDelete}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
