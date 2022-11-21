import CartItem from "./CartItem";
import { connect } from "react-redux";
import { RootStore } from "../../configureStore";

const mapStateToProps = (state:RootStore) => {
    return {
        products:state.products.items,
    }
}
export default connect(mapStateToProps,null)(CartItem);