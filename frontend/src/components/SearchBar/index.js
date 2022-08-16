import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
    const history = useHistory()
    const [keyword, setKeyword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        history.push(`/search?q=${keyword}`)
        console.log(`/search?q=${keyword}`, ".............inside search bar.............")
        setKeyword('')
    }

    return (
        <div id='searchbar'>
            <form onSubmit={onSubmit} className='search-div'>
                <div className='search-input-bar'>
                    <input
                        type='text'
                        value={keyword}
                        placeholder='Search'
                        onChange={e => setKeyword(e.target.value)}
                        className='searchbar-input'
                    />
                </div>
                <button className='search-btn'>
                    <i className="fa-solid fa-magnifying-glass fa-large fa fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar