import {
  Card,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PromoterService from "../../api/services/PromoterService";
import AgeChartView from "./StatisticalCharts/AgeChartView";
import EducationChartView from "./StatisticalCharts/EducationChartView";
import GenderChartView from "./StatisticalCharts/GenderChartView";
import LanguageChartView from "./StatisticalCharts/LanguageChartView";
import RegionChartView from "./StatisticalCharts/RegionChartView";

function UserStatistics({ userId }) {
  const [promoterData, setPromoterData] = useState();

  const [platform, setPlatform] = React.useState("whatsapp");

  const [educationChartData, setEducationChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  const [ageChartData, setAgeChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  const [regionChartData, setRegionChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  const [languageChartData, setLanguageChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  const [genderChartData, setGenderChartData] = useState({
    labelsArray: [],
    dataArray: [],
  });

  useEffect(() => {
    const response = PromoterService.getPromoterByUserId(userId);
    response.then((res) => {
      if (res.data.responseCode === "00") {
        setPromoterData(res.data.promoter);
      }
    });
  }, [userId]);

  // for education
  useEffect(() => {
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

    educationCategoriesObjArr.map((obj, index) => {
      if (promoterData) {
        promoterData.promoterAudienceCategoryList.map((item) => {
          if (
            item.platform === platform &&
            item.categoryType === "education" &&
            item.category === obj.category
          ) {
            educationCategoriesObjArr[index].count = item.count;
          }
          return 0;
        });
      }
      return 0;
    });

    let tempDataArr = [];

    educationCategoriesObjArr.map((item) => {
      tempDataArr.push(item.count);
      return 0;
    });

    setEducationChartData({
      ...educationChartData,
      labelsArray: ["O/L", "A/L", "Undergraduates", "Postgraduates"],
      dataArray: tempDataArr,
    });
  }, [userId, promoterData, platform]);

  // for age
  useEffect(() => {
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
    ageCategoriesObjArr.map((obj, index) => {
      if (promoterData) {
        promoterData.promoterAudienceCategoryList.map((item) => {
          if (
            item.platform === platform &&
            item.categoryType === "age" &&
            item.category === obj.category
          ) {
            ageCategoriesObjArr[index].count = item.count;
          }
          return 0;
        });
      }
      return 0;
    });

    let tempDataArr = [];

    ageCategoriesObjArr.map((item) => {
      tempDataArr.push(item.count);
      return 0;
    });

    setAgeChartData({
      ...ageChartData,
      labelsArray: [
        ["13 - 15", "years"],
        ["16 - 18", "years"],
        ["19 - 25", "years"],
        ["26 - 35", "years"],
        ["36 - 60", "years"],
        ["Over 60", "years"],
      ],
      dataArray: tempDataArr,
    });
  }, [userId, promoterData, platform]);

  // for region
  useEffect(() => {
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
    regionCategoriesObjArr.map((obj, index) => {
      if (promoterData) {
        promoterData.promoterAudienceCategoryList.map((item) => {
          if (
            item.platform === platform &&
            item.categoryType === "region" &&
            item.category === obj.category
          ) {
            regionCategoriesObjArr[index].count = item.count;
          }
          return 0;
        });
      }
      return 0;
    });

    let tempDataArr = [];

    regionCategoriesObjArr.map((item) => {
      tempDataArr.push(item.count);
      return 0;
    });

    setRegionChartData({
      ...regionChartData,
      labelsArray: [
        ["Western", "Province"],
        ["Central", "Province"],
        ["Southern", "Province"],
        ["Uva", "Province"],
        ["Nothern", "Province"],
        ["Eastern", "Province"],
        ["Sabaragamuwa", "Province"],
        ["Northern Western", "Province"],
        ["North Central", "Province"],
      ],
      dataArray: tempDataArr,
    });
  }, [userId, promoterData, platform]);

  // for language
  useEffect(() => {
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
    languageCategoriesObjArr.map((obj, index) => {
      if (promoterData) {
        promoterData.promoterAudienceCategoryList.map((item) => {
          if (
            item.platform === platform &&
            item.categoryType === "language" &&
            item.category === obj.category
          ) {
            languageCategoriesObjArr[index].count = parseInt(item.count);
          }
          return 0;
        });
      }
      return 0;
    });

    let tempDataArr = [];

    languageCategoriesObjArr.map((item) => {
      tempDataArr.push(item.count);
      return 0;
    });

    setLanguageChartData({
      ...languageChartData,
      labelsArray: ["Sinhala", "Tamil", "English"],
      dataArray: tempDataArr,
    });
  }, [userId, promoterData, platform]);

  // for gender
  useEffect(() => {
    let genderCategoriesObjArr = [
      {
        category: "male",
        count: 0,
      },
      {
        category: "female",
        count: 0,
      },
    ];

    if (promoterData) {
      promoterData.promoterGenderAudienceList.map((item) => {
        if (item.platform === platform) {
          genderCategoriesObjArr[0].count = parseInt(item.malePercentage);
          genderCategoriesObjArr[1].count = parseInt(item.femalePercentage);
        }
        return 0;
      });
    }

    let tempDataArr = [];

    genderCategoriesObjArr.map((item) => {
      tempDataArr.push(item.count);
      return 0;
    });

    setGenderChartData({
      ...genderChartData,
      labelsArray: ["Male", "Female"],
      dataArray: tempDataArr,
    });
  }, [userId, promoterData, platform]);


  const handleChange = (event, newAlignment) => {
    setPlatform(newAlignment);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8.5}>
        <Stack>
          <RegionChartView regionChartData={regionChartData} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={3.5}>
        <Stack sx={{ mb: 2 }}>
          <Card sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
            <ToggleButtonGroup
              fullWidth
              color="primary"
              value={platform}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="whatsapp">WhatsApp</ToggleButton>
              <ToggleButton value="facebook">Facebook</ToggleButton>
              <ToggleButton value="instagram">Instagram</ToggleButton>
            </ToggleButtonGroup>
          </Card>
        </Stack>

        <Stack sx={{ mb: 2 }}>
          <LanguageChartView languageChartData={languageChartData} />
        </Stack>

        <Stack>
          <GenderChartView genderChartData={genderChartData} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack>
          <EducationChartView educationChartData={educationChartData} />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack>
          <AgeChartView ageChartData={ageChartData} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserStatistics;
