import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Headder from "../Headder";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render headder component with a login buttom", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headder />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render headder component with a cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headder />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)");

  expect(cartItems).toBeInTheDocument();
});

it("Should change the login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headder />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log In" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Log out" });

  expect(logoutButton).toBeInTheDocument();
});
