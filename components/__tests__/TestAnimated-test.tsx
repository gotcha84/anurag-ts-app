import React, { useEffect } from "react";
import { render } from "@testing-library/react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function TestAnimated() {
  const testOpacity = useSharedValue(0);
  const testAnimatedStyle = useAnimatedStyle(
    () => ({ opacity: testOpacity.value }),
    [],
  );

  useEffect(() => {
    testOpacity.value = withTiming(1, { duration: 500 });
  }, [testOpacity]);

  return <Animated.View testID="anurag" style={testAnimatedStyle} />;
}

describe("tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("anurag", () => {
    const { getByTestId } = render(<TestAnimated />);

    const anurag = getByTestId("anurag");

    expect(anurag).toHaveAnimatedStyle({ opacity: 0 });

    jest.advanceTimersByTime(501);

    expect(anurag).toHaveAnimatedStyle({ opacity: 1 });
  });
});
