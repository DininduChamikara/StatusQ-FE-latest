import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import BarChart from "../BarChart/BarChart";

describe("BarChart", () => {
  it("renders the BarChart with the correct data", () => {
    const barChartData = {
      labelsArray: ["O/L", "A/L", "Undergraduates", "Postgraduates"],
      dataArray: [10, 20, 30, 40],
    };

    const { getByTestId } = render(<BarChart barChartData={barChartData} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const chartElement = getByTestId("barChart");
    expect(chartElement).toBeInTheDocument();
  });

  it("BarChart matches snapshot", () => {
    const barChartData = {
      labelsArray: ["O/L", "A/L", "Undergraduates", "Postgraduates"],
      dataArray: [10, 20, 30, 40],
    };

    const tree = renderer
      .create(<BarChart barChartData={barChartData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
