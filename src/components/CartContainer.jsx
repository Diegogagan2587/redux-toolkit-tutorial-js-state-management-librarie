import cartItems from "../cartItems";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./Cartitem";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2> Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <>
      <section className="cart">
        <header>
          <h2>Your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              Total <span>$</span>
              {total}
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </footer>
      </section>
    </>
  );
};

export default CartContainer;
