
const SearchBox = (props) => {

    return (
        <div className='pa2'>
            <input
                className='pa3  ba '
                type='search'
                placeholder='Search '
                onChange={props.searchChange}
            />
        </div>
    );
}

export default SearchBox;