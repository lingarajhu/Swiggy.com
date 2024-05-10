import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  it("Should load the contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should button inside contact component", () => {
    render(<Contact />);

    //Querying
    const btn = screen.getByRole("button");

    //Assertion
    expect(btn).toBeInTheDocument();
  });

  it("Should load the input boxes inside the contact component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });

  it("Should load the input name inside contact component", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("Type your name");

    expect(name).toBeInTheDocument();
  });
});
