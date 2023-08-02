  import NumberOfEvents from "../components/NumberOfEvents";
  import { render, waitFor, screen } from "@testing-library/react";
  import user from "@testing-library/user-event";

  describe("<NumberOfEvents /> component", () => {
    test("contains an element with the role of the textbox", () => {
      render(<NumberOfEvents />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    test("default value of the textbox input field is 32", () => {
      render(<NumberOfEvents />);
      expect(screen.queryByRole("textbox").value).toBe("32");
    });

    test("textbox value changes accordingly when a user type", async () => {
        render(<NumberOfEvents />);
        const textboxElement = screen.queryByRole("textbox");
        user.clear(textboxElement);
        user.type(textboxElement, '20');

    await waitFor(() => {
      expect(textboxElement.value).toBe('20');
    });
    });

  });
  describe("<NumberOfEvents /> integration", () => {
    test("contains an element with the role of the textbox", () => {
      render(<NumberOfEvents />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

  });

