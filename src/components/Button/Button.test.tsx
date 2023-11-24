import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("display a label", () => {
      render(<Button>Submit</Button>)
      const button = screen.getByRole('button')
      expect(button.textContent).toEqual('Submit')
  });
});
