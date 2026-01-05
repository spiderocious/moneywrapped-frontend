import { useState } from "react";
import {
  Text,
  Button,
  Input,
  Toggle,
  Radio,
  RadioGroup,
  Card,
  Badge,
  Tab,
  EmptyState,
} from "@shared/ui";
import {
  FiHome,
  FiPieChart,
  FiCreditCard,
  FiUser,
  FiArrowRight,
  FiFileText,
  FiMail,
} from "react-icons/fi";

export function ComponentsShowcase() {
  const [toggleValue, setToggleValue] = useState(true);
  const [radioValue, setRadioValue] = useState("debit");
  const [activeTab, setActiveTab] = useState("spend");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <Text variant="heading-1" className="mb-2">
            Component Library
          </Text>
          <Text variant="body" color="secondary">
            All UI components from the design system
          </Text>
        </div>

        {/* Buttons */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Buttons
          </Text>

          <div className="space-y-6">
            <div>
              <Text variant="heading-3" className="mb-4">
                Primary Buttons
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="large">
                  Primary Action
                </Button>
                <Button variant="primary" size="medium">
                  Primary Action
                </Button>
                <Button variant="primary" size="small">
                  Primary Action
                </Button>
              </div>
            </div>

            <div>
              <Text variant="heading-3" className="mb-4">
                Button States
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Default</Button>
                <Button variant="primary" state="disabled">
                  Disabled
                </Button>
                <Button variant="primary" state="loading">
                  Processing
                </Button>
              </div>
            </div>

            <div>
              <Text variant="heading-3" className="mb-4">
                Secondary & Text Buttons
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="text" rightIcon={<FiArrowRight />}>
                  Text Link Button
                </Button>
              </div>
            </div>

            <div>
              <Text variant="heading-3" className="mb-4">
                With Icons
              </Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" leftIcon={<FiMail />}>
                  + Add Money
                </Button>
                <Button variant="secondary" rightIcon={<FiArrowRight />}>
                  See All
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Inputs */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Form Inputs
          </Text>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Amount"
                type="number"
                placeholder="0.00"
                leftIcon={<span className="text-neutral-600">₦</span>}
                hint="Active / Focused State"
                state="active"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error="Password must be at least 8 characters."
              />

              <Input
                label="Disabled Input"
                type="text"
                placeholder="Disabled input"
                disabled
              />
            </div>
          </div>
        </Card>

        {/* Toggle & Radio */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Toggle & Radio Buttons
          </Text>

          <div className="space-y-6">
            <div>
              <Text variant="heading-3" className="mb-4">
                Toggle Switch
              </Text>
              <Toggle
                label="Remember me"
                checked={toggleValue}
                onToggle={setToggleValue}
              />
            </div>

            <div>
              <Text variant="heading-3" className="mb-4">
                Radio Group
              </Text>
              <RadioGroup name="payment-type" value={radioValue}>
                <Radio
                  label="Debit"
                  value="debit"
                  name="payment-type"
                  checked={radioValue === "debit"}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <Radio
                  label="Credit"
                  value="credit"
                  name="payment-type"
                  checked={radioValue === "credit"}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
              </RadioGroup>
            </div>
          </div>
        </Card>

        {/* Badges */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Badges / Status Tags
          </Text>

          <div className="flex flex-wrap gap-4">
            <Badge variant="success">Success</Badge>
            <Badge variant="pending">Pending</Badge>
            <Badge variant="failed">Failed</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" showDot={false}>
              No Dot
            </Badge>
          </div>
        </Card>

        {/* Tabs */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Tabs
          </Text>

          <div className="space-y-6">
            <div>
              <Text variant="heading-3" className="mb-4">
                Default Tabs
              </Text>
              <Tab
                tabs={[
                  { id: "spend", label: "Spend" },
                  { id: "save", label: "Save" },
                  { id: "invest", label: "Invest" },
                ]}
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>

            <div>
              <Text variant="heading-3" className="mb-4">
                Tabs with Icons
              </Text>
              <Tab
                tabs={[
                  { id: "home", label: "Home", icon: <FiHome /> },
                  { id: "analysis", label: "Analysis", icon: <FiPieChart /> },
                  { id: "cards", label: "Cards", icon: <FiCreditCard /> },
                  { id: "profile", label: "Profile", icon: <FiUser /> },
                ]}
                activeTab={activeTab}
                onChange={setActiveTab}
                variant="pills"
              />
            </div>
          </div>
        </Card>

        {/* Cards */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Cards
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" padding="medium">
              <Text variant="heading-3" className="mb-2">
                Default Card
              </Text>
              <Text variant="body" color="secondary">
                No elevation or border
              </Text>
            </Card>

            <Card variant="elevated" padding="medium">
              <Text variant="heading-3" className="mb-2">
                Elevated Card
              </Text>
              <Text variant="body" color="secondary">
                With shadow
              </Text>
            </Card>

            <Card variant="outlined" padding="medium">
              <Text variant="heading-3" className="mb-2">
                Outlined Card
              </Text>
              <Text variant="body" color="secondary">
                With border
              </Text>
            </Card>
          </div>
        </Card>

        {/* Empty State */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Empty State
          </Text>

          <Card variant="outlined" padding="none">
            <EmptyState
              icon={<FiFileText size={64} />}
              title="No Transactions"
              description="Your recent transactions will appear here."
              action={
                <Button variant="primary" leftIcon={<FiArrowRight />}>
                  Get Started
                </Button>
              }
            />
          </Card>
        </Card>

        {/* Complex Example: Transaction Cards */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Complex Example: Transaction List
          </Text>

          <div className="space-y-4">
            <Card variant="elevated" padding="medium">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-warning-100 flex items-center justify-center">
                    <Text variant="body">🍔</Text>
                  </div>
                  <div>
                    <Text variant="body" weight="semibold">
                      Chicken Republic
                    </Text>
                    <Text variant="caption" color="secondary">
                      Today, 12:42 PM
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text variant="body" weight="semibold" color="error">
                    -₦3,500.00
                  </Text>
                  <Badge variant="failed" showDot={false}>
                    Food
                  </Badge>
                </div>
              </div>
            </Card>

            <Card variant="elevated" padding="medium">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success-100 flex items-center justify-center">
                    <Text variant="body">⬇️</Text>
                  </div>
                  <div>
                    <Text variant="body" weight="semibold">
                      Transfer from Kuda
                    </Text>
                    <Text variant="caption" color="secondary">
                      Yesterday, 9:00 AM
                    </Text>
                  </div>
                </div>
                <div className="text-right">
                  <Text variant="body" weight="semibold" color="success">
                    +₦50,000.00
                  </Text>
                  <Badge variant="success" showDot={false}>
                    Income
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Balance Card Example */}
        <Card>
          <Text variant="heading-2" className="mb-6">
            Complex Example: Balance Card
          </Text>

          <Card
            variant="elevated"
            padding="large"
            className="bg-gradient-to-br from-primary to-primary-700"
          >
            <div className="flex items-start justify-between mb-6">
              <Text variant="caption" className="text-white opacity-90">
                Total Balance
              </Text>
              <button className="text-white opacity-90">
                <FiUser size={24} />
              </button>
            </div>

            <Text
              variant="heading-1"
              className="text-white mb-6"
              weight="bold"
            >
              ₦1,450,200.00
            </Text>

            <Button
              variant="secondary"
              className="bg-white/20 border-white text-white hover:bg-white/30"
              leftIcon={<span>+</span>}
            >
              Add Money
            </Button>
          </Card>
        </Card>
      </div>
    </div>
  );
}
