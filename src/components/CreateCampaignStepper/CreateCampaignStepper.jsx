import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampaignService from "../../api/services/CampaignService";
import PaymentService from "../../api/services/PaymentService";
// import PaymentService from "../../api/services/paymentService";

import PromoterCampaignService from "../../api/services/PromoterCampaignService";
import PromoterService from "../../api/services/PromoterService";
import { showAlert } from "../../store/reducers/alert.slice";
import { changePromoterListResponse, clearCampaign } from "../../store/reducers/saveCampaign";
import CampaignPayment from "../CampaignPayment/CampaignPayment";
import SelectAudience from "../SelectAudience/SelectAudience";
import SelectPromoters from "../SelectPromoters/SelectPromoters";
import UploadAdvertisement from "../UploadAdvertisement/UploadAdvertisement";

const SYSTEM_FEE_PERCENTAGE = 0.1;
const CHARGE_PER_VIEW = 2;

const steps = [
  "Select campaign audience",
  "Upload advertisement",
  "Select Promoters",
  "Payments",
];

function CreateCampaignStepper({ongoingStep, setOngoingStep}) {

  const {
    platform,
    schoolCat,
    universityCat,
    olCat,
    alCat,
    subMaths,
    subBio,
    subCommerce,
    subArt,
    subTechnology,
    undergraduateCat,
    postgraduateCat,
    ageGroup_13_15,
    ageGroup_16_18,
    ageGroup_19_25,
    ageGroup_26_35,
    ageGroup_36_60,
    ageGroup_over_60,
    western,
    uva,
    sabaragamuwa,
    central,
    nothern,
    northernWestern,
    southern,
    eastern,
    northCentral,
    sinhala,
    tamil,
    english,
    male,
    female,
    selectedAdvertisements,
    selectedPromoterIdList,
    minRequiredViews,
    viewsFromEach,
    numOfPromoters,
  } = useSelector((state) => state.saveCampaign);

  const { userId } = useSelector((state) => state.login);

  // useEffect(() => {
  //   handleReset();
  // }, [])

  const finalizedExpectedViewsAmount =
    (selectedPromoterIdList ? selectedPromoterIdList.length : 0) *
    (viewsFromEach ? viewsFromEach : 0);
  const numberOfPromoterSelections = selectedPromoterIdList
    ? selectedPromoterIdList.length
    : 0;
  const numOfAdvertisementPosts = selectedAdvertisements
    ? selectedAdvertisements.length
    : 0;
  const campaignCostBeforeSystemFee =
    numberOfPromoterSelections *
    (viewsFromEach ? viewsFromEach : 0) *
    numOfAdvertisementPosts *
    CHARGE_PER_VIEW;
  const systemFee = campaignCostBeforeSystemFee * SYSTEM_FEE_PERCENTAGE;
  const finalizedCampaignCost = campaignCostBeforeSystemFee + systemFee;

  const [educationAudience, setEducationAudience] = useState([]);
  const [ageAudience, setAgeAudience] = useState([]);
  const [regionAudience, setRegionAudience] = useState([]);
  const [languageAudience, setLanguageAudience] = useState([]);
  const [genderAudience, setGenderAudience] = useState([]);

  // getPromoterList request body
  const [campaignDataRequest, setCampaignDataRequest] = useState({
    platform: null,
    minAccessibleViews: 0,
    educationAudience: [],
    ageAudience: [],
    regionalAudience: [],
    languageAudience: [],
    genderAudience: [],
    responseCount: 0,
    state: "ACTIVE",
  });

  useEffect(() => {
    let eduAudienceArray = [];
    if (olCat) {
      eduAudienceArray.push("ol_cat");
    }
    if (alCat) {
      eduAudienceArray.push("al_cat");
    }
    if (undergraduateCat) {
      eduAudienceArray.push("undergraduate_cat");
    }
    if (postgraduateCat) {
      eduAudienceArray.push("postgraduate_cat");
    }
    setEducationAudience(eduAudienceArray);
  }, [olCat, alCat, undergraduateCat, postgraduateCat]);

  useEffect(() => {
    let ageAudienceArray = [];
    if (ageGroup_13_15) {
      ageAudienceArray.push("ageGroup_13_15");
    }
    if (ageGroup_16_18) {
      ageAudienceArray.push("ageGroup_16_18");
    }
    if (ageGroup_19_25) {
      ageAudienceArray.push("ageGroup_19_25");
    }
    if (ageGroup_26_35) {
      ageAudienceArray.push("ageGroup_26_35");
    }
    if (ageGroup_36_60) {
      ageAudienceArray.push("ageGroup_36_60");
    }
    if (ageGroup_over_60) {
      ageAudienceArray.push("ageGroup_over_60");
    }
    setAgeAudience(ageAudienceArray);
  }, [
    ageGroup_13_15,
    ageGroup_16_18,
    ageGroup_19_25,
    ageGroup_26_35,
    ageGroup_36_60,
    ageGroup_over_60,
  ]);

  useEffect(() => {
    let regionAudienceArray = [];
    if (western) {
      regionAudienceArray.push("westernProvince");
    }
    if (uva) {
      regionAudienceArray.push("uvaProvince");
    }
    if (sabaragamuwa) {
      regionAudienceArray.push("sabaragamuwaProvince");
    }
    if (central) {
      regionAudienceArray.push("centralProvince");
    }
    if (nothern) {
      regionAudienceArray.push("nothernProvince");
    }
    if (northernWestern) {
      regionAudienceArray.push("northernWesternProvince");
    }
    if (southern) {
      regionAudienceArray.push("southernProvince");
    }
    if (eastern) {
      regionAudienceArray.push("easternProvince");
    }
    if (northCentral) {
      regionAudienceArray.push("northCentralProvince");
    }
    setRegionAudience(regionAudienceArray);
  }, [
    western,
    uva,
    sabaragamuwa,
    central,
    nothern,
    northernWestern,
    southern,
    eastern,
    northCentral,
  ]);

  useEffect(() => {
    let languageAudienceArray = [];
    if (sinhala) {
      languageAudienceArray.push("sinhala");
    }
    if (tamil) {
      languageAudienceArray.push("tamil");
    }
    if (english) {
      languageAudienceArray.push("english");
    }
    setLanguageAudience(languageAudienceArray);
  }, [sinhala, tamil, english]);

  useEffect(() => {
    let genderAudienceArray = [];
    if (male) {
      genderAudienceArray.push("male");
    }
    if (female) {
      genderAudienceArray.push("female");
    }
    setGenderAudience(genderAudienceArray);
  }, [male, female]);

  // update getPromoterList request body
  useEffect(() => {
    setCampaignDataRequest({
      platform: platform,
      minAccessibleViews: viewsFromEach,
      educationAudience: educationAudience,
      ageAudience: ageAudience,
      regionalAudience: regionAudience,
      languageAudience: languageAudience,
      genderAudience: genderAudience,
      responseCount: numOfPromoters * 2,
      state: "ACTIVE",
    });
  }, [
    platform,
    educationAudience,
    ageAudience,
    regionAudience,
    languageAudience,
    genderAudience,
    viewsFromEach,
    numOfPromoters,
  ]);

  const dispatch = useDispatch();

  // getPromoterList request
  const sendRequestToGetPromotersList = () => {
    let apiCall = PromoterService.getPromotersList(campaignDataRequest);
    apiCall.then((response) => {
      if (response) {
        response = response.data;
        dispatch(
          changePromoterListResponse({
            promoterListResponse: response,
          })
        );
      }
    });
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  useEffect(() => {
    setActiveStep(ongoingStep);
  }, [ongoingStep])

  // useEffect(() => {
  //   setOngoingStep(activeStep);
  // }, [activeStep])

  const isStepOptional = (step) => {
    // step === 5, since there are no optionals
    return step === 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      if (platform !== "") {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        dispatch(
          showAlert({
            message: "Please select the campaign media",
            isVisible: true,
            severity: "warning",
          })
        );
      }
    }

    if (activeStep === 1) {

      if (selectedAdvertisements.length > 0) {
        sendRequestToGetPromotersList();
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        dispatch(
          showAlert({
            message: "Please submit your advertisements",
            isVisible: true,
            severity: "warning",
          })
        );
      }
    }

    if (activeStep === 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    if (activeStep === 3) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log("active step 3 called");

      const currentTime = dayjs();

      const saveCampaignRequestBody = {
        clientId: userId,
        platform: platform,
        selectedAdvertisements: selectedAdvertisements,
        finalizedExpectedViewsAmount: finalizedExpectedViewsAmount,
        viewsFromEach: viewsFromEach,
        numberOfPromoterSelections: numberOfPromoterSelections,
        selectedPromoterIdList: selectedPromoterIdList,
        systemFee: systemFee,
        campaignCost: finalizedCampaignCost,
        createdTime: currentTime.format(),
        state: "ACTIVE",
      };

      let apiCall = CampaignService.saveCampaign(saveCampaignRequestBody);
      apiCall.then((response) => {
        if (response) {
          response = response.data;
          if (response.responseCode === "00") {
///  payments working without validating
            const paymentInfo = {
              userId: userId,
              dateTime: currentTime.format(),
              senderRole: "CLIENT",
              senderID: userId,
              purpose: "CREATE_CAMPAIGN",
              campaignId: response.campaign._id,
              receiverId: "HOLD_IN_SYSTEM",
              amount: finalizedCampaignCost,
              state: "ACTIVE",
            };
      
            const apiCallSavePayment = PaymentService.savePayment(paymentInfo);
            apiCallSavePayment.then((response) => {
              if(response){
                response = response.data;
                if(response.responseCode === "00"){
                  console.log("save promoter response",response)
                }
              }
            })
////
            const responsePromoterIdList =
              response.campaign.selectedPromoterIdList;

            console.log("response is ", response);

            responsePromoterIdList.map((item) => {
              const promoterCampaignRequestBody = {
                clientId: userId,
                promoterId: item,
                campaignId: response.campaign._id,
                state: "AVAILABLE",
                paymentApproved: false,
              };

              let apiCallSecondary =
                PromoterCampaignService.savePromoterCampaign(
                  promoterCampaignRequestBody
                );
              apiCallSecondary.then((responseSecondary) => {
                if (responseSecondary) {
                  console.log(responseSecondary);
                }
              });

              return 0;
            });
          }
        }
      });
    }

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    dispatch(clearCampaign());
    setActiveStep(0);
  };

  return (
    <Paper
      className="CreateCampaignStepper"
      elevation={3}
      sx={{
        p: 3,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Stepper
          sx={{ display: { xs: "none", lg: "flex" } }}
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Create New Campaign</Button>
            </Box>
            
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Active Step */}
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {activeStep === 0 && <SelectAudience />}
            {activeStep === 1 && <UploadAdvertisement />}
            {activeStep === 2 && <SelectPromoters />}
            {activeStep === 3 && <CampaignPayment />}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, color: "secondary.main" }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Paper>
  );
}

export default CreateCampaignStepper;
