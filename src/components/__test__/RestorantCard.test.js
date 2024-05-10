import { render, screen } from "@testing-library/react";
import Restocard from "../Restocard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardData.json";

it("Should render the restorant card with restorant data as we passed as a props", () => {
  render(<Restocard resDetails={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});
