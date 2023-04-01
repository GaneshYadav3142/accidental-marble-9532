import { useContext } from "react";
import {handleContext} from "../components/contextapi"


function Cart() {

const {cartvalue}=useContext(handleContext);





    return <h1>{cartvalue}</h1>;
  }
  export default Cart;