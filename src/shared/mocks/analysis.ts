import type { SuccessAnalysis, FailedAnalysis } from "@shared/types";

export const analysisSuccessMock: SuccessAnalysis = {
  code: "BUYNZ8D0",
  status: "success",
  fileName: "account_statement_8273159561_2026-01-01.pdf",
  fileSize: 50244,
  fileType: "pdf",
  uploadedAt: "2026-01-15T12:42:06.054Z",
  completedAt: "2026-01-15T12:44:18.965Z",
  data: {
    analysis_metadata: {
      period_start: "2025-10-03",
      period_end: "2026-01-01",
      days_analyzed: 91,
      analysis_date: "2026-01-15",
      statement_bank: "Moniepoint Microfinance Bank",
      account_type: "",
      currency: "NGN",
      perceived_country: "Nigeria",
    },
    overview: {
      screenNumber: 1,
      screenName: "overview",
      needed: true,
      brandName: "FinanceWrapped",
      year: "2026",
      mainHeading: "Your Financial Story",
      periodSubtitle: "October 2025",
      totalIncome: {
        value: 7241943.77,
        displayValue: "₦7.24M",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      totalOutflow: {
        value: 8257486.67,
        displayValue: "₦8.26M",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      healthScore: {
        value: 38,
        displayValue: "38%",
      },
      metadata: {
        periodStart: "2025-10-03",
        periodEnd: "2026-01-01",
        daysAnalyzed: 91,
        analysisDate: "2026-01-15",
        source: "analysis_metadata",
      },
    },
    analysis_summary: {
      screenNumber: 2,
      screenName: "analysis_summary",
      needed: true,
      progressIndicator: "2 / 32",
      badge: "THE ANALYSIS",
      mainHeading: "We analyzed your",
      highlightedPeriod: "October",
      daysAnalyzed: {
        value: 91,
        displayValue: "91",
        label: "DAYS ANALYZED",
      },
      totalTransactions: {
        value: 320,
        displayValue: "320",
        label: "TRANSACTIONS",
      },
      totalSpent: {
        value: 8257486.67,
        displayValue: "₦8.26M",
        currencyCode: "NGN",
        currencySymbol: "₦",
        label: "TOTAL SPENT",
      },
      uniqueMerchants: {
        value: 62,
        displayValue: "62",
        label: "UNIQUE MERCHANTS",
      },
    },
    personality_screen: {
      screenNumber: 3,
      screenName: "personality_screen",
      needed: true,
      progressIndicator: "3/32",
      personalityArchetype: {
        value: "The Community Bank",
        displayValue: "The Community Bank",
        traits: ["GENEROUS", "SOCIAL", "DISCIPLINED"],
      },
      insights: [
        {
          title: "50.89% of spending on transfers",
          percentage: {
            value: 0.5089,
            displayValue: "51%",
          },
          description:
            "of spending went to person-to-person transfers and vendor payouts",
        },
        {
          title: "2.02% at restaurants",
          subtitle: "",
          visits: {
            value: 0,
            displayValue: "0 visits",
          },
          amount: {
            value: 0.0203,
            displayValue: "₦0",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
        },
        {
          title: "64.39% of income from salary",
          subtitle: "",
          timeWindow: "",
        },
      ],
    },
    financial_health: {
      screenNumber: 4,
      screenName: "financial_health",
      needed: true,
      progressIndicator: "4 / 32",
      badge: "FINANCIAL HEALTH",
      healthScore: {
        value: 80,
        displayValue: "100",
        maxValue: 100,
        displayText: "/100",
      },
      healthRating: {
        value: "poor",
        displayValue: "POOR",
      },
      message: "Your finances need immediate attention.",
      comparison: {
        userScore: {
          value: 38,
          displayValue: "38%",
          label: "You",
        },
        nigerianAverage: {
          value: 64,
          displayValue: "64%",
          label: "Nigerian Average",
        },
      },
      ctaText: "Swipe to continue",
    },
    financial_report: {
      screenNumber: 5,
      screenName: "financial_report",
      needed: true,
      progressIndicator: "5/32",
      badge: "YOUR GRADE",
      mainHeading: "Your October report card",
      reportCard: {
        brandName: "FINANCEWRAPPED",
        reportDate: {
          label: "REPORT DATE",
          value: "Jan 2026",
        },
        title: "MONTHLY FINANCIAL REPORT",
        grade: {
          value: "D",
          displayValue: "D",
        },
        status: {
          value: "Poor Status",
          displayValue: "Poor Status",
        },
        healthScore: {
          label: "Health Score:",
          value: 38,
          maxValue: 100,
          displayValue: "38/100",
        },
        primaryConcern: {
          label: "PRIMARY CONCERN:",
          title: "High outgoing transfer volume costing",
          amount: {
            value: 350000,
            displayValue: "₦350k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          suffix: "monthly.",
        },
      },
      ctaText: "SWIPE FOR DETAILS",
    },
    financial_challenge: {
      screenNumber: 6,
      screenName: "financial_challenge",
      needed: true,
      progressIndicator: "6/32",
      badge: "PRIMARY CONCERN",
      mainHeading: "Your Biggest",
      highlightedWord: "Challenge",
      problemStatement: {
        label: "PROBLEM STATEMENT",
        title: "High outgoing transfer volume",
      },
      monthlyCost: {
        label: "Monthly Interest Cost",
        value: 350000,
        displayValue: "₦350,000",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      projectedImpact: {
        label: "PROJECTED IMPACT (2026)",
        message: "You are on track to lose",
        amount: {
          value: 4200000,
          displayValue: "₦4.20M",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        suffix: "to interest fees if left unchecked.",
      },
      ctaText: "SWIPE TO CONTINUE",
    },
    spender_personality: {
      screenNumber: 7,
      screenName: "spender_personality",
      needed: true,
      progressIndicator: "7/32",
      badge: "YOUR PERSONALITY",
      mainHeading: "The Community",
      highlightedText: "Bank",
      subtitle: "Your relationship with money",
      description: [
        {
          text: "You are the life of the community — people and local vendors see you as dependable.",
          highlighted: "high generosity",
          suffix: "when friends or vendors call.",
        },
        {
          text: "You maintain steady salary inflows but your outflows to people and plans erode liquidity.",
          highlighted: "steady income, weak flows control",
          suffix: "create margin pressure.",
        },
      ],
      traits: [
        {
          category: "GENEROUS",
          value: "High",
          level: "high",
        },
        {
          category: "SOCIAL",
          value: "High",
          level: "high",
        },
        {
          category: "DISCIPLINED",
          value: "Medium",
          level: "medium",
        },
        {
          category: "IMPULSIVE",
          value: "Medium",
          level: "medium",
        },
      ],
      moneyPhilosophy: {
        label: "MONEY PHILOSOPHY",
        quote:
          "You treat money as a tool to support people and relationships — you prioritize community and reliability.",
      },
    },
    the_big_picture: {
      screenNumber: 8,
      screenName: "the_big_picture",
      needed: true,
      progressIndicator: "8/32",
      badge: "THE BIG PICTURE",
      mainHeading: "Your xxx cash flow",
      moneyIn: {
        label: "MONEY IN",
        value: 7241943.77,
        displayValue: "₦7.24M",
        currencyCode: "NGN",
        currencySymbol: "₦",
        topContributor: {
          label: "Salary 64%",
          percentage: 0.6439,
        },
      },
      moneyOut: {
        label: "MONEY OUT",
        value: 8257486.67,
        displayValue: "₦8.26M",
        currencyCode: "NGN",
        currencySymbol: "₦",
        topContributor: {
          label: "Transfers 50.89%",
          percentage: 0.5089,
        },
      },
      netResult: {
        label: "Net Result",
        status: "DEFICIT",
        calculation: "In - Out =",
        value: -1015542.9,
        displayValue: "₦-1.02M",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      insight: {
        message:
          "You spent more than you earned over this period — transfers and big plan top-ups drained cash.",
        recommendation:
          "Reduce transfer volume by 30% next quarter (e.g., from ~120 transfers to ~84) to regain positive cashflow.",
      },
    },
    spending_breakdown: {
      screenNumber: 9,
      screenName: "spending_breakdown",
      needed: true,
      progressIndicator: "9/32",
      badge: "SPENDING BREAKDOWN",
      totalSpent: {
        label: "TOTAL SPENT",
        value: 8257486.67,
        displayValue: "₦8.26M",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      categories: [
        {
          name: "Transfers",
          amount: {
            value: 4200000,
            displayValue: "₦4.20M",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.5089,
            displayValue: "51%",
          },
          transactionCount: {
            value: 120,
            displayValue: "120 transactions",
          },
          color: "purple",
        },
        {
          name: "Plans (Savings / Top-ups)",
          amount: {
            value: 3000000,
            displayValue: "₦3.00M",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.3633,
            displayValue: "36%",
          },
          transactionCount: {
            value: 80,
            displayValue: "80 transactions",
          },
          color: "pink",
        },
        {
          name: "Restaurants",
          amount: {
            value: 167125,
            displayValue: "₦167k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.0203,
            displayValue: "2%",
          },
          transactionCount: {
            value: 12,
            displayValue: "12 transactions",
          },
          color: "teal",
        },
        {
          name: "Subscriptions & Digital",
          amount: {
            value: 50000,
            displayValue: "₦50k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.0061,
            displayValue: "1%",
          },
          transactionCount: {
            value: 4,
            displayValue: "4 transactions",
          },
          color: "orange",
        },
        {
          name: "Groceries & Household",
          amount: {
            value: 100000,
            displayValue: "₦100k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.0121,
            displayValue: "1%",
          },
          transactionCount: {
            value: 5,
            displayValue: "5 transactions",
          },
          color: "gray",
        },
        {
          name: "Other",
          amount: {
            value: 740361.67,
            displayValue: "₦740k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          percentage: {
            value: 0.0896,
            displayValue: "9%",
          },
          transactionCount: {
            value: 10,
            displayValue: "10 transactions",
          },
          color: "gray",
        },
      ],
    },
    transfers_to_people: {
      screenNumber: 10,
      screenName: "transfers_to_people",
      needed: true,
      progressIndicator: "10/32",
      badge: "#1 CATEGORY",
      mainHeading: "Transfers to People",
      subtitle: "Your money moves faster than you do.",
      totalAmount: {
        value: 4200000,
        displayValue: "₦4,200,000",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      percentage: {
        value: 0.5089,
        displayValue: "51% of all spending",
      },
      stats: [
        {
          label: "TOTAL TRANSACTIONS",
          value: 120,
          displayValue: "120",
        },
        {
          label: "AVERAGE AMOUNT",
          value: 35000,
          displayValue: "₦35,000",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "REACH",
          value: 48,
          displayValue: "48 People",
        },
        {
          label: "FREQUENCY",
          value: "daily",
          displayValue: "Daily",
        },
      ],
      insight: {
        title: "Community Bank Status",
        message:
          "You're effectively operating as a mini payout hub — many medium-to-large transfers to many people every day.",
      },
    },
    daily_burn_rate: {
      screenNumber: 12,
      screenName: "daily_burn_rate",
      needed: true,
      progressIndicator: "12/32",
      badge: "BURN RATE",
      mainHeading: "Your daily burn rate",
      dailyBurnRate: {
        value: 90747.66,
        displayValue: "₦90,748",
        currencyCode: "NGN",
        currencySymbol: "₦",
        label: "per day",
      },
      breakdowns: [
        {
          label: "Per Hour",
          sublabel: "AVERAGE FLOW",
          value: 3781.15,
          displayValue: "₦3,781",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "Per Minute",
          sublabel: "HIGH INTENSITY",
          value: 63.02,
          displayValue: "₦63",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "While you sleep",
          sublabel: "8 HOURS TOTAL",
          value: 30249.22,
          displayValue: "₦30,249",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
      ],
      liveBurn: {
        label: "LIVE BURN",
        amount: {
          value: 15,
          displayValue: "₦15",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        message: "burned since opening",
      },
      perspective: {
        label: "PERSPECTIVE",
        message: "That's roughly the price of 3 bags of rice every day.",
      },
    },
    your_people_stat: {
      screenNumber: 13,
      screenName: "your_people_stat",
      needed: true,
      progressIndicator: "13/32",
      badge: "YOUR PEOPLE",
      shockingStat: {
        label: "SHOCKING STAT",
        value: 48,
        displayValue: "48",
        description: "Different People",
        subtitle: "That's more than a whole classroom!",
      },
      stats: [
        {
          label: "TOTAL SENT",
          value: 4200000,
          displayValue: "₦4.20M",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "AVG PER PERSON",
          value: 87500,
          displayValue: "₦87,500",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "PEOPLE PER DAY",
          value: 1.32,
          displayValue: "1.32",
        },
      ],
      achievement: {
        title: "Achievement Unlocked!",
        badge: "The Community Bank",
        cta: "View Badge",
      },
      realityCheck: {
        label: "REALITY CHECK",
        message:
          "Your heart (and wallet) are wide open — consider creating a monthly transfer budget.",
      },
    },
    top_recipient: {
      screenNumber: 14,
      screenName: "top_recipient",
      needed: true,
      progressIndicator: "14/32",
      badge: "TOP RECIPIENT",
      rank: 1,
      recipient: {
        name: "YUSUF ABIODUN ALARE",
        initials: "YA",
        relationshipTypeEstimation: "Business",
        quote:
          "Large repeat payouts to this recipient suggest vendor or contract payments.",
      },
      totalSent: {
        label: "TOTAL SENT",
        value: 1000040,
        displayValue: "₦1,000,040",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      transactionCount: {
        value: 2,
        displayValue: "2 TRANSACTIONS",
      },
      transferTimeline: {
        label: "TRANSFER TIMELINE",
        dates: [
          {
            date: "2025-11-08",
            displayValue: "Nov 8",
          },
          {
            date: "2025-11-08",
            displayValue: "Nov 8",
          },
        ],
      },
      patternDetected: {
        label: "PATTERN DETECTED",
        message:
          "Large repeated payments on the same day — looks like vendor or bulk payout activity.",
      },
    },
    the_regular_recipient: {
      screenNumber: 15,
      screenName: "the_regular_recipient",
      needed: true,
      progressIndicator: "15/32",
      badge: "THE REGULAR",
      recipient: {
        name: "ESTHER FUNMILAYO AJIBOLA",
        relationshipTypeEstimation: "Family",
        photoPlaceholder: "user_photo",
      },
      consistencyFrequency: {
        label: "Consistency frequency",
        value: 2.5,
        displayValue: "Every 2.5 Days",
        subtitle: "4 transfers in total",
      },
      stats: [
        {
          label: "TOTAL SENT",
          value: 31120,
          displayValue: "₦31,120",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "CONSISTENCY",
          value: 0.95,
          displayValue: "95% Score",
        },
      ],
      recentTransfers: {
        label: "RECENT TRANSFERS",
        transactions: [
          {
            date: "2025-10-29",
            time: "18:13",
            amount: {
              value: 10420,
              displayValue: "₦10,420",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
          },
          {
            date: "2025-11-28",
            time: "18:13",
            amount: {
              value: 10320,
              displayValue: "₦10,320",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
          },
        ],
      },
      insight: {
        title: "Family Support Insight",
        message:
          "You make multiple modest transfers consistently — likely ongoing family support.",
        cta: "Automate Now",
      },
    },
    the_loan_suspects: {
      screenNumber: 16,
      screenName: "the_loan_suspects",
      needed: true,
      progressIndicator: "16 / 32",
      badge: "LOAN SUSPECTS",
      mainHeading: "The Loan Suspects",
      subtitle: "We found large transfers that look like untracked loans.",
      totalUntrackedTransfers: {
        label: "TOTAL UNTRACKED TRANSFERS",
        value: 750000,
        displayValue: "₦750,000",
        currencyCode: "NGN",
        currencySymbol: "₦",
        peopleCount: {
          value: 5,
          displayValue: "Across 5 people",
        },
      },
      suspects: [
        {
          name: "Daniel Olanrewaju",
          date: "2025-11-27",
          amount: {
            value: 310020,
            displayValue: "₦310,020",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          frequency: "ONE-TIME",
          avatar: "user_avatar",
        },
        {
          name: "Tunde Opeyemi Olawale",
          date: "2025-11-27",
          amount: {
            value: 280020,
            displayValue: "₦280,020",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          frequency: "ONE-TIME",
          avatar: "user_avatar",
        },
        {
          name: "Adewale Oluwaferanmi Adeniji",
          date: "2025-12-19",
          amount: {
            value: 184020,
            displayValue: "₦184,020",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          frequency: "ONE-TIME",
          avatar: "user_avatar",
        },
      ],
      moreCount: {
        value: 2,
        displayValue: "+ 2 more suspects",
      },
    },
    favorite_spot: {
      screenNumber: 17,
      screenName: "favorite_spot",
      needed: true,
      progressIndicator: "CARD 17 OF 32",
      badge: "YOUR FAVORITE SPOT",
      starIcon: "stars",
      loyaltyBadge: "LOYAL",
      merchant: {
        name: "CHRONICLES RESTAURANT AND KARAOKE BAR",
        photo: "restaurant_photo",
        visits: {
          value: 8,
          displayValue: "8 visits this year",
        },
        quote: "You're practically a regular — they probably know your name.",
      },
      stats: [
        {
          label: "TOTAL SPENT",
          value: 67000,
          displayValue: "₦67,000",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "AVERAGE BILL",
          value: 8375,
          displayValue: "₦8,375",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
      ],
      visitFrequency: {
        label: "VISIT FREQUENCY",
        timeline: {
          startMonth: "JAN",
          endMonth: "DEC",
          dataPoints: 8,
        },
      },
      loyaltyScore: {
        label: "LOYALTY SCORE",
        value: 8.5,
        maxValue: 10,
        displayValue: "8.5/10",
      },
      insight: {
        icon: "house",
        title: "SECOND HOME",
        message:
          "You've visited multiple times and spent consistently — consider a loyalty or budget plan.",
      },
    },
    you_vs_world_one: {
      screenNumber: 30,
      screenName: "you_vs_world_one",
      needed: true,
      progressIndicator: "30/32",
      badge: "Act 8: You vs The World",
      category: {
        label: "RESTAURANT SPENDING",
        value: "restaurant_spending",
      },
      percentile: {
        value: 92,
        displayValue: "92nd percentile",
      },
      visualization: {
        label: "VISUALIZING THE CROWD",
        legend: "1 dot = 1% of Nigeria",
      },
      yourSpending: {
        label: "YOUR SPENDING",
        value: 167125,
        displayValue: "₦167,125",
        currencyCode: "NGN",
        currencySymbol: "₦",
        multiplier: {
          value: 6.68,
          displayValue: "6.68x",
        },
      },
      comparison: {
        you: {
          label: "YOU",
          value: 167125,
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        nigerianAverage: {
          label: "NIGERIAN AVERAGE (₦25,000)",
          value: 25000,
          displayValue: "₦25,000",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
      },
      alert: {
        type: "Lifestyle Inflation Alert",
        message:
          "You're spending significantly more on dining than the national average.",
      },
    },
    you_vs_the_world_rank: {
      screenNumber: 31,
      screenName: "you_vs_the_world_rank",
      needed: true,
      progressIndicator: "Card 31",
      badge: "Act 8: You vs The World",
      healthScore: {
        value: 38,
        displayValue: "38",
        label: "HEALTH SCORE",
      },
      comparison: {
        title: "Below the Nigerian Average",
        subtitle:
          "Your financial health is currently lower than 62% of users in Nigeria.",
      },
      categoryByCategory: {
        title: "Category by Category",
        subtitle: "Monthly Avg",
        categories: [
          {
            name: "Restaurants",
            yourValue: {
              value: 167125,
              displayValue: "₦167k",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            average: {
              value: 45000,
              displayValue: "₦45k avg",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            status: "above_average",
          },
          {
            name: "Transfers",
            yourValue: {
              value: 4200000,
              displayValue: "₦4.20M",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            average: {
              value: 1200000,
              displayValue: "₦1.20M avg",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            status: "above_average",
          },
          {
            name: "Savings (Plans)",
            yourValue: {
              value: 3000000,
              displayValue: "₦3.00M",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            average: {
              value: 800000,
              displayValue: "₦800k avg",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
            status: "above_average",
          },
        ],
      },
      keyTakeaways: {
        title: "Key Takeaways",
        insights: [
          {
            number: 1,
            text: "You spend ~51% of outflows on transfers to people and vendors.",
          },
          {
            number: 2,
            text: "Payroll is your primary income source (64% of inflows).",
          },
        ],
      },
      whereYouRank: {
        title: "Where You Rank",
        rankings: [
          {
            category: "SAVINGS",
            rank: {
              value: 5,
              displayValue: "Top 5%",
              percentile: 95,
            },
            subtitle: "In your income bracket",
          },
          {
            category: "SUBSCRIPTIONS",
            rank: {
              value: 42,
              displayValue: "Top 42%",
              percentile: 58,
            },
            subtitle: "Most efficient spend",
          },
          {
            category: "INVESTMENT",
            rank: {
              value: 20,
              displayValue: "Bottom 20%",
              percentile: 20,
            },
            subtitle: "Room for growth",
          },
          {
            category: "UTILITIES",
            rank: {
              value: 50,
              displayValue: "Top 50%",
              percentile: 50,
            },
            subtitle: "Right on the median",
          },
        ],
      },
      bottomLine: {
        title: "The Bottom Line",
        message:
          "While you receive steady salaries, high transfer and savings top-up volume push cashflow into the red.",
        cta: "Set a Saving Goal",
      },
      footer: {
        text: "Swipe for the Finale",
      },
    },
    your_biggest_threat: {
      screenNumber: 33,
      screenName: "your_biggest_threat",
      needed: false,
      progressIndicator: "33/32",
      badge: "BONUS",
      mainHeading: "Your Biggest Threat",
      threatType: {
        label: "THE OVERDRAFT TRAP",
        value: "overdraft_trap",
      },
      stats: [
        {
          label: "IN OVERDRAFT",
          value: 0,
          unit: "days",
          total: 0,
          displayValue: "0/0 days",
        },
        {
          label: "INTEREST PAID",
          value: 0,
          displayValue: "₦0",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "CLOSING BAL",
          value: 0,
          displayValue: "₦0",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        {
          label: "ANNUAL COST",
          value: 0,
          displayValue: "₦0",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
      ],
      yourDecemberInRed: {
        title: "Your December in Red",
        subtitle: "Every single day was spent below zero.",
        calendar: {
          totalDays: 0,
          daysInOverdraft: 0,
          daysPositive: 91,
        },
      },
      theViciousCycle: {
        title: "The Vicious Cycle",
        steps: [
          {
            number: 1,
            title: "Salary Arrives",
            description:
              "Large payouts and planned savings reduce available cash quickly.",
          },
          {
            number: 2,
            title: "Multiple Payouts",
            description: "Numerous transfers to people/vendors on many days.",
          },
          {
            number: 3,
            title: "Top-ups to Plans",
            description:
              "Big plan top-ups lock cash into savings accounts quickly.",
          },
          {
            number: 4,
            title: "Low Buffer",
            description:
              "Limited buffer between salary and next set of transfers.",
          },
          {
            number: 5,
            title: "Repeat",
            description: "Cycle repeats each pay period, keeping cash tight.",
          },
        ],
      },
      severityLevel: {
        label: "SEVERITY LEVEL",
        value: "critical",
        displayValue: "CRITICAL",
        message:
          "You aren't overdrafting, but the cadence of large transfers plus plan top-ups is costing you liquidity.",
      },
      cta: {
        text: "Immediate Action Required",
        actionType: "urgent",
      },
      footer: {
        text: "FINANCIALLY WRAPPED 2024 • ADVISORY REPORT",
      },
    },
    your_biggest_wins: {
      screenNumber: 32,
      screenName: "your_biggest_wins",
      needed: true,
      progressIndicator: "FINAL",
      mainHeading: "Your Biggest Wins",
      subtitle: "You crushed your goals this year!",
      wins: [
        {
          title: "Consistent Salary",
          description: "Reliable payroll deposits every month",
          badge: {
            label: "SAVED ₦4,661,924",
            value: 4661923.77,
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          status: "completed",
        },
        {
          title: "High Savings Habit",
          description: "Regular contributions to Plans and large top-ups",
          badge: {
            label: "TOP 12%",
            percentile: 88,
          },
          status: "achievement",
        },
      ],
      combinedProtection: {
        label: "COMBINED PROTECTION",
        value: 167000,
        displayValue: "₦167k+",
        currencyCode: "NGN",
        currencySymbol: "₦",
      },
      cta: {
        text: "SHARE MY JOURNEY",
        actionType: "share",
      },
    },
    the_path_forward: {
      screenNumber: 34,
      screenName: "the_path_forward",
      needed: false,
      progressIndicator: "34/32",
      badge: "THE SOLUTION",
      mainHeading: "The Path Forward",
      your45DayPlan: {
        title: "Your 45-Day Plan",
        goal: "Net Zero Balance",
        currentDay: {
          label: "Day 0",
          value: 0,
        },
        currentProgress: {
          startBalance: {
            value: 94964.05,
            displayValue: "₦95k",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          targetBalance: {
            value: 0,
            displayValue: "₦0",
            currencyCode: "NGN",
            currencySymbol: "₦",
          },
          label: "CURRENT PROGRESS",
        },
      },
      criticalActionSteps: {
        title: "Critical Action Steps",
        subtitle: "Follow these to unlock ₦1.76M savings",
        steps: [
          {
            title: "Cut Transfers",
            description:
              "Reduce number of person-to-person transfers from ~120 to ~84 per period",
            potentialSavings: {
              value: 1260000,
              displayValue: "Saves ₦1,260,000",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
          },
          {
            title: "Stagger Plan Top-ups",
            description:
              "Split large top-ups into smaller monthly contributions to preserve liquidity",
            potentialSavings: {
              value: 250000,
              displayValue: "Saves ₦250,000",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
          },
          {
            title: "Set Transfer Budget",
            description:
              "Create a weekly transfer allowance and automate only priority payments",
            potentialSavings: {
              value: 250000,
              displayValue: "Saves ₦250,000",
              currencyCode: "NGN",
              currencySymbol: "₦",
            },
          },
        ],
      },
      theMath: {
        label: "THE MATH",
        totalMonthlySavings: {
          value: 1760000,
          displayValue: "₦1,760,000",
          currencyCode: "NGN",
          currencySymbol: "₦",
        },
        subtitle: "Total Monthly Potential",
      },
      futureProjection: {
        title: "FUTURE PROJECTION",
        currentPath: {
          label: "CURRENT PATH",
          value: -1200000,
          displayValue: "₦-1.20M",
          currencyCode: "NGN",
          currencySymbol: "₦",
          subtitle: "Next 12 months",
        },
        newPath: {
          label: "NEW PATH",
          value: 2600000,
          displayValue: "₦2.60M",
          currencyCode: "NGN",
          currencySymbol: "₦",
          subtitle: "Potential Gain",
        },
        difference: {
          value: 3800000,
          displayValue: "₦3.80M",
          currencyCode: "NGN",
          currencySymbol: "₦",
          message: "That's a ₦3.80M difference in 1 year.",
        },
      },
      challenge: {
        title: "30-DAY ZERO CASH CHALLENGE",
        cta: "Start Today",
      },
      footer: {
        text: "END OF YOUR FINANCIAL STORY",
      },
    },
  },
};

export const analysisFailureMock: FailedAnalysis = {
  code: "LL5GOTWR",
  status: "failed",
  fileName: "account_statement_8273159561_2026-01-01.pdf",
  fileSize: 50244,
  fileType: "pdf",
  uploadedAt: "2026-01-15T12:39:31.161Z",
  errorMessage: "Server restarted during processing",
};
