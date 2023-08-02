import NumberOfEvents from "../components/NumberOfEvents";
  import { render, waitFor, screen } from "@testing-library/react";
  import userEvent from '@testing-library/user-event';
import mockData from "../mock-data";

  describe("<NumberOfEvents /> component", () => {
    test("contains an element with the role of the textbox", () => {
      render(<NumberOfEvents setCurrentNOE={() => { }}/>);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    test("default value of the textbox input field is 32", () => {
      render(<NumberOfEvents setCurrentNOE={() => { }} />);
      expect(screen.queryByRole("textbox").value).toBe("32");
    });

    test("textbox value changes accordingly when a user type", async () => {
        render(<NumberOfEvents setCurrentNOE={() => { }}  />);
        const textboxElement = screen.queryByRole("textbox");
        userEvent.clear(textboxElement);
        userEvent.type(textboxElement, '20');

    await waitFor(() => {
      expect(textboxElement.value).toBe('20');
    });
    });
  });
  
  
  describe("<NumberOfEvents /> integration", () => {
    test('updates the number of events and triggers API call in App', async () => {
      render(<NumberOfEvents setCurrentNOE={() => { }}/>);
      const textboxElement = screen.queryByRole("textbox");
      await userEvent.type(textboxElement, '{backspace}{backspace}10');
    })
  });

