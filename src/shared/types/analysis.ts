// Base types for monetary values
export interface MoneyValue {
  readonly value: number;
  readonly displayValue: string;
  readonly currencyCode: string;
  readonly currencySymbol: string;
}

export interface PercentageValue {
  readonly value: number;
  readonly displayValue: string;
}

export interface CountValue {
  readonly value: number;
  readonly displayValue: string;
  readonly label?: string;
}

// Analysis Status Types
export type AnalysisStatus = "success" | "pending" | "failed";

// Base Analysis (common fields)
export interface BaseAnalysis {
  readonly code: string;
  readonly status: AnalysisStatus;
  readonly fileName: string;
  readonly fileSize: number;
  readonly fileType: string;
  readonly uploadedAt: string;
}

// Pending Analysis
export interface PendingAnalysis extends BaseAnalysis {
  readonly status: "pending";
}

// Failed Analysis
export interface FailedAnalysis extends BaseAnalysis {
  readonly status: "failed";
  readonly errorMessage?: string;
}

// Success Analysis - includes all the screen data
export interface SuccessAnalysis extends BaseAnalysis {
  readonly status: "success";
  readonly completedAt: string;
  readonly data: AnalysisData;
}

// Union type for all analysis states
export type Analysis = PendingAnalysis | FailedAnalysis | SuccessAnalysis;

export interface AnalysisData {
  readonly analysis_metadata: AnalysisMetadata;
  readonly overview: OverviewScreen;
  readonly analysis_summary: AnalysisSummaryScreen;
  readonly personality_screen: PersonalityScreen;
  readonly financial_health: FinancialHealthScreen;
  readonly financial_report: FinancialReportScreen;
  readonly financial_challenge: FinancialChallengeScreen;
  readonly spender_personality: SpenderPersonalityScreen;
  readonly the_big_picture: BigPictureScreen;
  readonly spending_breakdown: SpendingBreakdownScreen;
  readonly transfers_to_people: TransfersToPeopleScreen;
  readonly daily_burn_rate: DailyBurnRateScreen;
  readonly your_people_stat: YourPeopleStatScreen;
  readonly top_recipient: TopRecipientScreen;
  readonly the_regular_recipient: RegularRecipientScreen;
  readonly the_loan_suspects: LoanSuspectsScreen;
  readonly favorite_spot: FavoriteSpotScreen;
  readonly you_vs_world_one: YouVsWorldOneScreen;
  readonly you_vs_the_world_rank: YouVsWorldRankScreen;
  readonly your_biggest_wins: BiggestWinsScreen;
  readonly your_biggest_threat?: BiggestThreatScreen;
  readonly the_path_forward?: PathForwardScreen;
}

export interface AnalysisMetadata {
  readonly period_start: string;
  readonly period_end: string;
  readonly days_analyzed: number;
  readonly analysis_date: string;
  readonly statement_bank: string;
  readonly account_type: string;
  readonly currency: string;
  readonly perceived_country: string;
}

// ============================================
// SCREEN TYPES
// ============================================

interface BaseScreen {
  readonly screenNumber: number;
  readonly screenName: string;
  readonly needed: boolean;
  readonly progressIndicator?: string;
  readonly badge?: string;
}

// Screen 1: Overview
export interface OverviewScreen extends BaseScreen {
  readonly brandName: string;
  readonly year: string;
  readonly mainHeading: string;
  readonly periodSubtitle: string;
  readonly totalIncome: MoneyValue;
  readonly totalOutflow: MoneyValue;
  readonly healthScore: PercentageValue;
  readonly metadata: {
    readonly periodStart: string;
    readonly periodEnd: string;
    readonly daysAnalyzed: number;
    readonly analysisDate: string;
    readonly source: string;
  };
}

// Screen 2: Analysis Summary
export interface AnalysisSummaryScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly highlightedPeriod: string;
  readonly daysAnalyzed: CountValue;
  readonly totalTransactions: CountValue;
  readonly totalSpent: MoneyValue & { readonly label: string };
  readonly uniqueMerchants: CountValue;
}

// Screen 3: Personality
export interface PersonalityScreen extends BaseScreen {
  readonly personalityArchetype: {
    readonly value: string;
    readonly displayValue: string;
    readonly traits: readonly string[];
  };
  readonly insights: readonly PersonalityInsight[];
}

export interface PersonalityInsight {
  readonly title: string;
  readonly subtitle?: string;
  readonly percentage?: PercentageValue;
  readonly description?: string;
  readonly visits?: CountValue;
  readonly amount?: MoneyValue;
  readonly timeWindow?: string;
}

// Screen 4: Financial Health
export interface FinancialHealthScreen extends BaseScreen {
  readonly healthScore: {
    readonly value: number;
    readonly displayValue: string;
    readonly maxValue: number;
    readonly displayText: string;
  };
  readonly healthRating: {
    readonly value: string;
    readonly displayValue: string;
  };
  readonly message: string;
  readonly comparison: {
    readonly userScore: CountValue & { readonly label: string };
    readonly nigerianAverage: CountValue & { readonly label: string };
  };
  readonly ctaText: string;
}

// Screen 5: Financial Report
export interface FinancialReportScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly reportCard: {
    readonly brandName: string;
    readonly reportDate: { readonly label: string; readonly value: string };
    readonly title: string;
    readonly grade: { readonly value: string; readonly displayValue: string };
    readonly status: { readonly value: string; readonly displayValue: string };
    readonly healthScore: {
      readonly label: string;
      readonly value: number;
      readonly maxValue: number;
      readonly displayValue: string;
    };
    readonly primaryConcern: {
      readonly label: string;
      readonly title: string;
      readonly amount: MoneyValue;
      readonly suffix: string;
    };
  };
  readonly ctaText: string;
}

// Screen 6: Financial Challenge
export interface FinancialChallengeScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly highlightedWord: string;
  readonly problemStatement: {
    readonly label: string;
    readonly title: string;
  };
  readonly monthlyCost: MoneyValue & { readonly label: string };
  readonly projectedImpact: {
    readonly label: string;
    readonly message: string;
    readonly amount: MoneyValue;
    readonly suffix: string;
  };
  readonly ctaText: string;
}

// Screen 7: Spender Personality
export interface SpenderPersonalityScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly highlightedText: string;
  readonly subtitle: string;
  readonly description: readonly {
    readonly text: string;
    readonly highlighted: string;
    readonly suffix: string;
  }[];
  readonly traits: readonly {
    readonly category: string;
    readonly value: string;
    readonly level: "high" | "medium" | "low";
  }[];
  readonly moneyPhilosophy: {
    readonly label: string;
    readonly quote: string;
  };
}

// Screen 8: The Big Picture
export interface BigPictureScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly moneyIn: {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode: string;
    readonly currencySymbol: string;
    readonly topContributor: {
      readonly label: string;
      readonly percentage: number;
    };
  };
  readonly moneyOut: {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode: string;
    readonly currencySymbol: string;
    readonly topContributor: {
      readonly label: string;
      readonly percentage: number;
    };
  };
  readonly netResult: {
    readonly label: string;
    readonly status: string;
    readonly calculation: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode: string;
    readonly currencySymbol: string;
  };
  readonly insight: {
    readonly message: string;
    readonly recommendation: string;
  };
}

// Screen 9: Spending Breakdown
export interface SpendingBreakdownScreen extends BaseScreen {
  readonly totalSpent: MoneyValue & { readonly label: string };
  readonly categories: readonly SpendingCategory[];
}

export interface SpendingCategory {
  readonly name: string;
  readonly amount: MoneyValue;
  readonly percentage: PercentageValue;
  readonly transactionCount: CountValue;
  readonly color: string;
}

// Screen 10: Transfers to People
export interface TransfersToPeopleScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly subtitle: string;
  readonly totalAmount: MoneyValue;
  readonly percentage: PercentageValue;
  readonly stats: readonly {
    readonly label: string;
    readonly value: number | string;
    readonly displayValue: string;
    readonly currencyCode?: string;
    readonly currencySymbol?: string;
  }[];
  readonly insight: {
    readonly title: string;
    readonly message: string;
  };
}

// Screen 12: Daily Burn Rate
export interface DailyBurnRateScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly dailyBurnRate: MoneyValue & { readonly label: string };
  readonly breakdowns: readonly {
    readonly label: string;
    readonly sublabel: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode: string;
    readonly currencySymbol: string;
  }[];
  readonly liveBurn: {
    readonly label: string;
    readonly amount: MoneyValue;
    readonly message: string;
  };
  readonly perspective: {
    readonly label: string;
    readonly message: string;
  };
}

// Screen 13: Your People Stat
export interface YourPeopleStatScreen extends BaseScreen {
  readonly shockingStat: {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly description: string;
    readonly subtitle: string;
  };
  readonly stats: readonly {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode?: string;
    readonly currencySymbol?: string;
  }[];
  readonly achievement: {
    readonly title: string;
    readonly badge: string;
    readonly cta: string;
  };
  readonly realityCheck: {
    readonly label: string;
    readonly message: string;
  };
}

// Screen 14: Top Recipient
export interface TopRecipientScreen extends BaseScreen {
  readonly rank: number;
  readonly recipient: {
    readonly name: string;
    readonly initials: string;
    readonly relationshipTypeEstimation: string;
    readonly quote: string;
  };
  readonly totalSent: MoneyValue & { readonly label: string };
  readonly transactionCount: CountValue;
  readonly transferTimeline: {
    readonly label: string;
    readonly dates: readonly {
      readonly date: string;
      readonly displayValue: string;
    }[];
  };
  readonly patternDetected: {
    readonly label: string;
    readonly message: string;
  };
}

// Screen 15: Regular Recipient
export interface RegularRecipientScreen extends BaseScreen {
  readonly recipient: {
    readonly name: string;
    readonly relationshipTypeEstimation: string;
    readonly photoPlaceholder: string;
  };
  readonly consistencyFrequency: {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly subtitle: string;
  };
  readonly stats: readonly {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode?: string;
    readonly currencySymbol?: string;
  }[];
  readonly recentTransfers: {
    readonly label: string;
    readonly transactions: readonly {
      readonly date: string;
      readonly time: string;
      readonly amount: MoneyValue;
    }[];
  };
  readonly insight: {
    readonly title: string;
    readonly message: string;
    readonly cta: string;
  };
}

// Screen 16: Loan Suspects
export interface LoanSuspectsScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly subtitle: string;
  readonly totalUntrackedTransfers: MoneyValue & {
    readonly label: string;
    readonly peopleCount: CountValue;
  };
  readonly suspects: readonly {
    readonly name: string;
    readonly date: string;
    readonly amount: MoneyValue;
    readonly frequency: string;
    readonly avatar: string;
  }[];
  readonly moreCount: CountValue;
}

// Screen 17: Favorite Spot
export interface FavoriteSpotScreen extends BaseScreen {
  readonly starIcon: string;
  readonly loyaltyBadge: string;
  readonly merchant: {
    readonly name: string;
    readonly photo: string;
    readonly visits: CountValue;
    readonly quote: string;
  };
  readonly stats: readonly {
    readonly label: string;
    readonly value: number;
    readonly displayValue: string;
    readonly currencyCode: string;
    readonly currencySymbol: string;
  }[];
  readonly visitFrequency: {
    readonly label: string;
    readonly timeline: {
      readonly startMonth: string;
      readonly endMonth: string;
      readonly dataPoints: number;
    };
  };
  readonly loyaltyScore: {
    readonly label: string;
    readonly value: number;
    readonly maxValue: number;
    readonly displayValue: string;
  };
  readonly insight: {
    readonly icon: string;
    readonly title: string;
    readonly message: string;
  };
}

// Screen 30: You vs World One
export interface YouVsWorldOneScreen extends BaseScreen {
  readonly category: {
    readonly label: string;
    readonly value: string;
  };
  readonly percentile: PercentageValue;
  readonly visualization: {
    readonly label: string;
    readonly legend: string;
  };
  readonly yourSpending: MoneyValue & {
    readonly label: string;
    readonly multiplier: {
      readonly value: number;
      readonly displayValue: string;
    };
  };
  readonly comparison: {
    readonly you: {
      readonly label: string;
      readonly value: number;
      readonly currencyCode: string;
      readonly currencySymbol: string;
    };
    readonly nigerianAverage: MoneyValue & { readonly label: string };
  };
  readonly alert: {
    readonly type: string;
    readonly message: string;
  };
}

// Screen 31: You vs World Rank
export interface YouVsWorldRankScreen extends BaseScreen {
  readonly healthScore: CountValue & { readonly label: string };
  readonly comparison: {
    readonly title: string;
    readonly subtitle: string;
  };
  readonly categoryByCategory: {
    readonly title: string;
    readonly subtitle: string;
    readonly categories: readonly {
      readonly name: string;
      readonly yourValue: MoneyValue;
      readonly average: MoneyValue;
      readonly status: "above_average" | "below_average" | "average";
    }[];
  };
  readonly keyTakeaways: {
    readonly title: string;
    readonly insights: readonly {
      readonly number: number;
      readonly text: string;
    }[];
  };
  readonly whereYouRank: {
    readonly title: string;
    readonly rankings: readonly {
      readonly category: string;
      readonly rank: {
        readonly value: number;
        readonly displayValue: string;
        readonly percentile: number;
      };
      readonly subtitle: string;
    }[];
  };
  readonly bottomLine: {
    readonly title: string;
    readonly message: string;
    readonly cta: string;
  };
  readonly footer: {
    readonly text: string;
  };
}

// Screen 32: Biggest Wins
export interface BiggestWinsScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly subtitle: string;
  readonly wins: readonly {
    readonly title: string;
    readonly description: string;
    readonly badge: {
      readonly label: string;
      readonly value?: number;
      readonly currencyCode?: string;
      readonly currencySymbol?: string;
      readonly percentile?: number;
    };
    readonly status: string;
  }[];
  readonly combinedProtection: MoneyValue & { readonly label: string };
  readonly cta: {
    readonly text: string;
    readonly actionType: string;
  };
}

// Screen 33: Biggest Threat (optional)
export interface BiggestThreatScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly threatType: {
    readonly label: string;
    readonly value: string;
  };
  readonly stats: readonly {
    readonly label: string;
    readonly value: number;
    readonly unit?: string;
    readonly total?: number;
    readonly displayValue: string;
    readonly currencyCode?: string;
    readonly currencySymbol?: string;
  }[];
  readonly yourDecemberInRed: {
    readonly title: string;
    readonly subtitle: string;
    readonly calendar: {
      readonly totalDays: number;
      readonly daysInOverdraft: number;
      readonly daysPositive: number;
    };
  };
  readonly theViciousCycle: {
    readonly title: string;
    readonly steps: readonly {
      readonly number: number;
      readonly title: string;
      readonly description: string;
    }[];
  };
  readonly severityLevel: {
    readonly label: string;
    readonly value: string;
    readonly displayValue: string;
    readonly message: string;
  };
  readonly cta: {
    readonly text: string;
    readonly actionType: string;
  };
  readonly footer: {
    readonly text: string;
  };
}

// Screen 34: Path Forward (optional)
export interface PathForwardScreen extends BaseScreen {
  readonly mainHeading: string;
  readonly your45DayPlan: {
    readonly title: string;
    readonly goal: string;
    readonly currentDay: {
      readonly label: string;
      readonly value: number;
    };
    readonly currentProgress: {
      readonly startBalance: MoneyValue;
      readonly targetBalance: MoneyValue;
      readonly label: string;
    };
  };
  readonly criticalActionSteps: {
    readonly title: string;
    readonly subtitle: string;
    readonly steps: readonly {
      readonly title: string;
      readonly description: string;
      readonly potentialSavings: MoneyValue;
    }[];
  };
  readonly theMath: {
    readonly label: string;
    readonly totalMonthlySavings: MoneyValue;
    readonly subtitle: string;
  };
  readonly futureProjection: {
    readonly title: string;
    readonly currentPath: MoneyValue & {
      readonly label: string;
      readonly subtitle: string;
    };
    readonly newPath: MoneyValue & {
      readonly label: string;
      readonly subtitle: string;
    };
    readonly difference: MoneyValue & { readonly message: string };
  };
  readonly challenge: {
    readonly title: string;
    readonly cta: string;
  };
  readonly footer: {
    readonly text: string;
  };
}
