import { StoryBoard } from "@shared/ui";
import type { SuccessAnalysis } from "@shared/types";
import {
  AnalysisSummaryScreen,
  OverviewScreen,
  PersonalityScreen,
  FinancialHealthScreen,
  FinancialReportScreen,
  FinancialChallengeScreen,
} from "./screens";
import { Switch, Case } from "meemaw";
import { useState } from "react";

interface AnalysisSuccessProps {
  readonly analysis: SuccessAnalysis;
}

export function AnalysisSuccess({ analysis }: AnalysisSuccessProps) {
  const { data } = analysis;
  const [screenNumber, setScreenNumber] = useState(0);

  const screenKeys = Object.keys(data);
  const screens = screenKeys.map((key) => data[key as keyof typeof data]);

  const jumpToIndex = (index: number) => {
    console.log(
      "Jumping to index:",
      index,
      Math.max(0, Math.min(index, screens.length - 1)),
    );
    setScreenNumber(Math.max(0, Math.min(index, screens.length - 1)));
  };

  const onPrev = () => {
    jumpToIndex(screenNumber - 1);
  };

  const onNext = () => {
    jumpToIndex(screenNumber + 1);
  };

  const isActiveScreen = (index: number) => screenNumber === index;

  return (
    <StoryBoard
      currentIndex={screenNumber}
      jumpToIndex={jumpToIndex}
      totalSlides={screens.length}
      onPrev={onPrev}
      onNext={onNext}
    >
      {screenNumber}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-xl">
          <Switch>
            <Case when={isActiveScreen(0)}>
              <OverviewScreen data={data.overview} />
            </Case>
            <Case when={isActiveScreen(1)}>
              <AnalysisSummaryScreen
                data={data.analysis_summary}
                metadata={data?.analysis_metadata}
              />
            </Case>
            <Case when={isActiveScreen(2)}>
              <PersonalityScreen data={data.personality_screen} />
            </Case>
            <Case when={isActiveScreen(3)}>
              <FinancialHealthScreen data={data.financial_health} />
            </Case>
            <Case when={isActiveScreen(4)}>
              <FinancialReportScreen data={data.financial_report} />
            </Case>
            <Case when={isActiveScreen(5)}>
              <FinancialChallengeScreen data={data.financial_challenge} />
            </Case>
          </Switch>
        </div>
      </div>
    </StoryBoard>
  );
}
