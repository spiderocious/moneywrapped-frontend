export interface FunFact {
  readonly id: string;
  readonly text: string;
}

// Configurable fun facts - can be easily replaced with API endpoint later
export const funFacts: ReadonlyArray<FunFact> = [
  {
    id: "1",
    text: "Did you know? The average Nigerian saves 15% of their income. Tracking small expenses can save you up to ₦50k a month.",
  },
  {
    id: "2",
    text: "Fun fact: Nigerians spend an average of ₦30,000 monthly on food and groceries. Small changes can lead to big savings!",
  },
  {
    id: "3",
    text: "Did you know? Transportation costs account for 20% of the average Nigerian's monthly expenses.",
  },
  {
    id: "4",
    text: "Insight: Setting aside just ₦500 daily can give you ₦180,000 in savings per year!",
  },
  {
    id: "5",
    text: "Fun fact: Tracking your spending for just one month can help you identify ways to save up to 25% more.",
  },
];

export function getRandomFunFact(): FunFact {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  return funFacts[randomIndex];
}
