import { RemoveScroll } from 'react-remove-scroll';
import { useContext, useEffect, useState } from 'react';
import SessionContext from 'context/SessionContext';
import * as cartService from 'services/cart';
import LoadingSpinner from 'shared-components/LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import CartItem from './CartItem';

const CartModal = ({ setCartOpen }) => {
  const { username } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    const response = await cartService.getCart(); // if not external fetch then it would be: await fetch("http...");
    const data = await response.json();
    setCart(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemoveCartItem = async (id) => {
    const previousCart = cart; // snapshot to roll back to if the delete fails
    setCart(cart.filter((item) => item.id !== id)); // optimistically remove from the UI
    const response = await cartService.removeItemFromCart({ itemId: id });
    if (response.status !== 200) {
      console.log('Error deleting item from cart');
      setCart(previousCart);
      return;
    }
    console.log('Removed item from cart with id: ' + id);
  };

  const cartItems = cart.map((item, idx) => {
    return (
      <div
        className={`${idx === 0 ? '' : 'border-t border-slate-200'} mx-5 mt-8 pt-8`}
        key={item.id}
      >
        <CartItem item={item} handleRemoveCartItem={handleRemoveCartItem} />
      </div>
    );
  });

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="relative bg-white h-screen w-full max-w-xl">
          <button
            className="absolute top-0 right-0 py-2 px-1"
            onClick={() => setCartOpen(false)}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="text-4xl text-emerald-400"
            />
          </button>
          <div className="bg-emerald-800 text-white font-playfair text-center py-7 text-3xl shadow-md">
            {username}'s cart
          </div>
          <div>{loading ? <LoadingSpinner /> : cartItems}</div>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
