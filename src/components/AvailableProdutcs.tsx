import { useCartStore } from "../store/CartStore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <div>
      <h1>Choose a Product</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - R${item.price}
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
