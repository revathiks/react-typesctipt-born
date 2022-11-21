import { connect } from "react-redux";
import { productsBySearchAction } from "../../actions/productAction";
import { AppDispatch } from "../../configureStore";
import SearchBar from "./SearchBar";

// const mapDispatchToProps =(dispatch:AppDispatch)=>{
//     productsBySearch : (searchText:string) => productsBySearchAction(searchText)(dispatch)
// }

export default connect(null,null)(SearchBar)
//export default SearchBar;