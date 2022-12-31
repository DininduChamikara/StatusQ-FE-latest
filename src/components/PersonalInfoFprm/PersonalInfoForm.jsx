import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePersonalDetails,
  changePromoterAccessibilityData,
} from "../../store/reducers/savePromoter";

function PersonalInfoForm() {
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
  } = useSelector((state) => state.savePromoter);

  const [state, setState] = useState({
    whatsapp: platforms.whatsapp.whatsappChecked,
    facebook: platforms.facebook.facebookChecked,
    instagram: platforms.instagram.instagramChecked,
  });

  const handleChange = (event) => {
    console.log(event.target.checked);

    if (event.target.checked === false) {
      if (event.target.name === "whatsapp") {
        promoterPersonalInfo.whatsAppMinViews = 0;
      }
      if (event.target.name === "facebook") {
        promoterPersonalInfo.facebookMinViews = 0;
      }
      if (event.target.name === "instagram") {
        promoterPersonalInfo.instagramMinViews = 0;
      }
    }

    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [promoterPersonalInfo, setPromoterPersonalInfo] = useState({
    fullname: fullName,
    nameWithInit: nameWithInit,
    dob: dob,
    gender: gender,
    nic: nic,
    address: address,
    postcode: postcode,
    mobile: mobile,
    province: province,
    language: language,
    educationalLevel: educationalCategory,
    whatsAppMinViews: platforms.whatsapp.minAccessibleViews,
    facebookMinViews: platforms.facebook.minAccessibleViews,
    instagramMinViews: platforms.instagram.minAccessibleViews,
  });

  const [promoterAccessibleData, setPromoterAccessibleData] = useState({
    platforms: {
      whatsapp: {
        whatsappChecked: false,
        minAccessibleViews: 0,
      },
      facebook: {
        facebookChecked: false,
        minAccessibleViews: 0,
      },
      instagram: {
        instagramChecked: false,
        minAccessibleViews: 0,
      },
    },
  });

  useEffect(() => {
    setPromoterAccessibleData({
      platforms: {
        whatsapp: {
          whatsappChecked: state.whatsapp,
          minAccessibleViews: promoterPersonalInfo.whatsAppMinViews,
        },
        facebook: {
          facebookChecked: state.facebook,
          minAccessibleViews: promoterPersonalInfo.facebookMinViews,
        },
        instagram: {
          instagramChecked: state.instagram,
          minAccessibleViews: promoterPersonalInfo.instagramMinViews,
        },
      },
    });
  }, [
    promoterPersonalInfo.whatsAppMinViews,
    promoterPersonalInfo.facebookMinViews,
    promoterPersonalInfo.instagramMinViews,
  ]);

  const dispatch = useDispatch();
  // const { promoterStepperActive } = useSelector((state) => state.activeStep);

  useEffect(() => {
    dispatch(
      changePersonalDetails({
        fullName: promoterPersonalInfo.fullname,
        nameWithInit: promoterPersonalInfo.nameWithInit,
        dob: promoterPersonalInfo.dob,
        gender: promoterPersonalInfo.gender,
        nic: promoterPersonalInfo.nic,
        address: promoterPersonalInfo.address,
        postcode: promoterPersonalInfo.postcode,
        mobile: promoterPersonalInfo.mobile,
        province: promoterPersonalInfo.province,
        language: promoterPersonalInfo.language,
        educationalCategory: promoterPersonalInfo.educationalLevel,
      })
    );
    dispatch(
      changePromoterAccessibilityData({
        platforms: promoterAccessibleData.platforms,
      })
    );
  }, [promoterPersonalInfo, promoterAccessibleData]);

  // for error validations
  const [errorInfo, setErrorInfo] = useState({
    fullNameError: "",
    nameWithInitError: "",
    nicError: "",
    addressError: "",
    postcodeError: "",
    mobileError: "",
  });

  // get form info on hadle chages
  const handleOnChangeFullName = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        fullNameError: "Full name cannot be empty",
      });
    } else if (
      !event.target.value.match(/^[a-zA-Z]{0,}(?: [a-zA-Z]+){0,10}$/)
    ) {
      setErrorInfo({
        ...errorInfo,
        fullNameError: "Allowed only letters",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        fullNameError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      fullname: event.target.value,
    });
  };

  const handleOnChangeNameWithInit = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        nameWithInitError: "Name with initials cannot be empty",
      });
    } else if (
      !event.target.value.match(/^[a-zA-Z]{0,}(?: [a-zA-Z]+){0,10}$/)
    ) {
      setErrorInfo({
        ...errorInfo,
        nameWithInitError: "Allowed only letters and spaces",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        nameWithInitError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      nameWithInit: event.target.value,
    });
  };
  const handleOnChangeDob = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      dob: event.target.value,
    });
  };
  const handleOnChangeGender = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      gender: event.target.value,
    });
  };
  const handleOnChangeNic = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        nicError: "NIC cannot be empty",
      });
    } else if (!event.target.value.match(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/)) {
      setErrorInfo({
        ...errorInfo,
        nicError: "Invalid NIC",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        nicError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      nic: event.target.value,
    });
  };
  const handleOnChangeAddress = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        addressError: "Address cannot be empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        addressError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      address: event.target.value,
    });
  };
  const handleOnChangePostcode = (event) => {
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        postcodeError: "Postcode cannot be empty",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        postcodeError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      postcode: event.target.value,
    });
  };
  const handleOnChangeMobile = (event) => {
    const regex = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/; 
    if (!event.target.value) {
      setErrorInfo({
        ...errorInfo,
        mobileError: "Mobile number need to be added",
      });
    } else if (!event.target.value.match(regex)) {
      setErrorInfo({
        ...errorInfo,
        mobileError: "Invalid mobile number",
      });
    } else {
      setErrorInfo({
        ...errorInfo,
        mobileError: "",
      });
    }
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      mobile: event.target.value,
    });
  };
  const handleOnChangeProvince = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      province: event.target.value,
    });
  };
  const handleOnChangeLanguage = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      language: event.target.value,
    });
  };
  const handleOnChangeEducationalLevel = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      educationalLevel: event.target.value,
    });
  };
  const handleOnChangeWhatsAppMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      whatsAppMinViews: event.target.value,
    });
  };
  const handleOnChangeFacebookMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      facebookMinViews: event.target.value,
    });
  };
  const handleOnChangeInstagramMinViews = (event) => {
    setPromoterPersonalInfo({
      ...promoterPersonalInfo,
      instagramMinViews: event.target.value,
    });
  };

  const { whatsapp, facebook, instagram } = state;

  return (
    <Box sx={{ my: 2 }}>
      <FormControl>
        <Paper variant="outlined" sx={{ width: "75vw", p: 1, mb: 1 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", m: 1, color:'primary.dark' }}>
            Personal Information
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
                <Typography sx={{ color: "secondary.dark", textAlign: "right" }}>
                  Full legal name
                </Typography>
                {errorInfo.fullNameError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.fullNameError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter the full legal name"
                size="small"
                value={promoterPersonalInfo.fullname}
                onChange={handleOnChangeFullName}
              />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
                <Typography sx={{ color: "secondary.dark", textAlign: "right" }}>
                  Name with initials
                </Typography>
                {errorInfo.nameWithInitError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.nameWithInitError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter the name with initials"
                size="small"
                value={promoterPersonalInfo.nameWithInit}
                onChange={handleOnChangeNameWithInit}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>Date of Birth</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                id="date"
                type="date"
                // defaultValue="2017-05-24"
                sx={{ pl: 1, width: "96%" }}
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                value={promoterPersonalInfo.dob}
                onChange={handleOnChangeDob}
              />
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>Gender</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.gender}
                onChange={handleOnChangeGender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
                <Typography sx={{ color: "secondary.dark", textAlign: "right" }}>
                  NIC number
                </Typography>
                {errorInfo.nicError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.nicError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your NIC"
                size="small"
                value={promoterPersonalInfo.nic}
                onChange={handleOnChangeNic}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
                <Typography sx={{ color: "secondary.dark", textAlign: "right" }}>
                  Address
                </Typography>
                {errorInfo.addressError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.addressError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your address"
                size="small"
                value={promoterPersonalInfo.address}
                onChange={handleOnChangeAddress}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
                <Typography sx={{ color: "secondary.dark", textAlign:'right' }}>Postal Code</Typography>
                {errorInfo.postcodeError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.postcodeError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your postal code"
                size="small"
                value={promoterPersonalInfo.postcode}
                onChange={handleOnChangePostcode}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
              <Typography sx={{ color: "secondary.dark", textAlign:'right' }}>Mobile</Typography>

              {errorInfo.mobileError !== "" && (
                  <FormHelperText
                    sx={{
                      m: 0,
                      color: "error.main",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    {errorInfo.mobileError} -
                  </FormHelperText>
                )}
              </Box>
            </Box>

            <Box sx={{ width: "60%" }}>
              <TextField
                sx={{ pl: 1, width: "96%" }}
                placeholder="Enter your mobile number"
                type="tel"
                size="small"
                value={promoterPersonalInfo.mobile}
                onChange={handleOnChangeMobile}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>Living Province</Typography>
            </Box>
            <Box sx={{ width: "60%" }}>
              <FormControl sx={{ mx: 1, width: "95%" }} size="small">
                <Select
                  sx={{
                    paddingLeft: "0px",
                    width: "100%",
                    backgroundColor: "",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={promoterPersonalInfo.province}
                  onChange={handleOnChangeProvince}
                >
                  <MenuItem value="western">Western Province</MenuItem>
                  <MenuItem value="uva">Uva Province</MenuItem>
                  <MenuItem value="sabaragamuwa">
                    Sabaragamuwa Province
                  </MenuItem>
                  <MenuItem value="central">Central Province</MenuItem>
                  <MenuItem value="nothern">Nothern Province</MenuItem>
                  <MenuItem value="northern western">
                    Northern Western Province
                  </MenuItem>
                  <MenuItem value="southern">Southern Province</MenuItem>
                  <MenuItem value="eastern">Eastern Province</MenuItem>
                  <MenuItem value="north central">
                    North Central Province
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", my: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>Language</Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.language}
                onChange={handleOnChangeLanguage}
              >
                <FormControlLabel
                  value="sinhala"
                  control={<Radio />}
                  label="Sinhala"
                />
                <FormControlLabel
                  value="tamil"
                  control={<Radio />}
                  label="Tamil"
                />
                <FormControlLabel
                  value="english"
                  control={<Radio />}
                  label="English"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", my: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>
                Educational Level
              </Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <RadioGroup
                sx={{ pl: 1, width: "96%" }}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={promoterPersonalInfo.educationalLevel}
                onChange={handleOnChangeEducationalLevel}
              >
                <FormControlLabel
                  value="upto-ol"
                  control={<Radio />}
                  label="Upto O/L"
                />
                <FormControlLabel
                  value="upto-al"
                  control={<Radio />}
                  label="Upto A/L"
                />
                <FormControlLabel
                  value="undergraduate"
                  control={<Radio />}
                  label="Undergraduate"
                />
                <FormControlLabel
                  value="postgraduate"
                  control={<Radio />}
                  label="Postgraduate"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
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
              <Typography sx={{ color: "secondary.dark" }}>
                Accessible social media platforms
              </Typography>
            </Box>

            <Box sx={{ width: "60%" }}>
              <FormGroup
                sx={{ pl: 1, width: "96%" }}
                row
                name="row-radio-buttonsMuiFormGroup-row"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="whatsapp"
                      checked={whatsapp}
                      onChange={handleChange}
                    />
                  }
                  label="WhatsApp"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="facebook"
                      checked={facebook}
                      onChange={handleChange}
                    />
                  }
                  label="Facebook"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="instagram"
                      checked={instagram}
                      onChange={handleChange}
                    />
                  }
                  label="Instagram"
                />
              </FormGroup>
              <FormHelperText></FormHelperText>
            </Box>
          </Box>
          <Divider />

          <Box
            sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 1 }}
          >
            <Box
              sx={{
                width: "40%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                my: 1,
                ml: 1,
              }}
            ></Box>

            {(whatsapp || facebook || instagram) && (
              <Box sx={{ width: "60%", my: 1 }}>
                <Typography sx={{ color: "primary.dark", fontWeight: "bold" }}>
                  Select the minimum accessible amount of views for selected
                  platforms
                </Typography>
              </Box>
            )}
          </Box>

          {whatsapp && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "secondary.dark" }}>WhatsApp</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.whatsAppMinViews}
                  onChange={handleOnChangeWhatsAppMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}

          {facebook && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "secondary.dark" }}>Facebook</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.facebookMinViews}
                  onChange={handleOnChangeFacebookMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}

          {instagram && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                my: 1,
                ml: 11,
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
                <Typography sx={{ color: "secondary.dark" }}>Instagram</Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <RadioGroup
                  sx={{ pl: 1, width: "96%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={promoterPersonalInfo.instagramMinViews}
                  onChange={handleOnChangeInstagramMinViews}
                >
                  <FormControlLabel value={50} control={<Radio />} label="50" />
                  <FormControlLabel
                    value={100}
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value={200}
                    control={<Radio />}
                    label="200"
                  />
                  <FormControlLabel
                    value={500}
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </Box>
            </Box>
          )}
        </Paper>
      </FormControl>
    </Box>
  );
}

export default PersonalInfoForm;
