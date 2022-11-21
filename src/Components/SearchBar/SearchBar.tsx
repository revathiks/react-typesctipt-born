import React, { useState } from "react";

type searchProps = {
   // setFilter:React.Dispatch<React.SetStateAction<string>>|any,
   productsBySearch:(searchText:string) => void
}


//const SearchBar =({setFilter}:Props) =>{
 const SearchBar =({productsBySearch}:searchProps) =>{
    //const [searchText,setSearchText]=useState<string>('');
   
    return (
        <div>
            <input type="text" onChange={(e)=>productsBySearch(e.target.value)} />
        </div>
    )
}
export default SearchBar;