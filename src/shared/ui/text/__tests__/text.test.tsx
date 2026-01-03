import { render, screen } from "@testing-library/react";
import { Text } from "../text";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Hello World</Text>);
    const element = screen.getByText("Hello World");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("P");
  });

  it("renders heading-1 variant", () => {
    render(<Text variant="heading-1">Heading 1</Text>);
    const element = screen.getByText("Heading 1");
    expect(element.tagName).toBe("H1");
    expect(element).toHaveClass("text-4xl");
    expect(element).toHaveClass("font-bold");
  });

  it("renders heading-2 variant", () => {
    render(<Text variant="heading-2">Heading 2</Text>);
    const element = screen.getByText("Heading 2");
    expect(element.tagName).toBe("H2");
    expect(element).toHaveClass("text-2xl");
    expect(element).toHaveClass("font-bold");
  });

  it("renders heading-3 variant", () => {
    render(<Text variant="heading-3">Heading 3</Text>);
    const element = screen.getByText("Heading 3");
    expect(element.tagName).toBe("H3");
    expect(element).toHaveClass("text-xl");
    expect(element).toHaveClass("font-semibold");
  });

  it("renders body variant", () => {
    render(<Text variant="body">Body text</Text>);
    const element = screen.getByText("Body text");
    expect(element.tagName).toBe("P");
    expect(element).toHaveClass("text-base");
    expect(element).toHaveClass("font-normal");
  });

  it("renders caption variant", () => {
    render(<Text variant="caption">Caption text</Text>);
    const element = screen.getByText("Caption text");
    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveClass("text-sm");
    expect(element).toHaveClass("font-medium");
  });

  it("applies custom weight", () => {
    render(
      <Text variant="body" weight="bold">
        Bold text
      </Text>,
    );
    const element = screen.getByText("Bold text");
    expect(element).toHaveClass("font-bold");
  });

  it("applies color classes", () => {
    render(<Text color="primary">Primary text</Text>);
    const element = screen.getByText("Primary text");
    expect(element).toHaveClass("text-primary");
  });

  it("applies success color", () => {
    render(<Text color="success">Success text</Text>);
    const element = screen.getByText("Success text");
    expect(element).toHaveClass("text-success");
  });

  it("applies error color", () => {
    render(<Text color="error">Error text</Text>);
    const element = screen.getByText("Error text");
    expect(element).toHaveClass("text-error");
  });

  it("applies warning color", () => {
    render(<Text color="warning">Warning text</Text>);
    const element = screen.getByText("Warning text");
    expect(element).toHaveClass("text-warning");
  });

  it("uses custom element with 'as' prop", () => {
    render(
      <Text variant="body" as="div">
        Div text
      </Text>,
    );
    const element = screen.getByText("Div text");
    expect(element.tagName).toBe("DIV");
  });

  it("applies custom className", () => {
    render(<Text className="custom-class">Custom</Text>);
    const element = screen.getByText("Custom");
    expect(element).toHaveClass("custom-class");
  });

  it("combines all props correctly", () => {
    render(
      <Text
        variant="heading-2"
        weight="semibold"
        color="primary"
        className="mt-4"
        as="h1"
      >
        Combined
      </Text>,
    );
    const element = screen.getByText("Combined");
    expect(element.tagName).toBe("H1");
    expect(element).toHaveClass("text-2xl");
    expect(element).toHaveClass("font-semibold");
    expect(element).toHaveClass("text-primary");
    expect(element).toHaveClass("mt-4");
  });
});
