import { Box, Divider, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "../BarChart/BarChart";

const ageCategoriesArr = [
  "ageLevel_13_15",
  "ageLevel_16_18",
  "ageLevel_19_25",
  "ageLevel_26_35",
  "ageLevel_36_60",
  "ageGroup_over_60",
];

function SelectedPromoterStatistics() {
  let { selectedPromoterForView, platform } = useSelector(
    (state) => state.saveCampaign
  );

  const [barChartData, setBarChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  const [selectedCategory, setSelecedCategory] = useState("education");

  useEffect(() => {
    // for education
    let educationCategoriesObjArr = [
      {
        category: "ol_cat",
        count: 0,
      },
      {
        category: "al_cat",
        count: 0,
      },
      {
        category: "undergraduate_cat",
        count: 0,
      },
      {
        category: "postgraduate_cat",
        count: 0,
      },
    ];
    
    if (selectedCategory === "education") {
      educationCategoriesObjArr.map((obj, index) => {
        if (selectedPromoterForView) {
          selectedPromoterForView.promoter.promoterAudienceCategoryList.map(
            (item) => {
              if (
                item.platform === platform &&
                item.categoryType === "education" &&
                item.category === obj.category
              ) {
                educationCategoriesObjArr[index].count = item.count;
              }
              return 0;
            }
          );
        }
        return 0;
      });
      console.log(educationCategoriesObjArr);

      let tempDataArr = [];

      educationCategoriesObjArr.map((item) => {
        tempDataArr.push(item.count);
        return 0;
      });

      setBarChartData({
        ...barChartData,
        labelsArray: ["O/L", "A/L", "Undergraduates", "Postgraduates"],
        // dataArray: [20, 40, 30, 45],
        dataArray: tempDataArr,
      });
    }

    // for age
    let ageCategoriesObjArr = [
      {
        category: "ageLevel_13_15",
        count: 0,
      },
      {
        category: "ageLevel_16_18",
        count: 0,
      },
      {
        category: "ageLevel_19_25",
        count: 0,
      },
      {
        category: "ageLevel_26_35",
        count: 0,
      },
      {
        category: "ageLevel_36_60",
        count: 0,
      },
      {
        category: "ageGroup_over_60",
        count: 0,
      },
    ];
    if (selectedCategory === "age") {
      ageCategoriesObjArr.map((obj, index) => {
        if (selectedPromoterForView) {
          selectedPromoterForView.promoter.promoterAudienceCategoryList.map(
            (item) => {
              if (
                item.platform === platform &&
                item.categoryType === "age" &&
                item.category === obj.category
              ) {
                ageCategoriesObjArr[index].count = item.count;
              }
              return 0;
            }
          );
        }
        return 0;
      });

      let tempDataArr = [];

      ageCategoriesObjArr.map((item) => {
        tempDataArr.push(item.count);
        return 0;
      });

      setBarChartData({
        ...barChartData,
        labelsArray: ["13-15", "16-18", "19-25", "26-35", "36-60", "Over 60"],
        dataArray: tempDataArr,
      });
    }

    // for region
    let regionCategoriesObjArr = [
      {
        category: "western",
        count: 0,
      },
      {
        category: "central",
        count: 0,
      },
      {
        category: "southern",
        count: 0,
      },
      {
        category: "uva",
        count: 0,
      },
      {
        category: "nothern",
        count: 0,
      },
      {
        category: "eastern",
        count: 0,
      },
      {
        category: "sabaragamuwa",
        count: 0,
      },
      {
        category: "northernWestern",
        count: 0,
      },
      {
        category: "northCentral",
        count: 0,
      },
    ];
    if (selectedCategory === "region") {
      regionCategoriesObjArr.map((obj, index) => {
        if (selectedPromoterForView) {
          selectedPromoterForView.promoter.promoterAudienceCategoryList.map(
            (item) => {
              if (
                item.platform === platform &&
                item.categoryType === "region" &&
                item.category === obj.category
              ) {
                regionCategoriesObjArr[index].count = item.count;
              }
              return 0;
            }
          );
        }
        return 0;
      });

      let tempDataArr = [];

      regionCategoriesObjArr.map((item) => {
        tempDataArr.push(item.count);
        return 0;
      });

      setBarChartData({
        ...barChartData,
        labelsArray: [
          "West.",
          "Cent.",
          "South.",
          "Uva",
          "Noth.",
          "East.",
          "Sabar.",
          "NW",
          "NC",
        ],
        dataArray: tempDataArr,
      });
    }

    // for language
    let languageCategoriesObjArr = [
      {
        category: "sinhala",
        count: 0,
      },
      {
        category: "tamil",
        count: 0,
      },
      {
        category: "english",
        count: 0,
      },
    ];
    if (selectedCategory === "language") {
      languageCategoriesObjArr.map((obj, index) => {
        if (selectedPromoterForView) {
          selectedPromoterForView.promoter.promoterAudienceCategoryList.map(
            (item) => {
              if (
                item.platform === platform &&
                item.categoryType === "language" &&
                item.category === obj.category
              ) {
                languageCategoriesObjArr[index].count = item.count;
              }
              return 0;
            }
          );
        }
        return 0;
      });

      let tempDataArr = [];

      languageCategoriesObjArr.map((item) => {
        tempDataArr.push(item.count);
        return 0;
      });

      setBarChartData({
        ...barChartData,
        labelsArray: ["Sinhala", "Tamil", "English"],
        dataArray: tempDataArr,
      });
    }
  }, [selectedCategory, selectedPromoterForView]);

  const handleOnChangeAudienceCategory = (event) => {
    let selection = event.target.value;
    setSelecedCategory(selection);
  };

  return (
    <Box
      sx={{
        width: "100%",
        border: 1,
        borderRadius: 1,
        m: 1,
        // borderColor: "#E0E0E0",
        borderColor: "primary.dark",
        p: 1,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          m: 1,
          fontSize: "1.2rem",
          color:'primary.dark'
        }}
      >
        Promoter's Audience Statistics
      </Typography>
      <Divider />

      <Box
        sx={{
          mt: 2,
          display: {xs:'block', lg:'flex'},
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: {xs:'block', lg:'flex'}, width: "75%" }}>
          <Typography sx={{ mr: 1, color:'primary.dark' }}>PromoterId:</Typography>
          <Typography
            sx={{color:'secondary.dark'}}
          >
            {selectedPromoterForView
              ? selectedPromoterForView.promoter._id
              : ""}
          </Typography>
        </Box>
        <Box sx={{ width: {xs:'100%', lg:'25%'}, mb:{xs:1, lg:0} }}>
          <Select
            fullWidth
            size="small"
            sx={{
              paddingLeft: "0px",
              width: "100%",
              backgroundColor: "",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="education"
            onChange={handleOnChangeAudienceCategory}
          >
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="age">Age</MenuItem>
            <MenuItem value="region">Region</MenuItem>
            <MenuItem value="language">Language</MenuItem>
            <MenuItem value="gender">Gender</MenuItem>
          </Select>
        </Box>
      </Box>
      {selectedCategory !== "gender" && (
        <BarChart barChartData={barChartData} />
      )}
    </Box>
  );
}

export default SelectedPromoterStatistics;
