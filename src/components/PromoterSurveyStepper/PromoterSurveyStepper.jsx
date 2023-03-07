import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AudienceDetails from "../AudienceDetails/AudienceDetails";
import PersonalInfoForm from "../PersonalInfoFprm/PersonalInfoForm";
import PromoterDeclaration from "../PromoterDeclaration/PromoterDeclaration";
import { promoterActiveStep } from "../../store/reducers/activeStep.slice";
import { useState } from "react";
import { useEffect } from "react";
import PromoterService from "../../api/services/PromoterService";

const steps = [
  "Personal Information",
  "Audience Details",
  "Promoter Declaration ",
];

function PromoterSurveyStepper() {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    // step === 5, since there are no optionals
    return step === 5;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const { userId } = useSelector((state) => state.login);
  const {
    fullName,
    nameWithInit,
    dob,
    gender,
    nic,
    address,
    postcode,
    mobile,
    province,
    language,
    educationalCategory,
    platforms,
    audience,
  } = useSelector((state) => state.savePromoter);

  const [socialMediaList, setSocialMediaList] = useState([]);
  const [promoterGenderAudienceList, setPromoterGenderAudienceList] = useState(
    []
  );

  const [promoterAudienceCategoryList, setPromoterAudienceCategoryList] =
    useState([]);

  useEffect(() => {
    setPromoterAudienceCategoryList([]);
  }, [platforms.whatsapp.whatsappChecked]);

  const [categoryObj, setCategoryObj] = useState({
    platform: "",
    categoryType: "",
    category: "",
    count: 0,
  });

  useEffect(() => {
    setSocialMediaList([
      {
        platform: "whatsapp",
        accessibleViewsCount: platforms.whatsapp.minAccessibleViews,
      },
      {
        platform: "facebook",
        accessibleViewsCount: platforms.facebook.minAccessibleViews,
      },
      {
        platform: "instagram",
        accessibleViewsCount: platforms.instagram.minAccessibleViews,
      },
    ]);

    setPromoterGenderAudienceList([
      {
        platform: "whatsapp",
        malePercentage: audience.whatsapp.genderAudience.malePercentage,
        femalePercentage: audience.whatsapp.genderAudience.femalePercentage,
      },
      {
        platform: "facebook",
        malePercentage: audience.facebook.genderAudience.malePercentage,
        femalePercentage: audience.facebook.genderAudience.femalePercentage,
      },
      {
        platform: "instagram",
        malePercentage: audience.instagram.genderAudience.malePercentage,
        femalePercentage: audience.instagram.genderAudience.femalePercentage,
      },
    ]);

    // for whatsapp audience //

    // setPromoterAudienceCategoryList for whatsapp on age
    audience.whatsapp.ageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for whatsapp on education
    audience.whatsapp.educationCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for whatsapp on region
    audience.whatsapp.regionCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for whatsapp on language
    audience.whatsapp.languageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "whatsapp",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "whatsapp"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // for facebook audience //

    // setPromoterAudienceCategoryList for facebook on age
    audience.facebook.ageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "facebook",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "facebook",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for whatsapp
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for facebook on education
    audience.facebook.educationCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "facebook",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "facebook",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for facebook on region
    audience.facebook.regionCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "facebook",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "facebook",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for facebook on language
    audience.facebook.languageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "facebook",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "facebook",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for facebook
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "facebook"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // for instagram audience //

    // setPromoterAudienceCategoryList for instagram on age
    audience.instagram.ageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "instagram",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "instagram",
          categoryType: "age",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for instagram on education
    audience.instagram.educationCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "instagram",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "instagram",
          categoryType: "education",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for instagram on region
    audience.instagram.regionCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "instagram",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "instagram",
          categoryType: "region",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });

    // setPromoterAudienceCategoryList for instagram on language
    audience.instagram.languageCategories.forEach((element) => {
      if (element.checked) {
        let catObj = {
          platform: "instagram",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      } else if (element.checked === false) {
        let catObj = {
          platform: "instagram",
          categoryType: "language",
          category: element.categoryName,
          count: element.count,
        };

        // function to check same categories for instagram
        const isSameCategory = (element) => {
          if (
            element.category === catObj.category &&
            element.platform === "instagram"
          ) {
            return true;
          } else {
            return false;
          }
        };

        let chqIndex = promoterAudienceCategoryList.findIndex(isSameCategory);

        if (chqIndex === -1) {
          promoterAudienceCategoryList.push(catObj);
        } else {
          promoterAudienceCategoryList[chqIndex] = catObj;
        }
      }
    });
  }, [audience]);

  // initial promoterInfo request body
  const [promoterInfo, setPromoterInfo] = useState({
    userId: userId,
    fullName: fullName,
    nameWithInit: nameWithInit,
    dob: dob,
    gender: gender,
    age: null,
    nic: nic,
    address: address,
    postcode: postcode,
    province: province,
    language: language,
    educationalCategory: educationalCategory,
    socialMediaList: socialMediaList,
    promoterGenderAudienceList: promoterGenderAudienceList,
    promoterAudienceCategoryList: promoterAudienceCategoryList,
    state: "ACTIVE",
  });

  // set promoter info request
  useEffect(() => {
    setPromoterInfo({
      userId: userId,
      fullName: fullName,
      nameWithInit: nameWithInit,
      dob: dob,
      gender: gender,
      age: null,
      nic: nic,
      address: address,
      postcode: postcode,
      province: province,
      language: language,
      educationalCategory: educationalCategory,
      socialMediaList: socialMediaList,
      promoterGenderAudienceList: promoterGenderAudienceList,
      promoterAudienceCategoryList: promoterAudienceCategoryList,
      state: "ACTIVE",
    });
  }, [promoterAudienceCategoryList]);

  // console.log(promoterInfo)

  const savePromoter = () => {
    let apiCall = PromoterService.savePromoter({
      ...promoterInfo,
      userId: userId,
      fullName: fullName,
      nameWithInit: nameWithInit,
      dob: dob,
      gender: gender,
      age: null,
      nic: nic,
      address: address,
      postcode: postcode,
      province: province,
      language: language,
      educationalCategory: educationalCategory,
      socialMediaList: socialMediaList,
      promoterGenderAudienceList: promoterGenderAudienceList,
      promoterAudienceCategoryList: promoterAudienceCategoryList,
      state: "ACTIVE",
    });
    apiCall.then((response) => {
      if (response) {
        response = response.data;
        console.log("response is ", response);
      }
    });
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      console.log("Activity Finished");
      savePromoter();
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  useEffect(() => {
    dispatch(
      promoterActiveStep({
        promoterStepperActive: activeStep,
      })
    );
  }, [activeStep]);

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
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Active Step */}
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

            {activeStep === 0 && <PersonalInfoForm />}
            {activeStep === 1 && <AudienceDetails />}
            {activeStep === 2 && <PromoterDeclaration />}

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

export default PromoterSurveyStepper;
