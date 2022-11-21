import Home from "./Home";
import {connect} from 'react-redux';
import { AppDispatch, RootStore } from "../../configureStore";
import { loadProductsAction, productsBySearchAction } from "../../actions/productAction";
const mapStateToProps =(state:RootStore)=>{
    return {
        products: state.products.filteredItems
    }
}

const mapDispatchToProps =(dispatch:AppDispatch) =>{
    return {        
        loadProducts: () => loadProductsAction()(dispatch),
        productsBySearch : (searchText:string) => productsBySearchAction(searchText)(dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)