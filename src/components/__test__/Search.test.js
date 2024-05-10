import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/swiggyLiveApi.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the search button ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeClickingTheSearchBtn = screen.getAllByTestId("restoCard");

  expect(beforeClickingTheSearchBtn.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const afterClickingTheSearchBtn = screen.getAllByTestId("restoCard");

  expect(afterClickingTheSearchBtn.length).toBe(2);
});

it("Should render top rated filter button and data of filtered restorent cards", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const beforeClickingTheFilterBtn = screen.getAllByTestId("restoCard");

  expect(beforeClickingTheFilterBtn.length).toBe(9);

  const filterBtn = screen.getByRole("button", { name: "Top Restorents" });

  fireEvent.click(filterBtn);

  const afterClickingTheFilterBtn = screen.getAllByTestId("restoCard");

  expect(afterClickingTheFilterBtn.length).toBe(8);
});
