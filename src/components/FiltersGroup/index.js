import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const renderingCat = () => {
    const {categoryOptions, changeCategory, activeCategoryId} = props
    return (
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="categories-list">
          {categoryOptions.map(eachCat => {
            const isActive = eachCat.categoryId === activeCategoryId
            const catClass = isActive
              ? `category-name active-category-name`
              : `category-name`
            const onChangeCat = () => changeCategory(eachCat.categoryId)
            return (
              <li
                className="category-item"
                key={eachCat.categoryId}
                onClick={onChangeCat}
              >
                <p className={catClass}>{eachCat.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const renderingRat = () => {
    const {ratingsList, changeRating, activeRatingId} = props
    return (
      <div>
        <h1 className="rating-heading">Rating</h1>
        <ul className="ratings-list">
          {ratingsList.map(eachRat => {
            const isRatAct = eachRat.ratingId === activeRatingId
            const ratClass = isRatAct ? `and-up active-rating` : `and-up`
            const onChangeRat = () => changeRating(eachRat.ratingId)
            return (
              <li
                className="rating-item"
                key={eachRat.ratingId}
                onClick={onChangeRat}
              >
                <img
                  src={eachRat.imageUrl}
                  alt={`rating ${eachRat.ratingId}`}
                  className="rating-img"
                />
                <p className={ratClass}>& up</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearch = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }
  const {clearFilters} = props
  return (
    <div className="filters-group-container">
      {renderSearch()}
      {renderingCat()}
      {renderingRat()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
