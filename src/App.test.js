import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  const { getByTestId } = render(<ContactForm />);
  const form = getByTestId("form");
  expect(form).toBeInTheDocument();
});

await test("Testing Form input", () => {
  
  const { getByTestId } = render(<ContactForm />);

  const firstNameInput = getByTestId("firstName");
  const lastNameInput = getByTestId("lastName");
  const emailInput = getByTestId("email");
  const messageInput = getByTestId("message");
  const button = getByTestId("submitbtn");

  fireEvent.change(firstNameInput, { target: { value: "Taylor" } });
  fireEvent.change(lastNameInput, { target: { value: "Wise" } });
  fireEvent.change(emailInput, { target: { value: "taylorW@TaylorW.com" } });
  fireEvent.change(messageInput, { target: { value: "Testing Message" } });

  expect(firstNameInput.value).toBe("Taylor");
  expect(lastNameInput.value).toBe("Wise");
  expect(emailInput.value).toBe("taylorW@TaylorW.com");
  expect(messageInput.value).toBe("Testing Message");

  fireEvent.click(button);

  expect(getByTestId("preTag")).toBeInTheDocument();
});
