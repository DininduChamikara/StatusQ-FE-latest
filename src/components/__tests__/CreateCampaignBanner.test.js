import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import CreateCampaignBanner from "../CreateCampaignBanner/CreateCampaignBanner";

afterEach(() => {
    cleanup();
})

test("should render CreateCampaignBanner", () => {
  render(<CreateCampaignBanner />);
  const createCampaignBannerElement = screen.getByTestId(
    "createCampaignBanner-1"
  );
  expect(createCampaignBannerElement).toBeInTheDocument();
  expect(createCampaignBannerElement).toHaveTextContent(
    "Promote your Products or Services on Social MediaClick on Create New Campaigns to launch an advertisement campaign on a Social Media Platform for your product or serviceCreate New CampaignOngoing Campaigns"
  );
});

test('matches snapshot', () => {
    const tree = renderer.create(<CreateCampaignBanner/>).toJSON();
    expect(tree).toMatchSnapshot();
})
