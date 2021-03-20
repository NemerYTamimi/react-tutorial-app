
const SearchBox = (props) => {

    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search robots'
                onChange={props.searchChange}
            />
        </div>
    );
}

export default SearchBox;