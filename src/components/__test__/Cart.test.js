import { render, screen, fireEvent } from "@testing-library/react";
import RestourantMenu from "../RestourantMenu";
import MOCK_MENU_DATA from "../mocks/restoMenuList.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

it("Should load the menu list form the Restorant category", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestourantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (9)");
  fireEvent.click(accordianHeader);

  // const eachAccordianList = screen.getAllByTestId("foodItems");

  //Assertion
  // expect(eachAccordianList.length).toBe(9)
  const addBtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent(addBtn);
});
