import { Text } from "@shared/ui";

export function ShowcaseScreen() {
  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Text variant="heading-1" className="mb-2">
            Component Showcase
          </Text>
          <Text variant="body" color="secondary">
            A comprehensive showcase of all UI components
          </Text>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Text variant="heading-2" className="mb-6 pb-4 border-b">
              Typography - Text Component
            </Text>

            {/* Heading Variants */}
            <div className="mb-8">
              <Text variant="heading-3" className="mb-4">
                Heading Variants
              </Text>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Heading 1 - Inter Bold 36px
                  </Text>
                  <Text variant="heading-1">
                    The quick brown fox jumps over the lazy dog
                  </Text>
                </div>

                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Heading 2 - Inter Bold 24px
                  </Text>
                  <Text variant="heading-2">
                    The quick brown fox jumps over the lazy dog
                  </Text>
                </div>

                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Heading 3 - Inter Semibold 20px
                  </Text>
                  <Text variant="heading-3">
                    The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
              </div>
            </div>

            {/* Body and Caption */}
            <div className="mb-8">
              <Text variant="heading-3" className="mb-4">
                Body & Caption
              </Text>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Body Regular - Inter Regular 16px
                  </Text>
                  <Text variant="body">
                    The quick brown fox jumps over the lazy dog. Used for main
                    content reading. This is the default text style for
                    paragraphs and body content throughout the application.
                  </Text>
                </div>

                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Caption / Helper Text - Inter Medium 14px
                  </Text>
                  <Text variant="caption">
                    The quick brown fox jumps over the lazy dog. Used for
                    captions, labels, and helper text.
                  </Text>
                </div>
              </div>
            </div>

            {/* Weight Variations */}
            <div className="mb-8">
              <Text variant="heading-3" className="mb-4">
                Weight Variations
              </Text>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" weight="regular">
                    Regular: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" weight="medium">
                    Medium: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" weight="semibold">
                    Semibold: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" weight="bold">
                    Bold: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
              </div>
            </div>

            {/* Color Variations */}
            <div className="mb-8">
              <Text variant="heading-3" className="mb-4">
                Color Variations
              </Text>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="primary">
                    Primary: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="secondary">
                    Secondary: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="success">
                    Success: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="error">
                    Error: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="warning">
                    Warning: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="body" color="neutral">
                    Neutral: The quick brown fox jumps over the lazy dog
                  </Text>
                </div>
              </div>
            </div>

            {/* Combined Examples */}
            <div className="mb-8">
              <Text variant="heading-3" className="mb-4">
                Combined Examples
              </Text>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="heading-2" color="primary" className="mb-2">
                    Primary Heading with Color
                  </Text>
                  <Text variant="body" color="secondary">
                    This is a body text with secondary color beneath a colored
                    heading.
                  </Text>
                </div>

                <div className="p-4 bg-success-50 border border-success-200 rounded">
                  <Text variant="body" weight="semibold" color="success">
                    Success Message
                  </Text>
                  <Text variant="caption" color="success" className="mt-1">
                    Your action was completed successfully.
                  </Text>
                </div>

                <div className="p-4 bg-error-50 border border-error-200 rounded">
                  <Text variant="body" weight="semibold" color="error">
                    Error Message
                  </Text>
                  <Text variant="caption" color="error" className="mt-1">
                    Something went wrong. Please try again.
                  </Text>
                </div>

                <div className="p-4 bg-warning-50 border border-warning-200 rounded">
                  <Text variant="body" weight="semibold" color="warning">
                    Warning Message
                  </Text>
                  <Text variant="caption" color="warning" className="mt-1">
                    Please review your information before proceeding.
                  </Text>
                </div>
              </div>
            </div>

            {/* Custom Element Examples */}
            <div>
              <Text variant="heading-3" className="mb-4">
                Custom Element (as prop)
              </Text>
              <div className="space-y-3">
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Heading 2 style as h1 element
                  </Text>
                  <Text variant="heading-2" as="h1">
                    Rendered as h1 with heading-2 styles
                  </Text>
                </div>
                <div className="p-4 bg-neutral-50 rounded">
                  <Text variant="caption" color="secondary" className="mb-2">
                    Body style as div element
                  </Text>
                  <Text variant="body" as="div">
                    Rendered as div with body styles
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props Reference */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Text variant="heading-2" className="mb-6 pb-4 border-b">
              Props Reference
            </Text>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">
                      <Text variant="body" weight="semibold">
                        Prop
                      </Text>
                    </th>
                    <th className="text-left py-3 px-4">
                      <Text variant="body" weight="semibold">
                        Type
                      </Text>
                    </th>
                    <th className="text-left py-3 px-4">
                      <Text variant="body" weight="semibold">
                        Default
                      </Text>
                    </th>
                    <th className="text-left py-3 px-4">
                      <Text variant="body" weight="semibold">
                        Options
                      </Text>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        variant
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        TextVariant
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        "body"
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        heading-1, heading-2, heading-3, body, caption
                      </Text>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        weight
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        TextWeight
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        variant default
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        regular, medium, semibold, bold
                      </Text>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        color
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        TextColor
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        "neutral"
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        primary, secondary, success, error, warning, neutral
                      </Text>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        as
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        HTML element
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        variant default
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        h1, h2, h3, h4, h5, h6, p, span, div
                      </Text>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        className
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        string
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        ""
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        Any Tailwind classes
                      </Text>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <Text variant="caption" weight="medium">
                        children
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        ReactNode
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        required
                      </Text>
                    </td>
                    <td className="py-3 px-4">
                      <Text variant="caption" color="secondary">
                        Any React node
                      </Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
