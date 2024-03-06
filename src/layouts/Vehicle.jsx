import React, { useState, useEffect, useRef } from "react";
import "./vehicles.css";
import bird from "../assets/images/bird_2.jpg";
import license from "../assets/images/download.png";

// modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "18px",
  boxShadow: 24,
  p: 4,
};

const Vehicle = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openComp, setOpenComp] = React.useState(false);
  const handleOpenComp = () => setOpenComp(true);
  const handleCloseComp = () => setOpenComp(false);

  const [openDesp, setOpenDesp] = React.useState(false);
  const handleOpenDesp = () => setOpenDesp(true);
  const handleCloseDesp = () => setOpenDesp(false);

  const [openpro, setOpenpro] = React.useState(false);
  const handleOpenpro = () => setOpenpro(true);
  const handleClosepro = () => setOpenpro(false);

  // Lekha form

  const fileInputRef = useRef(null);
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [country] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [yearOfIncorporation, setYearOfIncorporation] = useState("");
  const [yearError] = useState(null);
  const [companyNameError, setCompanyNameError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [companyCategory, setCompanyCategory] = useState("");
  const [companyCategoryError, setCompanyCategoryError] = useState("");
  const [sector, setSector] = useState("");
  const [sectorError, setSectorError] = useState("");
  const [sector1, setSector1] = useState("");
  const [sectorError1, setSectorError1] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [companyVision, setCompanyVision] = useState("");
  const [companyMission, setCompanyMission] = useState("");
  const [employeeRange, setEmployeeRange] = useState("");
  const [numberOfBranches, setNumberOfBranches] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState(null);
  const [companyVisionError, setCompanyVisionError] = useState("");
  const [companyMissionError, setCompanyMissionError] = useState("");
  const [employeeRangeError, setEmployeeRangeError] = useState("");
  const [numberOfBranchesError, setNumberOfBranchesError] = useState("");
  const [companyDescriptionError, setCompanyDescriptionError] = useState("");
  const currentYear = new Date().getFullYear();
  const [companyTradeLicense, setCompanyTradeLicense] = useState(null);
  const [companyTradeLicenseError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  // const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [monthOfIncorporation, setMonthOfIncorporation] = useState("");
  // const [ageError] = useState(null);
  const [address, setAddress] = useState("");
  // const [state, setState] = useState("");
  // const [district, setDistrict] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressError, setAddressError] = useState(null);
  const [stateError] = useState(null);
  const [districtError] = useState(null);
  const [zipcodeError, setZipcodeError] = useState(null);
  const [productInformation, setProductInformation] = useState("");
  const [productName, setProductName] = useState("");
  const [yearFounded, setYearFounded] = useState("");
  const [batchNumber, setBathNumber] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [distributionChannelError, setDistributionChannelError] = useState("");
  const [distributionChannel, setDistributionChannel] = useState("");
  // const years = Array.from({ length: 20 }, (_, index) => currentYear - index);
  // const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   setDateOfIncorporation(selectedDate);
  //   const dateObject = new Date(selectedDate);
  //   const year = dateObject.getFullYear();
  //   const month = dateObject.getMonth() + 1;

  //   setYearOfIncorporation(year.toString());
  //   setMonthOfIncorporation(month.toString());
  // };

  useEffect(() => {
    calculateAge();
  }, [yearOfIncorporation, monthOfIncorporation]);

  const calculateAge = () => {
    if (yearOfIncorporation && monthOfIncorporation) {
      const currentDate = new Date();
      const selectedDate = new Date(
        parseInt(yearOfIncorporation, 10),
        parseInt(monthOfIncorporation, 10) - 1
      );

      const ageInMilliseconds = currentDate - selectedDate;
      const ageInYears = Math.floor(
        ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
      );
      console.log("Age of the company:", ageInYears);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const uniqueCountries = data.map((country) => country.name.common);
        const sortedCountries = uniqueCountries.sort(); // Sort the countries alphabetically

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const distributionChannels = [
    "Online Sales",
    "Direct Sales",
    "Retail Partnerships",
  ];

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
  };

  const validateCompanyName = () => {
    if (!companyName) {
      setCompanyNameError("Company Name is required");
      return false;
    }
    setCompanyNameError("");
    return true;
  };

  const validateWebsite = () => {
    if (!website) {
      setWebsiteError("Website is required");
      return false;
    }
    setWebsiteError("");
    return true;
  };

  const validateContact = () => {
    if (!contact) {
      setContactError("Contact is required");
      return false;
    }
    setContactError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Valid Email Address is required");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateLocation = () => {
    if (!location) {
      setLocationError("Location is required");
      return false;
    }
    setLocationError("");
    return true;
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError("Country is required");
      return false;
    }
    setCountryError("");
    return true;
  };

  const validatePostalCode = () => {
    if (!postalCode) {
      setPostalCodeError("Postal Code is required");
      return false;
    }
    setPostalCodeError("");
    return true;
  };

  const validateCompanyCategory = () => {
    if (!companyCategory) {
      setCompanyCategoryError("Company Category is required");
      return false;
    }
    setCompanyCategoryError("");
    return true;
  };

  const validateSector = () => {
    if (!sector) {
      setSectorError("Sector is required");
      return false;
    }
    setSectorError("");
    return true;
  };
  const handleImageClicks = () => {
    fileInputRef.current.click();
  };

  const handleFileChanges = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCompanyTradeLicense(file);
    }
  };

  const validateRegistrationNumber = () => {
    if (!registrationNumber) {
      setRegistrationNumberError("Corporate Registration Number is required");
      return false;
    }
    setRegistrationNumberError("");
    return true;
  };

  const validateCompanyVision = () => {
    if (!companyVision) {
      setCompanyVisionError("Company Vision is required");
      return false;
    }
    setCompanyVisionError("");
    return true;
  };

  const validateCompanyMission = () => {
    if (!companyMission) {
      setCompanyMissionError("Company Mission is required");
      return false;
    }
    setCompanyMissionError("");
    return true;
  };

  const validateEmployeeRange = () => {
    if (!employeeRange) {
      setEmployeeRangeError("Overall Employee Range is required");
      return false;
    }
    setEmployeeRangeError("");
    return true;
  };

  const validateNumberOfBranches = () => {
    if (!numberOfBranches) {
      setNumberOfBranchesError("Number of Branches is required");
      return false;
    }
    setNumberOfBranchesError("");
    return true;
  };

  const validateCompanyDescription = () => {
    if (!companyDescription) {
      setCompanyDescriptionError("Description about the Company is required");
      return false;
    }
    setCompanyDescriptionError("");
    return true;
  };
  const validateDistributionChannel = () => {
    if (!distributionChannel) {
      setDistributionChannelError("Please select a distribution channel.");
    } else {
      setDistributionChannelError("");
    }
  };
  const validateAddress = () => {
    if (!address) {
      setAddressError("Address is required");
      return false;
    }
    setAddressError("");
    return true;
  };

  // const validateState = () => {
  //   if (!state) {
  //     setStateError("State is required");
  //     return false;
  //   }
  //   setStateError("");
  //   return true;
  // };
  const handleProductInformationChange = (e) => {
    setProductInformation(e.target.value);
  };

  // const validateDistrict = () => {
  //   if (!district) {
  //     setDistrictError("District is required");
  //     return false;
  //   }
  //   setDistrictError("");
  //   return true;
  // };

  const validateZipcode = () => {
    if (!zipcode) {
      setZipcodeError("Zipcode is required");
      return false;
    }
    setZipcodeError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCompanyNameValid = validateCompanyName();
    const isWebsiteValid = validateWebsite();
    const isContactValid = validateContact();
    const isEmailValid = validateEmail();
    const isLocationValid = validateLocation();
    const isCountryValid = validateCountry();
    const isPostalCodeValid = validatePostalCode();

    if (
      isCompanyNameValid &&
      isWebsiteValid &&
      isContactValid &&
      isEmailValid &&
      isLocationValid &&
      isCountryValid &&
      // isRegionValid &&
      isPostalCodeValid
    ) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed. Please check the errors.");
    }
  };
  const tamilNaduDistricts = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Jammu and Kashmir",
    "Ladakh",
  ];
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDateOfIncorporation(selectedDate);

    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);
    const timeDifference = currentDate - selectedDateObj;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.44)
    );
    const days = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );

    const ageString = `${years} years, ${months} months, ${days} days`;
    setAge(ageString);
    setAgeError("");

    if (currentDate < selectedDateObj) {
      setAgeError("Invalid date of incorporation (future date)");
    }
  };
  const companyCategories = [
    "Sole Proprietorship",
    "Limited Liability Company (LLC)",
    "Partnership",
    "Corporation",
    "Cooperative",
    "Joint Venture",
    "Nonprofit Corporation",
    "Subchapter S Corporation",
    "Public Limited Company (PLC)",
    "Private Limited Company",
    "General Partnership",
    "Limited Partnership",
    "Limited Liability Partnership (LLP)",
    "Benefit Corporation",
    "B Corporation",
    "Closed Corporation",
    "Professional Corporation",
    "Holding Company",
    "Foreign Corporation",
    "Worker Cooperative",
    "Franchise",
    "Family Limited Partnership",
    "S Corporation",
    "Community Interest Company (CIC)",
    "Social Enterprise",
    "Micro business",
    "Small Business",
    "Medium-sized Enterprise (SME)",
    "Large Enterprise",
  ];
  const sectors = [
    "Airlines/Aviation",
    "Advertising Agency",
    "Agriculture/Allied Industries",
    "Automobiles",
    "Autoparts",
    "Auto Fimnance",
    "Arms Dealer",
    "Accounting",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel & Fashion",
    "Architecture & Planning",
    "Arts and Crafts",
    "Automotive",
    "Aviation & Aerospace",
    "Banking/Financial Services",
    "Biotechnology",
    "Broadcast Media",
    "Building Materials",
    "Business Supplies and Equipment",
    "Capital Markets",
    "Call Centers/BPO",
    "Chemicals",
    "Chit Funds",
    "Cements/Paints",
    "Civic & Social Organization",
    "Civil Engineering",
    "Commercial Real Estate",
    "Computer & Network Security",
    "Computer Games",
    "Computer Hardware",
    "Computer Networking",
    "Computer Software",
    "Consultancy",
    "Construction",
    "Consumer Durables",
    "Consumer Electronics",
    "Consumer Goods",
    "Consumer Services",
    "Construction/Real Estate",
    "Courier/Cargo",
    "Cosmetics",
    "Dairy",
    "Defense & Space",
    "Design",
    "Engineering/Capital Goods",
    "Education Management",
    "E-learning",
    "Electronics",
    "Electrical & Electronic Manufacturing",
    "Entertainment",
    "Environmental Services",
    "Events Services",
    "Executive Office",
    "Fertilizers/Chemicals/Seeds",
    "Facilities Services",
    "Farming",
    "Financial Services",
    "Fine Art",
    "Fisheries/Poultry",
    "Forex Dealers/Bullion",
    "Food & Beverages",
    "Food Production",
    "Fundraising",
    "Furniture/Timber",
    "Gems/Jewellery",
    "Gambling & Casinos",
    "Glass, Ceramics & Concrete",
    "Government Bodies",
    "Government Administration",
    "Government Relations",
    "Graphic Design",
    "Health, Wellness & Fitness",
    "Higher Education",
    "Hostels/Restaurants",
    "Hospital & Health Care",
    "Hospitals/Clinics/Nursing Home",
    "Human Resources",
    "Import/Export",
    "Individual & Family Services",
    "Industrial Automation",
    "Infrastructure",
    "Information Services",
    "Information Technology & Services",
    "Insurance",
    "International Affairs",
    "International Trade and Development",
    "Internet",
    "Investment Banking",
    "Investment Management",
    "Judiciary",
    "Law Enforcement",
    "Law Practice",
    "Legal Services",
    "Legislative Office",
    "Leisure, Travel & Tourism",
    "Libraries",
    "Logistics & Supply Chain",
    "Luxury Goods & Jewelry",
    "Machinery",
    "Management Consulting",
    "Maritime",
    "Marbel/Granite",
    "Manufacturing",
    "Marketing & Advertising",
    "Market Research",
    "Mechanical or Industrial Engineering",
    "Media/Entertainment",
    "Media Production",
    "Medical Devices",
    "Medical Practice",
    "Mental/HealthCare",
    "Military",
    "Mining & Metals",
    "Motion Pictures & Film",
    "Money Lender",
    "Museums and Institutions",
    "Music",
    "Nanotechnology",
    "Newspapers",
    "Nonprofit Organization Management",
    "Oil & Energy",
    "Oil & Gas",
    "Online Media",
    "Outsourcing/Offshoring",
    "Pesticides",
    "Package/Freight Delivery",
    "Packaging and Containers",
    "Paper & Forest Products",
    "Performing Arts",
    "Petrol  Pumps",
    "Pharmaceuticals",
    "Philanthropy",
    "Photography",
    "Plastics",
    "Political Organization",
    "Primary/Secondary Education",
    "Printing/Publishing",
    "Professionals(Doctors,Lawyer,ENGG,Consulting,HR)",
    "Professional Training & Coaching",
    "Program Development",
    "Public Policy",
    "Public Relations and Communications",
    "Public Safety",
    "Publishing",
    "Railroad Manufacture",
    "Ranching",
    "Real Estate",
    "Recreational Facilities and Services",
    "Religious Institutions",
    "Renewables & Environment",
    "Research",
    "Restaurants",
    "Retail Chain/FMCG",
    "Science & Technology",
    "School/Colleges/Institutes",
    "Security and Investigations",
    "Semiconductors",
    "Shipbuilding",
    "Sporting Goods",
    "Sports",
    "Stocks & Shares",
    "Staffing and Recruiting",
    "Steel/Hardware",
    "Supermarkets",
    "Tech Startups",
    "Telecommunications",
    "Textiles/Garments",
    "Think Tanks",
    "Tobacco",
    "Translation and Localization",
    "Travel & Tourism",
    "Transportation & Logistics",
    "Utilities",
    "Venture Capital & Private Equity",
    "Veterinary",
    "Warehousing",
    "Wholesale",
    "Wine and Spirits",
    "Wireless",
    "Writing and Editing",
  ];

  return (
    <div className="Company-Profile">
      <div className="card">
        <div className="row">
          <div className="col-1">
            <div className="com-img">
              <img
                src={bird}
                alt=""
                className="img-fluid"
                style={{
                  width: "110px",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.09)",
                }}
              />
            </div>
          </div>
          <div className="col-11">
            <div className="texts">
              <div className="d-flex justify-content-between">
                <h5 className="m-0">Sheral Gropus</h5>
                <Button onClick={handleOpen}>
                  <i class="fi fi-rr-file-edit ms-2"></i>
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="row">
                      <div className="col-6">
                        <label className=" mt-1 label">Company Name</label>
                        <input
                          className={`header_company form-control mt-1 ${
                            companyNameError ? "invalid" : ""
                          }`}
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          onBlur={validateCompanyName}
                        />
                        {companyNameError && (
                          <p className="error-message">{companyNameError}</p>
                        )}
                      </div>

                      <div className="col-6">
                        <label className=" mt-1 label">Company Website</label>
                        <input
                          className={`header_company form-control mt-1 ${
                            websiteError ? "invalid" : ""
                          }`}
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          onBlur={validateWebsite}
                        />
                        {websiteError && (
                          <p className="error-message">{websiteError}</p>
                        )}
                      </div>

                      <div className="col-6">
                        <label className="mt-2 label">Company contact</label>
                        <input
                          className={`header_company form-control mt-1 ${
                            contactError ? "invalid" : ""
                          }`}
                          type="number"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          onBlur={validateContact}
                        />
                        {contactError && (
                          <p className="error-message">{contactError}</p>
                        )}
                      </div>

                      <div className="col-6">
                        <label className="mt-2 label">Email Address</label>
                        <input
                          className={`header_company form-control mt-1 ${
                            emailError ? "invalid" : ""
                          }`}
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={validateEmail}
                        />
                        {emailError && (
                          <p className="error-message">{emailError}</p>
                        )}
                      </div>

                      <h6 className="mt-2">Address :</h6>
                      <div className="col-6">
                        <label className=" label">Street</label>
                        <input
                          className={`header_company form-control mt-1 ${
                            addressError ? "invalid" : ""
                          }`}
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          onBlur={validateAddress}
                        />
                        {addressError && (
                          <p className="error-message">{addressError}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="mt-2 label">State</label>
                        <select
                          className="header_company form-control mt-1"
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                        >
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {stateError && (
                          <p className="error-message">{stateError}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="mt-2 label">District</label>
                        <select
                          className="header_company form-control mt-1"
                          value={selectedDistrict}
                          onChange={handleDistrictChange}
                        >
                          <option value="">Select District</option>
                          {tamilNaduDistricts.map((district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          ))}
                        </select>
                        {districtError && (
                          <p className="error-message">{districtError}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="mt-2 label">Location</label>
                        <select
                          className={`header_company form-control mt-1 ${
                            locationError ? "invalid" : ""
                          }`}
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          onBlur={validateLocation}
                        >
                          <option value="">Select Location</option>
                          {states.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {locationError && (
                          <p className="error-message">{locationError}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="mt-2 label">Country</label>
                        <select
                          className="form-control"
                          id="countryDropdown"
                          onChange={handleChange}
                          value={selectedCountry}
                        >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        {countryError && (
                          <p className="error-message">{countryError}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="mt-2 label">
                          Date of Incorporation
                        </label>
                        <input
                          className="header_company form-control mt-1"
                          type="date"
                          value={dateOfIncorporation}
                          onChange={handleDateChange}
                        />
                        {ageError && (
                          <p className="error-message">{ageError}</p>
                        )}
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="btn mt-2 btn-primary"
                          type="submit"
                          value="Submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
              <div className="bottom d-flex">
                <p className=" mb-0">Shethal@gmail.com</p>
                <p className="mx-4 mb-0">4552648632</p>
                <p className="mx-4 mb-0">Www.shetal.com</p>
              </div>
              <hr className="line" />
              <div className="address d-flex justify-content-between">
                <div className="current-ad">
                  <p>
                    Address :
                    <span>
                      #2 junstreet , velacherry ,Chennai- 50 ,TamilNadu .
                    </span>
                  </p>
                </div>
                <div className="head">
                  <p>
                    Head Quator :
                    <span>
                      #2 junstreet , velacherry ,Chennai- 50 ,TamilNadu .
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <p>
                  Company Category : <span> Patnership</span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Date of Incorporation : <span>20-11-2010</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <p>
                  Industry : <span> Financial Invest </span>
                </p>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <p>
                    Country : <span> India</span>
                  </p>
                  <Button onClick={handleOpenComp}>
                    <i class="fi fi-rr-file-edit ms-2"></i>
                  </Button>
                  <Modal
                    open={openComp}
                    onClose={handleCloseComp}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="row">
                        <div className="col-6">
                          <label className="mt-2 label">Company Category</label>
                          <select
                            className={`header_company form-control mt-1 ${
                              companyCategoryError ? "invalid" : ""
                            }`}
                            value={companyCategory}
                            onChange={(e) => setCompanyCategory(e.target.value)}
                            onBlur={validateCompanyCategory}
                          >
                            <option value="">Select Category</option>
                            {companyCategories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                          {companyCategoryError && (
                            <p className="error-message">
                              {companyCategoryError}
                            </p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">
                            Date of Incorporation
                          </label>
                          <input
                            className="header_company form-control mt-1"
                            type="date"
                            value={dateOfIncorporation}
                            onChange={handleDateChange}
                          />
                          {ageError && (
                            <p className="error-message">{ageError}</p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">Industry</label>
                          <select
                            className={`header_company form-control mt-1 ${
                              sectorError1 ? "invalid" : ""
                            }`}
                            value={sector1}
                            onChange={(e) => setSector1(e.target.value)}
                            onBlur={() =>
                              validateSector(sector1, setSectorError1)
                            }
                          >
                            <option value="">Select Sector</option>
                            {sectors.map((sector) => (
                              <option key={sector} value={sector}>
                                {sector}
                              </option>
                            ))}
                          </select>
                          {sectorError1 && (
                            <p className="error-message">{sectorError1}</p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">Country</label>
                          <select
                            className="form-control mt-1"
                            id="countryDropdown"
                            onChange={handleChange}
                            value={selectedCountry}
                          >
                            <option value="">Select Country</option>
                            {countries.map((country, index) => (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                          {countryError && (
                            <p className="error-message">{countryError}</p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">
                            Company Registration Number
                          </label>
                          <input
                            className={`header_company form-control mt-1${
                              registrationNumberError ? "invalid" : ""
                            }`}
                            type="text"
                            value={registrationNumber}
                            onChange={(e) =>
                              setRegistrationNumber(e.target.value)
                            }
                            onBlur={validateRegistrationNumber}
                          />
                          {registrationNumberError && (
                            <p className="error-message">
                              {registrationNumberError}
                            </p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">
                            Number of Branches
                          </label>
                          <input
                            className={`header_company form-control mt-1${
                              numberOfBranchesError ? "invalid" : ""
                            }`}
                            type="text"
                            value={numberOfBranches}
                            onChange={(e) =>
                              setNumberOfBranches(e.target.value)
                            }
                            onBlur={validateNumberOfBranches}
                          />
                          {numberOfBranchesError && (
                            <p className="error-message">
                              {numberOfBranchesError}
                            </p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">Company Vision</label>
                          <textarea
                            className={`header_company mt-1 form-control${
                              companyVisionError ? "invalid" : ""
                            }`}
                            type="text"
                            value={companyVision}
                            onChange={(e) => setCompanyVision(e.target.value)}
                            onBlur={validateCompanyVision}
                          />
                          {companyVisionError && (
                            <p className="error-message">
                              {companyVisionError}
                            </p>
                          )}
                        </div>
                        <div className="col-6"></div>
                        <div className="text-center">
                          <button className="btn mt-2 btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-6">
            <div className="row">
              <div className="col-2">
                <img src={license} alt="" className="img-fluid" />
              </div>
              <div className="col-7">
                <p>
                  Register NO : <span> U 1232 TN 2020 PT 879264</span>
                </p>
              </div>
              <div className="col-3">
                <p>
                  Branches : <span> 10</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>
              Company Vision :
              <span>
                Our vision is to become a globally recognized leader in
                providing innovative IT solutions that empower businesses to
                thrive in the digital era.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="row">
          <div className="col-6">
            <p>
              Description about the Company :
              <span>
                Dynamic Solutions, a trusted name in the finance industry, has
                been providing cutting-edge financial software and consulting
                services since 1985. Our flagship product, FinTech Pro, is a
                comprehensive financial software solution designed for managing
                and optimizing financial processes. With a team of 180 dedicated
                professionals, we empower financial institutions with robust
                solutions for strategic .
              </span>
            </p>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <p>
                  Employees : <span> 2- 30 </span>
                </p>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <p>
                    Location : <span> Chennai</span>
                  </p>
                  <Button onClick={handleOpenDesp}>
                    <i class="fi fi-rr-file-edit ms-2"></i>
                  </Button>
                  <Modal
                    open={openDesp}
                    onClose={handleCloseDesp}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="row">
                        <div className="col-6">
                          <label className="mt-2 label">
                            Description about the Company
                          </label>
                          <textarea
                            className={`header_company mt-1 form-control${
                              companyDescriptionError ? "invalid" : ""
                            }`}
                            type="text"
                            value={companyDescription}
                            onChange={(e) =>
                              setCompanyDescription(e.target.value)
                            }
                            onBlur={validateCompanyDescription}
                          />
                          {companyDescriptionError && (
                            <p className="error-message">
                              {companyDescriptionError}
                            </p>
                          )}
                        </div>
                        <div className="col-6">
                          <label className="mt-2 label">
                            Number of Employee
                          </label>
                          <input
                            className={`header_company mt-1 form-control${
                              employeeRangeError ? "invalid" : ""
                            }`}
                            type="number"
                            value={employeeRange}
                            onChange={(e) => setEmployeeRange(e.target.value)}
                            onBlur={validateEmployeeRange}
                          />
                          {employeeRangeError && (
                            <p className="error-message">
                              {employeeRangeError}
                            </p>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="" className="mt-2 label">
                            Location
                          </label>
                          <input
                            className="form-control mt-1"
                            placeholder="Enter Location"
                          />
                        </div>
                        <div className="text-center">
                          <button className="btn mt-2 btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between">
          <p>
            Product / Service Name : <span> TeleComMaster</span>
          </p>
          <Button onClick={handleOpenpro}>
            <i class="fi fi-rr-file-edit ms-2"></i>
          </Button>
          <Modal
            open={openpro}
            onClose={handleClosepro}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="row">
                <div className="col-6">
                  <label className="mt-2 label">product Name</label>
                  <input
                    className="header_company form-control mt-1"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <label className="mt-2 label">Product Description</label>
                  <textarea
                    className="header_company form-control mt-1"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button className="btn mt-2 btn-primary">Submit</button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <p>
          Description :
          <span>
            TeleComMaster is our advanced line of telecom equipment designed for
            high-performance and secure communication networks. With a focus on
            reliability and innovation, TeleComMaster products are engineered to
            meet the evolving needs of the telecom industry.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Vehicle;
