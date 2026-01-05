import { render } from "@testing-library/react";
import { Logo } from "../logo";

describe("Logo", () => {
  it("renders with default props", () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders in light mode by default", () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector("svg");
    const background = svg?.querySelector("rect");
    expect(background).toHaveAttribute("fill", "#FFFFFF");
  });

  it("renders in dark mode", () => {
    const { container } = render(<Logo mode="dark" />);
    const svg = container.querySelector("svg");
    const background = svg?.querySelector("rect");
    expect(background).toHaveAttribute("fill", "#1F2937");
  });

  it("renders small size", () => {
    const { container } = render(<Logo size="small" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });

  it("renders medium size by default", () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "48");
    expect(svg).toHaveAttribute("height", "48");
  });

  it("renders large size", () => {
    const { container } = render(<Logo size="large" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "64");
    expect(svg).toHaveAttribute("height", "64");
  });

  it("renders xlarge size", () => {
    const { container } = render(<Logo size="xlarge" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "96");
    expect(svg).toHaveAttribute("height", "96");
  });

  it("applies custom className", () => {
    const { container } = render(<Logo className="custom-class" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("has border in dark mode", () => {
    const { container } = render(<Logo mode="dark" />);
    const svg = container.querySelector("svg");
    const rects = svg?.querySelectorAll("rect");
    // Should have background rect and border rect in dark mode
    expect(rects?.length).toBeGreaterThan(4); // background + border + bars
  });

  it("no border in light mode", () => {
    const { container } = render(<Logo mode="light" />);
    const svg = container.querySelector("svg");
    const borderRect = Array.from(svg?.querySelectorAll("rect") || []).find(
      (rect) => rect.getAttribute("stroke") !== null
    );
    expect(borderRect).toBeFalsy();
  });
});
