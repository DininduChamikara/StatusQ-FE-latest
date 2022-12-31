import { Man, Woman } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePromoterAudience } from "../../store/reducers/savePromoter";
import CheckAndCountRow from "../CheckAndCountRow/CheckAndCountRow";
import DiscreteSlider from "../DiscreteSlider/DiscreteSlider";

function AudienceDetails() {
  const { audience } = useSelector((state) => state.savePromoter);

  const [whatsappMaleViews, setWhatsAppMaleViews] = useState(50);
  const [facebookMaleViews, setFacebookMaleViews] = useState(50);
  const [instagramMaleViews, setInstagramMaleViews] = useState(50);

  // data arrays for whatsapp
  const [whatsappAgeCategories, setWhatsappAgeCategories] = useState([]);
  const [whatsappEducationCategories, setWhatsappEducationalCategories] =
    useState([]);
  const [whatsappProvinces, setWhatsappProvinces] = useState([]);
  const [whatsappLanguageCategories, setWhatsappLanguageCategories] = useState(
    []
  );

  // data arrays for facebook
  const [facebookAgeCategories, setFacebookAgeCategories] = useState([]);
  const [facebookEducationCategories, setFacebookEducationalCategories] =
    useState([]);
  const [facebookProvinces, setFacebookProvinces] = useState([]);
  const [facebookLanguageCategories, setFacebookLanguageCategories] = useState(
    []
  );

  // data arrays for instagram
  const [instagramAgeCategories, setInstagramAgeCategories] = useState([]);
  const [instagramEducationCategories, setInstagramEducationalCategories] =
    useState([]);
  const [instagramProvinces, setInstagramProvinces] = useState([]);
  const [instagramLanguageCategories, setInstagramLanguageCategories] =
    useState([]);

  // set whatsapp age categories
  const [whatsappAgeLevel_13_15, setWhatsappAgeLevel_13_15] = useState({
    categoryName: "ageLevel_13_15",
    checked: audience.whatsapp.ageCategories[0]?.checked,
    count: audience.whatsapp.ageCategories[0]?.count,
  });
  const [whatsappAgeLevel_16_18, setWhatsappAgeLevel_16_18] = useState({
    categoryName: "ageLevel_16_18",
    checked: audience.whatsapp.ageCategories[1]?.checked,
    count: audience.whatsapp.ageCategories[1]?.count,
  });
  const [whatsappAgeLevel_19_25, setWhatsappAgeLevel_19_25] = useState({
    categoryName: "ageLevel_19_25",
    checked: audience.whatsapp.ageCategories[2]?.checked,
    count: audience.whatsapp.ageCategories[2]?.count,
  });
  const [whatsappAgeLevel_26_35, setWhatsappAgeLevel_26_35] = useState({
    categoryName: "ageLevel_26_35",
    checked: audience.whatsapp.ageCategories[3]?.checked,
    count: audience.whatsapp.ageCategories[3]?.count,
  });
  const [whatsappAgeLevel_36_60, setWhatsappAgeLevel_36_60] = useState({
    categoryName: "ageLevel_36_60",
    checked: audience.whatsapp.ageCategories[4]?.checked,
    count: audience.whatsapp.ageCategories[4]?.count,
  });
  const [whatsappAgeLevel_over_60, setWhatsappAgeLevel_over_60] = useState({
    categoryName: "ageLevel_over_60",
    checked: audience.whatsapp.ageCategories[5]?.checked,
    count: audience.whatsapp.ageCategories[5]?.count,
  });

  // set facebook age categories
  const [facebookAgeLevel_13_15, setFacebookAgeLevel_13_15] = useState({
    categoryName: "ageLevel_13_15",
    checked: audience.facebook.ageCategories[0]?.checked,
    count: audience.facebook.ageCategories[0]?.count,
  });
  const [facebookAgeLevel_16_18, setFacebookAgeLevel_16_18] = useState({
    categoryName: "ageLevel_16_18",
    checked: audience.facebook.ageCategories[1]?.checked,
    count: audience.facebook.ageCategories[1]?.count,
  });
  const [facebookAgeLevel_19_25, setFacebookAgeLevel_19_25] = useState({
    categoryName: "ageLevel_19_25",
    checked: audience.facebook.ageCategories[2]?.checked,
    count: audience.facebook.ageCategories[2]?.count,
  });
  const [facebookAgeLevel_26_35, setFacebookAgeLevel_26_35] = useState({
    categoryName: "ageLevel_26_35",
    checked: audience.facebook.ageCategories[3]?.checked,
    count: audience.facebook.ageCategories[3]?.count,
  });
  const [facebookAgeLevel_36_60, setFacebookAgeLevel_36_60] = useState({
    categoryName: "ageLevel_36_60",
    checked: audience.facebook.ageCategories[4]?.checked,
    count: audience.facebook.ageCategories[4]?.count,
  });
  const [facebookAgeLevel_over_60, setFacebookAgeLevel_over_60] = useState({
    categoryName: "ageLevel_over_60",
    checked: audience.facebook.ageCategories[5]?.checked,
    count: audience.facebook.ageCategories[5]?.count,
  });

  // set instagram age categories
  const [instagramAgeLevel_13_15, setInstagramAgeLevel_13_15] = useState({
    categoryName: "ageLevel_13_15",
    checked: audience.instagram.ageCategories[0]?.checked,
    count: audience.instagram.ageCategories[0]?.count,
  });
  const [instagramAgeLevel_16_18, setInstagramAgeLevel_16_18] = useState({
    categoryName: "ageLevel_16_18",
    checked: audience.instagram.ageCategories[1]?.checked,
    count: audience.instagram.ageCategories[1]?.count,
  });
  const [instagramAgeLevel_19_25, setInstagramAgeLevel_19_25] = useState({
    categoryName: "ageLevel_19_25",
    checked: audience.instagram.ageCategories[2]?.checked,
    count: audience.instagram.ageCategories[2]?.count,
  });
  const [instagramAgeLevel_26_35, setInstagramAgeLevel_26_35] = useState({
    categoryName: "ageLevel_26_35",
    checked: audience.instagram.ageCategories[3]?.checked,
    count: audience.instagram.ageCategories[3]?.count,
  });
  const [instagramAgeLevel_36_60, setInstagramAgeLevel_36_60] = useState({
    categoryName: "ageLevel_36_60",
    checked: audience.instagram.ageCategories[4]?.checked,
    count: audience.instagram.ageCategories[4]?.count,
  });
  const [instagramAgeLevel_over_60, setInstagramAgeLevel_over_60] = useState({
    categoryName: "ageLevel_over_60",
    checked: audience.instagram.ageCategories[5]?.checked,
    count: audience.instagram.ageCategories[5]?.count,
  });

  // set whatsapp educational categories
  const [whatsappOl_cat, setWhatsappOlCat] = useState({
    categoryName: "ol_cat",
    checked: audience.whatsapp.educationCategories[0]?.checked,
    count: audience.whatsapp.educationCategories[0]?.count,
  });
  const [whatsappAl_cat, setWhatsappAlCat] = useState({
    categoryName: "al_cat",
    checked: audience.whatsapp.educationCategories[1]?.checked,
    count: audience.whatsapp.educationCategories[1]?.count,
  });
  const [whatsappUndergraduate_cat, setWhatsappUndergraduateCat] = useState({
    categoryName: "undergraduate_cat",
    checked: audience.whatsapp.educationCategories[2]?.checked,
    count: audience.whatsapp.educationCategories[2]?.count,
  });
  const [whatsappPostgraduate_cat, setWhatsappPostgraduateCat] = useState({
    categoryName: "postgraduate_cat",
    checked: audience.whatsapp.educationCategories[3]?.checked,
    count: audience.whatsapp.educationCategories[3]?.count,
  });
  const [whatsappOtherEdu_cat, setWhatsappOtherEduCat] = useState({
    categoryName: "otherEdu_cat",
    checked: audience.whatsapp.educationCategories[4]?.checked,
    count: audience.whatsapp.educationCategories[4]?.count,
  });

  // set facebook educational categories
  const [facebookOl_cat, setFacebookOlCat] = useState({
    categoryName: "ol_cat",
    checked: audience.facebook.educationCategories[0]?.checked,
    count: audience.facebook.educationCategories[0]?.count,
  });
  const [facebookAl_cat, setFacebookAlCat] = useState({
    categoryName: "al_cat",
    checked: audience.facebook.educationCategories[1]?.checked,
    count: audience.facebook.educationCategories[1]?.count,
  });
  const [facebookUndergraduate_cat, setFacebookUndergraduateCat] = useState({
    categoryName: "undergraduate_cat",
    checked: audience.facebook.educationCategories[2]?.checked,
    count: audience.facebook.educationCategories[2]?.count,
  });
  const [facebookPostgraduate_cat, setFacebookPostgraduateCat] = useState({
    categoryName: "postgraduate_cat",
    checked: audience.facebook.educationCategories[3]?.checked,
    count: audience.facebook.educationCategories[3]?.count,
  });
  const [facebookOtherEdu_cat, setFacebookOtherEduCat] = useState({
    categoryName: "otherEdu_cat",
    checked: audience.facebook.educationCategories[4]?.checked,
    count: audience.facebook.educationCategories[4]?.count,
  });

  // set instagram educational categories
  const [instagramOl_cat, setInstagramOlCat] = useState({
    categoryName: "ol_cat",
    checked: audience.instagram.educationCategories[0]?.checked,
    count: audience.instagram.educationCategories[0]?.count,
  });
  const [instagramAl_cat, setInstagramAlCat] = useState({
    categoryName: "al_cat",
    checked: audience.instagram.educationCategories[1]?.checked,
    count: audience.instagram.educationCategories[1]?.count,
  });
  const [instagramUndergraduate_cat, setInstagramUndergraduateCat] = useState({
    categoryName: "undergraduate_cat",
    checked: audience.instagram.educationCategories[2]?.checked,
    count: audience.instagram.educationCategories[2]?.count,
  });
  const [instagramPostgraduate_cat, setInstagramPostgraduateCat] = useState({
    categoryName: "postgraduate_cat",
    checked: audience.instagram.educationCategories[3]?.checked,
    count: audience.instagram.educationCategories[3]?.count,
  });
  const [instagramOtherEdu_cat, setInstagramOtherEduCat] = useState({
    categoryName: "otherEdu_cat",
    checked: audience.instagram.educationCategories[4]?.checked,
    count: audience.instagram.educationCategories[4]?.count,
  });

  // set whatsapp province categories
  const [whatsappWesternProvince, setWhatsappWesternProvince] = useState({
    categoryName: "westernProvince",
    checked: audience.whatsapp.regionCategories[0]?.checked,
    count: audience.whatsapp.regionCategories[0]?.count,
  });
  const [whatsappCentralProvince, setWhatsappCentralProvince] = useState({
    categoryName: "centralProvince",
    checked: audience.whatsapp.regionCategories[1]?.checked,
    count: audience.whatsapp.regionCategories[1]?.count,
  });
  const [whatsappSouthernProvince, setWhatsappSouthernProvince] = useState({
    categoryName: "southernProvince",
    checked: audience.whatsapp.regionCategories[2]?.checked,
    count: audience.whatsapp.regionCategories[2]?.count,
  });
  const [whatsappUwaProvince, setWhatsappUwaProvince] = useState({
    categoryName: "uwaProvince",
    checked: audience.whatsapp.regionCategories[3]?.checked,
    count: audience.whatsapp.regionCategories[3]?.count,
  });
  const [whatsappNothernProvince, setWhatsappNothernProvince] = useState({
    categoryName: "nothernProvince",
    checked: audience.whatsapp.regionCategories[4]?.checked,
    count: audience.whatsapp.regionCategories[4]?.count,
  });
  const [whatsappEasternProvince, setWhatsappEasternProvince] = useState({
    categoryName: "easternProvince",
    checked: audience.whatsapp.regionCategories[5]?.checked,
    count: audience.whatsapp.regionCategories[5]?.count,
  });
  const [whatsappSabaragamuwaProvince, setWhatsappSabaragamuwaProvince] =
    useState({
      categoryName: "sabaragamuwaProvince",
      checked: audience.whatsapp.regionCategories[6]?.checked,
      count: audience.whatsapp.regionCategories[6]?.count,
    });
  const [whatsappNorthernWesternProvince, setWhatsappNorthernWesternProvince] =
    useState({
      categoryName: "northernWesternProvince",
      checked: audience.whatsapp.regionCategories[7]?.checked,
      count: audience.whatsapp.regionCategories[7]?.count,
    });
  const [whatsappNorthCentralProvince, setWhatsappNorthCentralProvince] =
    useState({
      categoryName: "northCentralProvince",
      checked: audience.whatsapp.regionCategories[8]?.checked,
      count: audience.whatsapp.regionCategories[8]?.count,
    });

  // set facebook province categories
  const [facebookWesternProvince, setFacebookWesternProvince] = useState({
    categoryName: "westernProvince",
    checked: audience.facebook.regionCategories[0]?.checked,
    count: audience.facebook.regionCategories[0]?.count,
  });
  const [facebookCentralProvince, setFacebookCentralProvince] = useState({
    categoryName: "centralProvince",
    checked: audience.facebook.regionCategories[1]?.checked,
    count: audience.facebook.regionCategories[1]?.count,
  });
  const [facebookSouthernProvince, setFacebookSouthernProvince] = useState({
    categoryName: "southernProvince",
    checked: audience.facebook.regionCategories[2]?.checked,
    count: audience.facebook.regionCategories[2]?.count,
  });
  const [facebookUwaProvince, setFacebookUwaProvince] = useState({
    categoryName: "uwaProvince",
    checked: audience.facebook.regionCategories[3]?.checked,
    count: audience.facebook.regionCategories[3]?.count,
  });
  const [facebookNothernProvince, setFacebookNothernProvince] = useState({
    categoryName: "nothernProvince",
    checked: audience.facebook.regionCategories[4]?.checked,
    count: audience.facebook.regionCategories[4]?.count,
  });
  const [facebookEasternProvince, setFacebookEasternProvince] = useState({
    categoryName: "easternProvince",
    checked: audience.facebook.regionCategories[5]?.checked,
    count: audience.facebook.regionCategories[5]?.count,
  });
  const [facebookSabaragamuwaProvince, setFacebookSabaragamuwaProvince] =
    useState({
      categoryName: "sabaragamuwaProvince",
      checked: audience.facebook.regionCategories[6]?.checked,
      count: audience.facebook.regionCategories[6]?.count,
    });
  const [facebookNorthernWesternProvince, setFacebookNorthernWesternProvince] =
    useState({
      categoryName: "northernWesternProvince",
      checked: audience.facebook.regionCategories[7]?.checked,
      count: audience.facebook.regionCategories[7]?.count,
    });
  const [facebookNorthCentralProvince, setFacebookNorthCentralProvince] =
    useState({
      categoryName: "northCentralProvince",
      checked: audience.facebook.regionCategories[8]?.checked,
      count: audience.facebook.regionCategories[8]?.count,
    });

  // set instagram province categories
  const [instagramWesternProvince, setInstagramWesternProvince] = useState({
    categoryName: "westernProvince",
    checked: audience.instagram.regionCategories[0]?.checked,
    count: audience.instagram.regionCategories[0]?.count,
  });
  const [instagramCentralProvince, setInstagramCentralProvince] = useState({
    categoryName: "centralProvince",
    checked: audience.instagram.regionCategories[1]?.checked,
    count: audience.instagram.regionCategories[1]?.count,
  });
  const [instagramSouthernProvince, setInstagramSouthernProvince] = useState({
    categoryName: "southernProvince",
    checked: audience.instagram.regionCategories[2]?.checked,
    count: audience.instagram.regionCategories[2]?.count,
  });
  const [instagramUwaProvince, setInstagramUwaProvince] = useState({
    categoryName: "uwaProvince",
    checked: audience.instagram.regionCategories[3]?.checked,
    count: audience.instagram.regionCategories[3]?.count,
  });
  const [instagramNothernProvince, setInstagramNothernProvince] = useState({
    categoryName: "nothernProvince",
    checked: audience.instagram.regionCategories[4]?.checked,
    count: audience.instagram.regionCategories[4]?.count,
  });
  const [instagramEasternProvince, setInstagramEasternProvince] = useState({
    categoryName: "easternProvince",
    checked: audience.instagram.regionCategories[5]?.checked,
    count: audience.instagram.regionCategories[5]?.count,
  });
  const [instagramSabaragamuwaProvince, setInstagramSabaragamuwaProvince] =
    useState({
      categoryName: "sabaragamuwaProvince",
      checked: audience.instagram.regionCategories[6]?.checked,
      count: audience.instagram.regionCategories[6]?.count,
    });
  const [
    instagramNorthernWesternProvince,
    setInstagramNorthernWesternProvince,
  ] = useState({
    categoryName: "northernWesternProvince",
    checked: audience.instagram.regionCategories[7]?.checked,
    count: audience.instagram.regionCategories[7]?.count,
  });
  const [instagramNorthCentralProvince, setInstagramNorthCentralProvince] =
    useState({
      categoryName: "northCentralProvince",
      checked: audience.instagram.regionCategories[8]?.checked,
      count: audience.instagram.regionCategories[8]?.count,
    });

  // set whatsapp language categories
  const [whatsappSinhala, setWhatsappSinhala] = useState({
    categoryName: "sinhala",
    checked: audience.whatsapp.languageCategories[0]?.checked,
    count: audience.whatsapp.languageCategories[0]?.count,
  });
  const [whatsappEnglish, setWhatsappEnglish] = useState({
    categoryName: "english",
    checked: audience.whatsapp.languageCategories[1]?.checked,
    count: audience.whatsapp.languageCategories[1]?.count,
  });
  const [whatsappTamil, setWhatsappTamil] = useState({
    categoryName: "tamil",
    checked: audience.whatsapp.languageCategories[2]?.checked,
    count: audience.whatsapp.languageCategories[2]?.count,
  });

  // set facebook language categories
  const [facebookSinhala, setFacebookSinhala] = useState({
    categoryName: "sinhala",
    checked: audience.facebook.languageCategories[0]?.checked,
    count: audience.facebook.languageCategories[0]?.count,
  });
  const [facebookEnglish, setFacebookEnglish] = useState({
    categoryName: "english",
    checked: audience.facebook.languageCategories[1]?.checked,
    count: audience.facebook.languageCategories[1]?.count,
  });
  const [facebookTamil, setFacebookTamil] = useState({
    categoryName: "tamil",
    checked: audience.facebook.languageCategories[2]?.checked,
    count: audience.facebook.languageCategories[2]?.count,
  });

  // set instagram language categories
  const [instagramSinhala, setInstagramSinhala] = useState({
    categoryName: "sinhala",
    checked: audience.instagram.languageCategories[0]?.checked,
    count: audience.instagram.languageCategories[0]?.count,
  });
  const [instagramEnglish, setInstagramEnglish] = useState({
    categoryName: "english",
    checked: audience.instagram.languageCategories[1]?.checked,
    count: audience.instagram.languageCategories[1]?.count,
  });
  const [instagramTamil, setInstagramTamil] = useState({
    categoryName: "tamil",
    checked: audience.instagram.languageCategories[2]?.checked,
    count: audience.instagram.languageCategories[2]?.count,
  });

  // set whatsapp audience data changes storing arrays
  useEffect(() => {
    if (platforms.whatsapp.whatsappChecked) {
      setWhatsappAgeCategories([
        whatsappAgeLevel_13_15,
        whatsappAgeLevel_16_18,
        whatsappAgeLevel_19_25,
        whatsappAgeLevel_26_35,
        whatsappAgeLevel_36_60,
        whatsappAgeLevel_over_60,
      ]);
      setWhatsappEducationalCategories([
        whatsappOl_cat,
        whatsappAl_cat,
        whatsappUndergraduate_cat,
        whatsappPostgraduate_cat,
        whatsappOtherEdu_cat,
      ]);
      setWhatsappProvinces([
        whatsappWesternProvince,
        whatsappCentralProvince,
        whatsappSouthernProvince,
        whatsappUwaProvince,
        whatsappNothernProvince,
        whatsappEasternProvince,
        whatsappSabaragamuwaProvince,
        whatsappNorthernWesternProvince,
        whatsappNorthCentralProvince,
      ]);
      setWhatsappLanguageCategories([
        whatsappSinhala,
        whatsappEnglish,
        whatsappTamil,
      ]);
    } else {
      setWhatsappAgeCategories([]);
      setWhatsappEducationalCategories([]);
      setWhatsappProvinces([]);
      setWhatsappLanguageCategories([]);
    }
  }, [
    whatsappAgeLevel_13_15,
    whatsappAgeLevel_16_18,
    whatsappAgeLevel_19_25,
    whatsappAgeLevel_26_35,
    whatsappAgeLevel_36_60,
    whatsappAgeLevel_over_60,
    whatsappOl_cat,
    whatsappAl_cat,
    whatsappUndergraduate_cat,
    whatsappPostgraduate_cat,
    whatsappOtherEdu_cat,
    whatsappWesternProvince,
    whatsappWesternProvince,
    whatsappCentralProvince,
    whatsappSouthernProvince,
    whatsappUwaProvince,
    whatsappNothernProvince,
    whatsappEasternProvince,
    whatsappSabaragamuwaProvince,
    whatsappNorthernWesternProvince,
    whatsappNorthCentralProvince,
    whatsappSinhala,
    whatsappEnglish,
    whatsappTamil,
  ]);

  // set facebook audience data changes storing arrays
  useEffect(() => {
    if (platforms.facebook.facebookChecked) {
      setFacebookAgeCategories([
        facebookAgeLevel_13_15,
        facebookAgeLevel_16_18,
        facebookAgeLevel_19_25,
        facebookAgeLevel_26_35,
        facebookAgeLevel_36_60,
        facebookAgeLevel_over_60,
      ]);
      setFacebookEducationalCategories([
        facebookOl_cat,
        facebookAl_cat,
        facebookUndergraduate_cat,
        facebookPostgraduate_cat,
        facebookOtherEdu_cat,
      ]);
      setFacebookProvinces([
        facebookWesternProvince,
        facebookCentralProvince,
        facebookSouthernProvince,
        facebookUwaProvince,
        facebookNothernProvince,
        facebookEasternProvince,
        facebookSabaragamuwaProvince,
        facebookNorthernWesternProvince,
        facebookNorthCentralProvince,
      ]);
      setFacebookLanguageCategories([
        facebookSinhala,
        facebookEnglish,
        facebookTamil,
      ]);
    } else {
      setFacebookAgeCategories([]);
      setFacebookEducationalCategories([]);
      setFacebookProvinces([]);
      setFacebookLanguageCategories([]);
    }
  }, [
    facebookAgeLevel_13_15,
    facebookAgeLevel_16_18,
    facebookAgeLevel_19_25,
    facebookAgeLevel_26_35,
    facebookAgeLevel_36_60,
    facebookAgeLevel_over_60,
    facebookOl_cat,
    facebookAl_cat,
    facebookUndergraduate_cat,
    facebookPostgraduate_cat,
    facebookOtherEdu_cat,
    facebookWesternProvince,
    facebookWesternProvince,
    facebookCentralProvince,
    facebookSouthernProvince,
    facebookUwaProvince,
    facebookNothernProvince,
    facebookEasternProvince,
    facebookSabaragamuwaProvince,
    facebookNorthernWesternProvince,
    facebookNorthCentralProvince,
    facebookSinhala,
    facebookEnglish,
    facebookTamil,
  ]);

  // set instagram audience data changes storing arrays
  useEffect(() => {
    if (platforms.instagram.instagramChecked) {
      setInstagramAgeCategories([
        instagramAgeLevel_13_15,
        instagramAgeLevel_16_18,
        instagramAgeLevel_19_25,
        instagramAgeLevel_26_35,
        instagramAgeLevel_36_60,
        instagramAgeLevel_over_60,
      ]);
      setInstagramEducationalCategories([
        instagramOl_cat,
        instagramAl_cat,
        instagramUndergraduate_cat,
        instagramPostgraduate_cat,
        instagramOtherEdu_cat,
      ]);
      setInstagramProvinces([
        instagramWesternProvince,
        instagramCentralProvince,
        instagramSouthernProvince,
        instagramUwaProvince,
        instagramNothernProvince,
        instagramEasternProvince,
        instagramSabaragamuwaProvince,
        instagramNorthernWesternProvince,
        instagramNorthCentralProvince,
      ]);
      setInstagramLanguageCategories([
        instagramSinhala,
        instagramEnglish,
        instagramTamil,
      ]);
    }else{
      setInstagramAgeCategories([]);
      setInstagramEducationalCategories([]);
      setInstagramProvinces([]);
      setInstagramLanguageCategories([]);
    }
  }, [
    instagramAgeLevel_13_15,
    instagramAgeLevel_16_18,
    instagramAgeLevel_19_25,
    instagramAgeLevel_26_35,
    instagramAgeLevel_36_60,
    instagramAgeLevel_over_60,
    instagramOl_cat,
    instagramAl_cat,
    instagramUndergraduate_cat,
    instagramPostgraduate_cat,
    instagramOtherEdu_cat,
    instagramWesternProvince,
    instagramWesternProvince,
    instagramCentralProvince,
    instagramSouthernProvince,
    instagramUwaProvince,
    instagramNothernProvince,
    instagramEasternProvince,
    instagramSabaragamuwaProvince,
    instagramNorthernWesternProvince,
    instagramNorthCentralProvince,
    instagramSinhala,
    instagramEnglish,
    instagramTamil,
  ]);

  const { platforms } = useSelector((state) => state.savePromoter);

  const [whatsappGenderPercentages, setWhatsappGenderPercentages] = useState({
    male: 0,
    female: 0,
  });

  const [facebookGenderPercentages, setFacebookGenderPercentages] = useState({
    male: 0,
    female: 0,
  });

  const [instagramGenderPercentages, setInstagramGenderPercentages] = useState({
    male: 0,
    female: 0,
  });

  useEffect(() => {
    if (platforms.whatsapp.whatsappChecked) {
      setWhatsappGenderPercentages({
        male: whatsappMaleViews,
        female: 100 - whatsappMaleViews,
      });
    }
    if (platforms.facebook.facebookChecked) {
      setFacebookGenderPercentages({
        male: facebookMaleViews,
        female: 100 - facebookMaleViews,
      });
    }
    if (platforms.instagram.instagramChecked) {
      setInstagramGenderPercentages({
        male: instagramMaleViews,
        female: 100 - instagramMaleViews,
      });
    }
  }, [whatsappMaleViews, facebookMaleViews, instagramMaleViews]);

  // initial state of promoterAudienceInfo
  const [promoterAudienceInfo, setPromoterAudienceInfo] = useState({
    whatsapp: {
      genderAudience: {
        malePercentage: audience.whatsapp.genderAudience.malePercentage,
        femalePercentage: audience.whatsapp.genderAudience.femalePercentage,
      },
      ageCategories: audience.whatsapp.ageCategories,
      educationCategories: [],
      regionCategories: [],
      languageCategories: [],
    },
    facebook: {
      genderAudience: {
        malePercentage: 0,
        femalePercentage: 0,
      },
      ageCategories: [],
      educationCategories: [],
      regionCategories: [],
      languageCategories: [],
    },
    instagram: {
      genderAudience: {
        malePercentage: 0,
        femalePercentage: 0,
      },
      ageCategories: [],
      educationCategories: [],
      regionCategories: [],
      languageCategories: [],
    },
  });

  // set promoter audience info object
  useEffect(() => {
    setPromoterAudienceInfo({
      whatsapp: {
        genderAudience: {
          malePercentage: whatsappGenderPercentages.male,
          femalePercentage: whatsappGenderPercentages.female,
        },
        ageCategories: whatsappAgeCategories,
        educationCategories: whatsappEducationCategories,
        regionCategories: whatsappProvinces,
        languageCategories: whatsappLanguageCategories,
      },
      facebook: {
        genderAudience: {
          malePercentage: facebookGenderPercentages.male,
          femalePercentage: facebookGenderPercentages.female,
        },
        ageCategories: facebookAgeCategories,
        educationCategories: facebookEducationCategories,
        regionCategories: facebookProvinces,
        languageCategories: facebookLanguageCategories,
      },
      instagram: {
        genderAudience: {
          malePercentage: instagramGenderPercentages.male,
          femalePercentage: instagramGenderPercentages.female,
        },
        ageCategories: instagramAgeCategories,
        educationCategories: instagramEducationCategories,
        regionCategories: instagramProvinces,
        languageCategories: instagramLanguageCategories,
      },
    });
  }, [
    whatsappGenderPercentages,
    facebookGenderPercentages,
    instagramGenderPercentages,
    whatsappAgeCategories,
    whatsappEducationCategories,
    whatsappProvinces,
    whatsappLanguageCategories,
    facebookAgeCategories,
    facebookEducationCategories,
    facebookProvinces,
    facebookLanguageCategories,
    instagramAgeCategories,
    instagramEducationCategories,
    instagramProvinces,
    instagramLanguageCategories,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changePromoterAudience({
        audience: promoterAudienceInfo,
      })
    );
  }, [promoterAudienceInfo]);

  return (
    <Box sx={{ my: 2 }}>
      <Paper variant="outlined" sx={{ width: "75vw", p: 1 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1, color:'primary.darker' }}>
          Your Social Media Audience
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "primary.light",
            mx: 1,
          }}
        >
          Give some weights on your openion,
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontStyle: "italic",
            color: "primary.darker",
            mx: 1,
            mb: 1,
          }}
        >
          (Approximate level of accuracy expected for below details)
        </Typography>
        <Divider />

        {/* question 01 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 2,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
              mx: 1,
            }}
          >
            01. Select the percentage of your social media audience on gender
          </Typography>
        </Box>

        {/* gender percentages */}
        {platforms.whatsapp.whatsappChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "secondary.dark" }}>
                  WhatsApp Audience
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  From my overall status views, approximately
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  {whatsappMaleViews}% get from males and{" "}
                  {100 - whatsappMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 2,
                  borderRadius: 2,
                  alignItems: "center",
                  borderColor:'primary.main',
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography color={"primary.dark"}>Male {whatsappMaleViews} %</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider
                    setViews={setWhatsAppMaleViews}
                    views={audience.whatsapp.genderAudience.malePercentage}
                  />
                </Box>
                <Woman />
                <Typography color={"primary.dark"}>{100 - whatsappMaleViews} % Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "secondary.dark" }}>
                  Facebook Audience
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  From my overall story views, approximately
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  {facebookMaleViews}% get from males and{" "}
                  {100 - facebookMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 2,
                  borderRadius: 2,
                  borderColor:'primary.main',
                  alignItems: "center",
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography color={"primary.dark"}>Male {facebookMaleViews} %</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider
                    setViews={setFacebookMaleViews}
                    views={audience.facebook.genderAudience.malePercentage}
                  />
                </Box>
                <Woman />
                <Typography color={"primary.dark"}>{100 - facebookMaleViews} % Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: 67,
              mt: 3,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                px: 1,
              }}
            >
              <Box>
                <Typography sx={{ color: "secondary.dark" }}>
                  Instagram Audience
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  From my overall story views, approximately
                </Typography>
                <Typography sx={{ color: "secondary.main", fontSize: "0.65rem" }}>
                  {instagramMaleViews}% get from males and{" "}
                  {100 - instagramMaleViews}% get from females
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "60%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: 2,
                  borderRadius: 2,
                  borderColor:'primary.main',
                  alignItems: "center",
                  p: 1,
                  px: 2,
                  ml: 1,
                }}
              >
                <Typography color={"primary.dark"}>Male {instagramMaleViews} %</Typography>
                <Man />
                <Box sx={{ mt: 1, mx: 1 }}>
                  <DiscreteSlider
                    setViews={setInstagramMaleViews}
                    views={audience.instagram.genderAudience.malePercentage}
                  />
                </Box>
                <Woman />
                <Typography color={"primary.dark"}>{100 - instagramMaleViews} % Female</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* question 02 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
              mx: 1,
            }}
          >
            02. Select the age levels you can promote
          </Typography>
        </Box>

        {platforms.whatsapp.whatsappChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_13_15}
              amount={whatsappAgeLevel_13_15}
              categoryName={"ageLevel_13_15"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_16_18}
              amount={whatsappAgeLevel_16_18}
              categoryName={"ageLevel_16_18"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_19_25}
              amount={whatsappAgeLevel_19_25}
              categoryName={"ageLevel_19_25"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_26_35}
              amount={whatsappAgeLevel_26_35}
              categoryName={"ageLevel_26_35"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_36_60}
              amount={whatsappAgeLevel_36_60}
              categoryName={"ageLevel_36_60"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
              setAmount={setWhatsappAgeLevel_over_60}
              amount={whatsappAgeLevel_over_60}
              categoryName={"ageLevel_over_60"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_13_15}
              amount={facebookAgeLevel_13_15}
              categoryName={"ageLevel_13_15"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_16_18}
              amount={facebookAgeLevel_16_18}
              categoryName={"ageLevel_16_18"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_19_25}
              amount={facebookAgeLevel_19_25}
              categoryName={"ageLevel_19_25"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_26_35}
              amount={facebookAgeLevel_26_35}
              categoryName={"ageLevel_26_35"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_36_60}
              amount={facebookAgeLevel_36_60}
              categoryName={"ageLevel_36_60"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
              setAmount={setFacebookAgeLevel_over_60}
              amount={facebookAgeLevel_over_60}
              categoryName={"ageLevel_over_60"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"13 - 15 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_13_15}
              amount={instagramAgeLevel_13_15}
              categoryName={"ageLevel_13_15"}
            />
            <CheckAndCountRow
              categoryLabal={"16 - 18 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_16_18}
              amount={instagramAgeLevel_16_18}
              categoryName={"ageLevel_16_18"}
            />
            <CheckAndCountRow
              categoryLabal={"19 - 25 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_19_25}
              amount={instagramAgeLevel_19_25}
              categoryName={"ageLevel_19_25"}
            />
            <CheckAndCountRow
              categoryLabal={"26 - 35 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_26_35}
              amount={instagramAgeLevel_26_35}
              categoryName={"ageLevel_26_35"}
            />
            <CheckAndCountRow
              categoryLabal={"36 - 60 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_36_60}
              amount={instagramAgeLevel_36_60}
              categoryName={"ageLevel_36_60"}
            />
            <CheckAndCountRow
              categoryLabal={"Over 60 years"}
              categoryText={"age category"}
              setAmount={setInstagramAgeLevel_over_60}
              amount={instagramAgeLevel_over_60}
              categoryName={"ageLevel_over_60"}
            />
          </Box>
        )}

        {/* question 03 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
              mx: 1,
            }}
          >
            03. Select the educational categories you can promote
          </Typography>
        </Box>

        {platforms.whatsapp.whatsappChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
              setAmount={setWhatsappOlCat}
              amount={whatsappOl_cat}
              categoryName={"ol_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
              setAmount={setWhatsappAlCat}
              amount={whatsappAl_cat}
              categoryName={"al_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
              setAmount={setWhatsappUndergraduateCat}
              amount={whatsappUndergraduate_cat}
              categoryName={"undergraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
              setAmount={setWhatsappPostgraduateCat}
              amount={whatsappPostgraduate_cat}
              categoryName={"postgraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
              setAmount={setWhatsappOtherEduCat}
              amount={whatsappOtherEdu_cat}
              categoryName={"otherEdu_cat"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
              setAmount={setFacebookOlCat}
              amount={facebookOl_cat}
              categoryName={"ol_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
              setAmount={setFacebookAlCat}
              amount={facebookAl_cat}
              categoryName={"al_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
              setAmount={setFacebookUndergraduateCat}
              amount={facebookUndergraduate_cat}
              categoryName={"undergraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
              setAmount={setFacebookPostgraduateCat}
              amount={facebookPostgraduate_cat}
              categoryName={"postgraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
              setAmount={setFacebookOtherEduCat}
              amount={facebookOtherEdu_cat}
              categoryName={"otherEdu_cat"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Ordinary Level"}
              categoryText={"educational category"}
              setAmount={setInstagramOlCat}
              amount={instagramOl_cat}
              categoryName={"ol_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Advanced Level"}
              categoryText={"educational category"}
              setAmount={setInstagramAlCat}
              amount={instagramAl_cat}
              categoryName={"al_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Undergraduates"}
              categoryText={"educational category"}
              setAmount={setInstagramUndergraduateCat}
              amount={instagramUndergraduate_cat}
              categoryName={"undergraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Postgraduates"}
              categoryText={"educational category"}
              setAmount={setInstagramPostgraduateCat}
              amount={instagramPostgraduate_cat}
              categoryName={"postgraduate_cat"}
            />
            <CheckAndCountRow
              categoryLabal={"Others"}
              categoryText={"educational category"}
              setAmount={setInstagramOtherEduCat}
              amount={instagramOtherEdu_cat}
              categoryName={"otherEdu_cat"}
            />
          </Box>
        )}

        {/* question 04 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
              mx: 1,
            }}
          >
            04. Select the regional areas (Provinces) where your social media
            audience is located in
          </Typography>
        </Box>

        {platforms.whatsapp.whatsappChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Western Province"}
              categoryText={"province"}
              setAmount={setWhatsappWesternProvince}
              amount={whatsappWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"Central Province"}
              categoryText={"province"}
              setAmount={setWhatsappCentralProvince}
              amount={whatsappCentralProvince}
              categoryName={"central"}
            />
            <CheckAndCountRow
              categoryLabal={"Southern Province"}
              categoryText={"province"}
              setAmount={setWhatsappSouthernProvince}
              amount={whatsappSouthernProvince}
              categoryName={"southern"}
            />
            <CheckAndCountRow
              categoryLabal={"Uva Province"}
              categoryText={"province"}
              setAmount={setWhatsappUwaProvince}
              amount={whatsappUwaProvince}
              categoryName={"uwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Nothern Province"}
              categoryText={"province"}
              setAmount={setWhatsappNothernProvince}
              amount={whatsappNothernProvince}
              categoryName={"nothern"}
            />
            <CheckAndCountRow
              categoryLabal={"Eastern Province"}
              categoryText={"province"}
              setAmount={setWhatsappEasternProvince}
              amount={whatsappEasternProvince}
              categoryName={"eastern"}
            />
            <CheckAndCountRow
              categoryLabal={"Sabaragamuwa Province"}
              categoryText={"province"}
              setAmount={setWhatsappSabaragamuwaProvince}
              amount={whatsappSabaragamuwaProvince}
              categoryName={"sabaragamuwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Northern Western Province"}
              categoryText={"province"}
              setAmount={setWhatsappNorthernWesternProvince}
              amount={whatsappNorthernWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"North Central Province"}
              categoryText={"province"}
              setAmount={setWhatsappNorthCentralProvince}
              amount={whatsappNorthCentralProvince}
              categoryName={"northCentral"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Western Province"}
              categoryText={"province"}
              setAmount={setFacebookWesternProvince}
              amount={facebookWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"Central Province"}
              categoryText={"province"}
              setAmount={setFacebookCentralProvince}
              amount={facebookCentralProvince}
              categoryName={"central"}
            />
            <CheckAndCountRow
              categoryLabal={"Southern Province"}
              categoryText={"province"}
              setAmount={setFacebookSouthernProvince}
              amount={facebookSouthernProvince}
              categoryName={"southern"}
            />
            <CheckAndCountRow
              categoryLabal={"Uva Province"}
              categoryText={"province"}
              setAmount={setFacebookUwaProvince}
              amount={facebookUwaProvince}
              categoryName={"uwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Nothern Province"}
              categoryText={"province"}
              setAmount={setFacebookNothernProvince}
              amount={facebookNothernProvince}
              categoryName={"nothern"}
            />
            <CheckAndCountRow
              categoryLabal={"Eastern Province"}
              categoryText={"province"}
              setAmount={setFacebookEasternProvince}
              amount={facebookEasternProvince}
              categoryName={"eastern"}
            />
            <CheckAndCountRow
              categoryLabal={"Sabaragamuwa Province"}
              categoryText={"province"}
              setAmount={setFacebookSabaragamuwaProvince}
              amount={facebookSabaragamuwaProvince}
              categoryName={"sabaragamuwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Northern Western Province"}
              categoryText={"province"}
              setAmount={setFacebookNorthernWesternProvince}
              amount={facebookNorthernWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"North Central Province"}
              categoryText={"province"}
              setAmount={setFacebookNorthCentralProvince}
              amount={facebookNorthCentralProvince}
              categoryName={"northCentral"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Western Province"}
              categoryText={"province"}
              setAmount={setInstagramWesternProvince}
              amount={instagramWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"Central Province"}
              categoryText={"province"}
              setAmount={setInstagramCentralProvince}
              amount={instagramCentralProvince}
              categoryName={"central"}
            />
            <CheckAndCountRow
              categoryLabal={"Southern Province"}
              categoryText={"province"}
              setAmount={setInstagramSouthernProvince}
              amount={instagramSouthernProvince}
              categoryName={"southern"}
            />
            <CheckAndCountRow
              categoryLabal={"Uva Province"}
              categoryText={"province"}
              setAmount={setInstagramUwaProvince}
              amount={instagramUwaProvince}
              categoryName={"uwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Nothern Province"}
              categoryText={"province"}
              setAmount={setInstagramNothernProvince}
              amount={instagramNothernProvince}
              categoryName={"nothern"}
            />
            <CheckAndCountRow
              categoryLabal={"Eastern Province"}
              categoryText={"province"}
              setAmount={setInstagramEasternProvince}
              amount={instagramEasternProvince}
              categoryName={"eastern"}
            />
            <CheckAndCountRow
              categoryLabal={"Sabaragamuwa Province"}
              categoryText={"province"}
              setAmount={setInstagramSabaragamuwaProvince}
              amount={instagramSabaragamuwaProvince}
              categoryName={"sabaragamuwa"}
            />
            <CheckAndCountRow
              categoryLabal={"Northern Western Province"}
              categoryText={"province"}
              setAmount={setInstagramNorthernWesternProvince}
              amount={instagramNorthernWesternProvince}
              categoryName={"western"}
            />
            <CheckAndCountRow
              categoryLabal={"North Central Province"}
              categoryText={"province"}
              setAmount={setInstagramNorthCentralProvince}
              amount={instagramNorthCentralProvince}
              categoryName={"northCentral"}
            />
          </Box>
        )}

        {/* question 05 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            mt: 3,
            ml: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
              color: "primary.dark",
              mx: 1,
            }}
          >
            05. Choose the languages ​​your social media audience is using
          </Typography>
        </Box>

        {platforms.whatsapp.whatsappChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On WhatsApp,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Sinhala"}
              categoryText={"language users"}
              setAmount={setWhatsappSinhala}
              amount={whatsappSinhala}
              categoryName={"sinhala"}
            />
            <CheckAndCountRow
              categoryLabal={"Tamil"}
              categoryText={"language users"}
              setAmount={setWhatsappTamil}
              amount={whatsappTamil}
              categoryName={"tamil"}
            />
            <CheckAndCountRow
              categoryLabal={"English"}
              categoryText={"language users"}
              setAmount={setWhatsappEnglish}
              amount={whatsappEnglish}
              categoryName={"english"}
            />
          </Box>
        )}

        {platforms.facebook.facebookChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Facebook,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Sinhala"}
              categoryText={"language users"}
              setAmount={setFacebookSinhala}
              amount={facebookSinhala}
              categoryName={"sinhala"}
            />
            <CheckAndCountRow
              categoryLabal={"Tamil"}
              categoryText={"language users"}
              setAmount={setFacebookTamil}
              amount={facebookTamil}
              categoryName={"tamil"}
            />
            <CheckAndCountRow
              categoryLabal={"English"}
              categoryText={"language users"}
              setAmount={setFacebookEnglish}
              amount={facebookEnglish}
              categoryName={"english"}
            />
          </Box>
        )}

        {platforms.instagram.instagramChecked && (
          <Box>
            <Typography sx={{ color: "primary.dark", ml: 30, mt: 3 }}>
              On Instagram,
            </Typography>

            <CheckAndCountRow
              categoryLabal={"Sinhala"}
              categoryText={"language users"}
              setAmount={setInstagramSinhala}
              amount={instagramSinhala}
              categoryName={"sinhala"}
            />
            <CheckAndCountRow
              categoryLabal={"Tamil"}
              categoryText={"language users"}
              setAmount={setInstagramTamil}
              amount={instagramTamil}
              categoryName={"tamil"}
            />
            <CheckAndCountRow
              categoryLabal={"English"}
              categoryText={"language users"}
              setAmount={setInstagramEnglish}
              amount={instagramEnglish}
              categoryName={"english"}
            />
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default AudienceDetails;
