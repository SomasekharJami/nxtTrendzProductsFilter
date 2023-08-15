import './index.css'

const Pagination = props => {
  const {gettingPageSlice, details, activePageId} = props
  const onClicking = () => gettingPageSlice(details)
  const isActive = details === activePageId
  const pageClass = isActive ? 'active' : 'not-active'
  return (
    <li className="pageNoCon">
      <button type="button" className={pageClass} onClick={onClicking}>
        {details}
      </button>
    </li>
  )
}

export default Pagination
