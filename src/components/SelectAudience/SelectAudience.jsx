import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCampaignAudienceDetails } from "../../store/reducers/saveCampaign";

function SelectAudience() {
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
  } = useSelector((state) => state.saveCampaign);

  const [state, setState] = React.useState({
    platform: platform,
    schoolCat: schoolCat,
    universityCat: universityCat,
    olCat: olCat,
    alCat: alCat,
    subMaths: subMaths,
    subBio: subBio,
    subCommerce: subCommerce,
    subArt: subArt,
    subTechnology: subTechnology,
    undergraduateCat: undergraduateCat,
    postgraduateCat: postgraduateCat,
    ageGroup_13_15: ageGroup_13_15,
    ageGroup_16_18: ageGroup_16_18,
    ageGroup_19_25: ageGroup_19_25,
    ageGroup_26_35: ageGroup_26_35,
    ageGroup_36_60: ageGroup_36_60,
    ageGroup_over_60: ageGroup_over_60,
    western: western,
    uva: uva,
    sabaragamuwa: sabaragamuwa,
    central: central,
    nothern: nothern,
    northernWestern: northernWestern,
    southern: southern,
    eastern: eastern,
    northCentral: northCentral,
    sinhala: sinhala,
    tamil: tamil,
    english: english,
    male: male,
    female: female,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    if (state.schoolCat === false) {
      setState({
        ...state,
        olCat: false,
        alCat: false,
      });
    }
    if (state.universityCat === false) {
      setState({
        ...state,
        undergraduateCat: false,
        postgraduateCat: false,
      });
    }
  }, [state.schoolCat, state.universityCat]);

  useEffect(() => {
    if (state.alCat === false) {
      setState({
        ...state,
        subMaths: false,
        subBio: false,
        subCommerce: false,
        subArt: false,
        subTechnology: false,
      });
    }
  }, [alCat]);

  const handleOnChangePlatform = (event) => {
    setState({
      ...state,
      platform: event.target.value,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeCampaignAudienceDetails({
        platform: state.platform,
        schoolCat: state.schoolCat,
        universityCat: state.universityCat,
        olCat: state.olCat,
        alCat: state.alCat,
        subMaths: state.subMaths,
        subBio: state.subBio,
        subCommerce: state.subCommerce,
        subArt: state.subArt,
        subTechnology: state.subTechnology,
        undergraduateCat: state.undergraduateCat,
        postgraduateCat: state.postgraduateCat,
        ageGroup_13_15: state.ageGroup_13_15,
        ageGroup_16_18: state.ageGroup_16_18,
        ageGroup_19_25: state.ageGroup_19_25,
        ageGroup_26_35: state.ageGroup_26_35,
        ageGroup_36_60: state.ageGroup_36_60,
        ageGroup_over_60: state.ageGroup_over_60,
        western: state.western,
        uva: state.uva,
        sabaragamuwa: state.sabaragamuwa,
        central: state.central,
        nothern: state.nothern,
        northernWestern: state.northernWestern,
        southern: state.southern,
        eastern: state.eastern,
        northCentral: state.northCentral,
        sinhala: state.sinhala,
        tamil: state.tamil,
        english: state.english,
        male: state.male,
        female: state.female,
      })
    );
  }, [state]);

  return (
    <Box sx={{ my: 2 }}>
      <FormControl>
        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Campaign Media
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={platform}
            onChange={handleOnChangePlatform}
          >
            <FormControlLabel
              value="whatsapp"
              control={<Radio />}
              label="WhatsApp"
            />
            <FormControlLabel
              value="facebook"
              control={<Radio />}
              label="Facebook"
            />
            <FormControlLabel
              value="instagram"
              control={<Radio />}
              label="Instagram"
            />
          </RadioGroup>
        </Paper>

        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem", color:"primary.darker" }}>
            Audience Category Selection
          </Typography>
          <Typography sx={{mb:2}}>If you want to specify required audience category for the campaign, please select required fields from below choices...</Typography>
          <FormLabel component="legend">Educational Level</FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={schoolCat}
                  onChange={handleChange}
                  name="schoolCat"
                />
              }
              label="School Category"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={universityCat}
                  onChange={handleChange}
                  name="universityCat"
                />
              }
              label="University Category"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
          <Divider />
          {schoolCat && (
            <Box sx={{ pl: 10, mt: 1 }}>
              <FormLabel component="legend">School Category</FormLabel>
              <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="olCat"
                      checked={olCat}
                    />
                  }
                  label="Ordinary Level"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="alCat"
                      checked={alCat}
                    />
                  }
                  label="Advanced Level"
                />
              </FormGroup>
              <Divider />
              {alCat && (
                <Box sx={{ pl: 10, mt: 1 }}>
                  <FormLabel component="legend">
                    A/L Subject Categories
                  </FormLabel>
                  <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subMaths"
                          checked={subMaths}
                        />
                      }
                      label="Mathematics"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subBio"
                          checked={subBio}
                        />
                      }
                      label="Biology"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subCommerce"
                          checked={subCommerce}
                        />
                      }
                      label="Commerce"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subArt"
                          checked={subArt}
                        />
                      }
                      label="Art"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="subTechnology"
                          checked={subTechnology}
                        />
                      }
                      label="Technology"
                    />
                  </FormGroup>
                  <Divider />
                </Box>
              )}
            </Box>
          )}

          {universityCat && (
            <Box sx={{ pl: 10, mt: 1 }}>
              <FormLabel component="legend">University Category</FormLabel>
              <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="undergraduateCat"
                      checked={undergraduateCat}
                    />
                  }
                  label="Undergraduate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      name="postgraduateCat"
                      checked={postgraduateCat}
                    />
                  }
                  label="Postgraduate"
                />
              </FormGroup>
              <Divider />
            </Box>
          )}

          <FormLabel sx={{ mt: 1 }} component="legend">
            Age Level
          </FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_13_15}
                  onChange={handleChange}
                  name="ageGroup_13_15"
                />
              }
              label="13 - 15 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_16_18}
                  onChange={handleChange}
                  name="ageGroup_16_18"
                />
              }
              label="16 - 18 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_19_25}
                  onChange={handleChange}
                  name="ageGroup_19_25"
                />
              }
              label="19 - 25 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_26_35}
                  onChange={handleChange}
                  name="ageGroup_26_35"
                />
              }
              label="26 - 35 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_36_60}
                  onChange={handleChange}
                  name="ageGroup_36_60"
                />
              }
              label="36 - 60 Years"
            />
            <FormControlLabel
              sx={{ mr: 4 }}
              control={
                <Checkbox
                  checked={ageGroup_over_60}
                  onChange={handleChange}
                  name="ageGroup_over_60"
                />
              }
              label="Over 60 Years"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
          <Divider />
          <FormLabel sx={{ mt: 1 }} component="legend">
            Region
          </FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={western}
                  onChange={handleChange}
                  name="western"
                />
              }
              label="Western Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox checked={uva} onChange={handleChange} name="uva" />
              }
              label="Uva Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={sabaragamuwa}
                  onChange={handleChange}
                  name="sabaragamuwa"
                />
              }
              label="Sabaragamuwa Province"
            />
          </FormGroup>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={central}
                  onChange={handleChange}
                  name="central"
                />
              }
              label="Central Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={nothern}
                  onChange={handleChange}
                  name="nothern"
                />
              }
              label="Nothern Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={northernWestern}
                  onChange={handleChange}
                  name="northernWestern"
                />
              }
              label="Northern Western Province"
            />
          </FormGroup>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={southern}
                  onChange={handleChange}
                  name="southern"
                />
              }
              label="Southern Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={eastern}
                  onChange={handleChange}
                  name="eastern"
                />
              }
              label="Eastern Province"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={northCentral}
                  onChange={handleChange}
                  name="northCentral"
                />
              }
              label="North Central Province"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
          <Divider />
          <FormLabel sx={{ mt: 1 }} component="legend">
            Language
          </FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={sinhala}
                  onChange={handleChange}
                  name="sinhala"
                />
              }
              label="Sinhala"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={tamil}
                  onChange={handleChange}
                  name="tamil"
                />
              }
              label="Tamil"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={english}
                  onChange={handleChange}
                  name="english"
                />
              }
              label="English"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
          <Divider />
          <FormLabel sx={{ mt: 1 }} component="legend">
            Gender
          </FormLabel>
          <FormGroup row name="row-radio-buttonsMuiFormGroup-row">
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox checked={male} onChange={handleChange} name="male" />
              }
              label="For Male"
            />
            <FormControlLabel
              sx={{ mr: 4, width: 250 }}
              control={
                <Checkbox
                  checked={female}
                  onChange={handleChange}
                  name="female"
                />
              }
              label="For Female"
            />
          </FormGroup>
          <FormHelperText></FormHelperText>
        </Paper>
      </FormControl>
    </Box>
  );
}

export default SelectAudience;
