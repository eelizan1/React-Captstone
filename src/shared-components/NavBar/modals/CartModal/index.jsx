import { RemoveScroll } from 'react-remove-scroll';

const CartModal = () => {
  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
    </RemoveScroll>
  );
};

export default CartModal;
