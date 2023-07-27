import { act, render, screen } from "@testing-library/react";
import CountDownTimer from "../CountDownTimer/CountDownTimer";


// Mock the useSelector function to provide the required state
jest.mock("react-redux", () => ({
    useSelector: jest.fn((fn) =>
      fn({
        adminSettings: {
          acceptTimeDuration: 12, // Replace with the desired values for testing
          completeTimeDuration: 24, // Replace with the desired values for testing
        },
      })
    ),
  }));
  
  // Mock the PromoterCampaignService.updateState function
  jest.mock("../../api/services/PromoterCampaignService", () => ({
    updateState: jest.fn(() => Promise.resolve({ success: true })),
  }));
  
  describe("CountDownTimer", () => {
    it("renders timer with remaining time", async () => {
      const createdTime = new Date().getTime(); // Use the current time as createdTime
      const jobId = "123";
      const jobType = "AVAILABLE";
  
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        render(<CountDownTimer createdTime={createdTime} jobId={jobId} jobType={jobType} />);
      });
  
      const chipLabel = screen.getByTestId("remaining-time-chip");
      expect(chipLabel).toBeInTheDocument();
    });
  
    // test("renders expired message when time is up", async () => {
    //   const createdTime = new Date().getTime() - 25 * 60 * 60 * 1000; // Set the createdTime 25 hours in the past
    //   const jobId = "456";
    //   const jobType = "ONGOING";
  
    //   // eslint-disable-next-line testing-library/no-unnecessary-act
    //   await act(async () => {
    //     render(<CountDownTimer createdTime={createdTime} jobId={jobId} jobType={jobType} />);
    //   });
  
    //   const chipLabel = screen.queryByTestId("remaining-time-chip");
    //   const expiredMessage = screen.getByText("This Job is Expired! Try another");
    //   expect(chipLabel).toBeNull();
    //   expect(expiredMessage).toBeInTheDocument();
    // });
  
  });