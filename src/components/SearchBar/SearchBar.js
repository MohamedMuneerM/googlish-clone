import React, {useState, useEffect} from 'react';

const items = [
	"apple",
	"orange",
	"pineApple",
	"strawberry",
	"rasberry",
	"avacado",

]

const SearchBar = () => {
	const [searchValue,setSearchValue] = useState("")
	
	const handleInputChange = (event) => {
		setSearchValue(event.target.value)
	}

	const handleClearClick = (event) =>{
		setSearchValue("")
	}

	let isInput = searchValue.length > 0 

	const filteredItems = items.filter(item =>{
		return item.includes(searchValue)
	})

	return (
		
		<div>
			<input type="text" value={searchValue} onChange={handleInputChange} />
			{isInput && <button onClick={handleClearClick}>Clear</button>}
			<ul>
			{filteredItems.map(item =>{
				return <li>{item}</li>
			})}
			</ul>
		</div>
		

		)
}

export default SearchBar

