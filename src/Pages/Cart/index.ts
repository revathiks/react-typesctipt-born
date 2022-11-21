import {connect} from 'react-redux';
import { RootStore } from '../../configureStore';
import Cart from './Cart';

const mapStateToProps = (state:RootStore) => {
    return {
        cartItems: state.cart,
        products:state.products.items
    }
}

//const mapDispatchToProps = (dispa)
export default connect(mapStateToProps,null)(Cart)