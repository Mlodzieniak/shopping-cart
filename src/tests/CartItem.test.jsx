import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../components/CartItem";

describe("CartItem component", () => {
  const item = {
    id: "1",
    images: { icon: "test-image" },
    name: "Test Item",
    price: 10,
  };

  test("renders item name and image", () => {
    const { getByText, getByAltText } = render(
      <CartItem item={item} total={[]} setTotal={() => {}} />
    );
    expect(getByText("Test Item")).toBeInTheDocument();
    expect(getByAltText("Test Item")).toHaveAttribute("src", "test-image");
  });

  test("increases and decreases item amount", () => {
    const { getByLabelText } = render(
      <CartItem item={item} total={[]} setTotal={() => {}} />
    );
    const amountInput = getByLabelText("Amount:");
    expect(amountInput).toHaveValue(1);
    fireEvent.change(amountInput, { target: { value: "2" } });
    expect(amountInput).toHaveValue(2);
    fireEvent.click(getByLabelText("Increase amount"));
    expect(amountInput).toHaveValue(3);
    fireEvent.click(getByLabelText("Decrease amount"));
    expect(amountInput).toHaveValue(2);
  });

  test("calls removeFromCart and setTotal functions when item amount is 0", () => {
    const removeFromCart = jest.fn();
    const setTotal = jest.fn();
    const { getByLabelText } = render(
      <CartItem item={item} total={[]} setTotal={setTotal} />,
      {
        wrapper: ({ children }) => (
          <RemoverContext.Provider value={removeFromCart}>
            {children}
          </RemoverContext.Provider>
        ),
      }
    );
    const amountInput = getByLabelText("Amount:");
    fireEvent.change(amountInput, { target: { value: "0" } });
    expect(removeFromCart).toHaveBeenCalledWith(item);
    expect(setTotal).toHaveBeenCalledWith([]);
  });

  test("calls removeFromCart and setTotal functions when delete button is clicked", () => {
    const removeFromCart = jest.fn();
    const setTotal = jest.fn();
    const { getByRole } = render(
      <CartItem item={item} total={[]} setTotal={setTotal} />,
      {
        wrapper: ({ children }) => (
          <RemoverContext.Provider value={removeFromCart}>
            {children}
          </RemoverContext.Provider>
        ),
      }
    );
    fireEvent.click(getByRole("button"));
    expect(removeFromCart).toHaveBeenCalledWith(item);
    expect(setTotal).toHaveBeenCalledWith([]);
  });
});
