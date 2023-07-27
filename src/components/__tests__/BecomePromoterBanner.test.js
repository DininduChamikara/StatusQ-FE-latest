import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import BecomePromoterBanner from "../BecomePromoterBanner/BecomePromoterBanner";

describe("BecomePromoterBanner", () => {
  it("should render BecomePromoterBanner", () => {
    render(<BecomePromoterBanner />);
    const becomePromoterBannerElement = screen.getByTestId(
      "becomePromoterBanner"
    );
    expect(becomePromoterBannerElement).toBeInTheDocument();
  });

  it("BecomePromoterBanner should visible", () => {
    render(<BecomePromoterBanner />);
    const becomePromoterBannerElement = screen.getByTestId(
      "becomePromoterBanner"
    );
    expect(becomePromoterBannerElement).toBeVisible();
  });

  it ("availability of survey button", () => {
    // eslint-disable-next-line no-unused-vars
    const {getByRole} = render(<BecomePromoterBanner />);
    const takeSurveyBtn = screen.getByRole("button", {name:"Take the Survay"});
    expect(takeSurveyBtn).toBeInTheDocument();
  })

  it ("visibility of survey button", () => {
    // eslint-disable-next-line no-unused-vars
    const {getByRole} = render(<BecomePromoterBanner />);
    const takeSurveyBtn = screen.getByRole("button", {name:"Take the Survay"});
    expect(takeSurveyBtn).toBeVisible();
  })

  it ("survey button should be clickable", () => {
    const mockSetVisibleStepper = jest.fn();
    render(<BecomePromoterBanner setVisibleStepper={mockSetVisibleStepper} />);
    const becomePromoterBannerBtn_1 = screen.getByTestId(
      "becomePromoterBanner-btn-1"
    );
    fireEvent.click(becomePromoterBannerBtn_1);  
    expect(mockSetVisibleStepper).toHaveBeenCalledTimes(1);
  })

  it ("view jobs button should be clickable", () => {
    const mockSetVisibleStepper = jest.fn();
    render(<BecomePromoterBanner setVisibleStepper={mockSetVisibleStepper} />);
    const becomePromoterBannerBtn_2 = screen.getByTestId(
      "becomePromoterBanner-btn-2"
    );
    fireEvent.click(becomePromoterBannerBtn_2);  
    expect(mockSetVisibleStepper).toHaveBeenCalledTimes(1);
  })

  it("BecomePromoterBanner matches snapshot", () => {
    const tree = renderer.create(<BecomePromoterBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
