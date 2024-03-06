import React, { useState } from "react";
import "./job.css";
import bird from "../assets/images/bird_2.jpg";
import { Link } from "react-router-dom";

// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddressForm from "./address";
import Work from "./work2";

function createData(name, calories, fat, carbs, Description) {
  return { name, calories, fat, carbs, Description };
}

const rows = [
  createData(
    "Fan",
    "USHA",
    "1 month",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
  createData(
    "Sofa",
    "Furtniture ",
    "1 montnh",
    " 20-10-12",
    "Minor scratches on the fan blades.Excellent working condition."
  ),
];

// Vehicle

function vehicleData(model, type, vehicleNo, dealerAgency, description) {
  return { model, type, vehicleNo, dealerAgency, description };
}

const vehiclerows = [
  vehicleData(
    "Toyota Camry",
    "Sedan",
    "ABC123",
    "Toyota Dealership",
    "Reliable sedan with advanced safety features"
  ),
  vehicleData(
    "Ford Explorer",
    "SUV",
    "XYZ789",
    "Ford Dealership",
    "Versatile SUV with spacious interior and modern technology"
  ),
  vehicleData(
    "Chevrolet Corvette",
    "Sports Car",
    "DEF456",
    "Chevrolet Dealership",
    "High-performance sports car known for speed and style"
  ),
];

// Gadget

function gadgetData(gadget, brand, warranty, purchaseDate, description) {
  return { gadget, brand, warranty, purchaseDate, description };
}

const gadgetrows = [
  gadgetData(
    "Smartphone",
    "ABC Brand",
    "1 year",
    "2023-01-15",
    "High-end smartphone with advanced features"
  ),
  gadgetData(
    "Laptop",
    "XYZ Brand",
    "2 years",
    "2022-09-28",
    "Powerful laptop for gaming and productivity"
  ),
  gadgetData(
    "Smartwatch",
    "PQR Brand",
    "1.5 years",
    "2023-05-10",
    "Fitness tracking and notifications"
  ),
  gadgetData(
    "Tablet",
    "LMN Brand",
    "1 year",
    "2022-11-20",
    "Portable tablet for entertainment and work"
  ),
  gadgetData(
    "Camera",
    "DEF Brand",
    "3 years",
    "2022-07-05",
    "Professional-grade camera for photography"
  ),
];

//property
function createDatas(
  type,
  availability,
  property,
  location,
  description,
  land
) {
  return { type, availability, property, location, description, land };
}

const propertys = [
  createDatas(
    "House - 2BHK",
    "RENT",
    "Residential",
    "2500Sqft",
    "Chennai",
    "Charming 2-bed, 1-bath in Cityville. Cozy living space, updated kitchen. Close to amenities. Ideal for couples or singles. Check it out!"
  ),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

const modaljob = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "0px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

function Job() {
  const [profileData, setProfileData] = useState({
    gender: "",
  });

  const [Name, setName] = React.useState(false);
  const handleNameOpen = () => setName(true);
  const handleNameClose = () => setName(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [personal, setpersonal] = React.useState(false);
  const handlePersonalOpen = () => setpersonal(true);
  const handlePersonalClose = () => setpersonal(false);

  const [Education, setEducation] = React.useState(false);
  const handleEducationOpen = () => setEducation(true);
  const handleEducationClose = () => setEducation(false);

  const [Job, setJob] = React.useState(false);
  const handleJobOpen = () => setJob(true);
  const handleJobClose = () => setJob(false);

  const [Home, setHome] = React.useState(false);
  const handleHomeOpen = () => setHome(true);
  const handleHomeClose = () => setHome(false);

  const [Vehicle, setVehicle] = React.useState(false);
  const handleVehicleOpen = () => setVehicle(true);
  const handleVehicleClose = () => setVehicle(false);

  const [Gadget, setGadget] = React.useState(false);
  const handleGadgetOpen = () => setGadget(true);
  const handleGadgetClose = () => setGadget(false);

  const [Property, setProperty] = React.useState(false);
  const handlePropertyOpen = () => setProperty(true);
  const handlePropertyClose = () => setProperty(false);
  const [selectedSpecializations, setSelectedSpecializations] = useState("");

  const handleGenderClick = (selectedGender) => {
    setProfileData((prevData) => ({ ...prevData, gender: selectedGender }));
  };

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [commercialType, setCommercialType] = useState("");
  const [residentialType, setResidentialType] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [furnishingOptions, setFurnishingOptions] = useState([]);
  const [saleDate, setSaleDate] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [saleAmount, setSaleAmount] = useState("");
  const [saleDetails, setSaleDetails] = useState([]);
  const [agriculturalType, setAgriculturalType] = useState("");
  const [industrialType, setIndustrialType] = useState("");
  const [propertyStatus, setPropertyStatus] = useState("");
  const [landSquarefit, setLandSquarefit] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");

  const handlePropertyTypeChange = (propertyType) => {
    // If the property type is commercial, unselect other types
    if (propertyType === "commercial") {
      setCommercialType("");
      setResidentialType("");
      setBhkType("");
      setAgriculturalType("");
      setIndustrialType("");
    } else if (propertyType === "house") {
      // If the property type is house, unselect other types
      setCommercialType("");
      setAgriculturalType("");
      setIndustrialType("");
    } else if (propertyType === "agricultural") {
      // If the property type is agricultural, unselect other types
      setCommercialType("");
      setResidentialType("");
      setBhkType("");
      setIndustrialType("");
    } else if (propertyType === "industrial") {
      // If the property type is industrial, unselect other types
      setCommercialType("");
      setResidentialType("");
      setBhkType("");
      setAgriculturalType("");
    }

    const updatedPropertyTypes = [propertyType];
    setPropertyTypes(updatedPropertyTypes);
  };

  const handleResidentialTypeChange = (event) => {
    setResidentialType(event.target.value);
  };
  const handlePropertyDescriptionChange = (event) => {
    setPropertyDescription(event.target.value);
  };

  const handleBhkTypeChange = (bhkType) => {
    setBhkType(bhkType);
  };
  const handleAgriculturalTypeChange = (e) => {
    setAgriculturalType(e.target.value);
  };

  const handleIndustrialTypeChange = (e) => {
    setIndustrialType(e.target.value);
  };
  const handleDeleteDetails = (index) => {
    const updatedSaleDetails = [...saleDetails];
    updatedSaleDetails.splice(index, 1);
    setSaleDetails(updatedSaleDetails);
  };
  const handleAddDetails = () => {
    const newSaleDetails = {
      propertyTypes,
      commercialType,
      residentialType,
      bhkType,
      furnishingOptions,
      saleDate,
      sellerName,
      propertyLocation,
      saleAmount,
      agriculturalType,
      industrialType,
      propertyStatus,
      landSquarefit,
    };

    setSaleDetails([newSaleDetails]);
    setPropertyTypes([]);
    setCommercialType("");
    setResidentialType("");
    setBhkType("");
    setFurnishingOptions([]);
    setSaleDate("");
    setSellerName("");
    setPropertyLocation("");
    setSaleAmount("");
    setAgriculturalType("");
    setIndustrialType("");
    setPropertyStatus("");
    setLandSquarefit("");
  };

  // education

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };
  const handleSpecializationsChange = (e) => {
    setSelectedSpecializations(e.target.value);
  };
  const Specializations = [
    // Engineering
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    "Software Engineering",

    // Computer Science
    "Computer Science",
    "Computer Application",
    "Data Science",
    "Information Technology",
    "Web Development",
    "Mobile App Development",
    "Cybersecurity",
    "Artificial Intelligence",

    // Health Sciences
    "Nursing",
    "Medicine",
    "Pharmacy",
    "Public Health",
    "Physical Therapy",
    "Occupational Therapy",
    "Radiology",

    // Business and Management
    "Finance",
    "Marketing",
    "Human Resources",
    "International Business",
    "Entrepreneurship",
    "Operations Management",
    "Supply Chain Management",

    // Social Sciences
    "Psychology",
    "Sociology",
    "Anthropology",
    "Political Science",
    "Economics",
    "International Relations",
    "Criminology",

    // Natural Sciences
    "Biology",
    "Chemistry",
    "Physics",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Mathematics",

    // Humanities
    "English Literature",
    "History",
    "Philosophy",
    "Fine Arts",
    "Linguistics",
    "Cultural Studies",
    "Music",

    // Education
    "Elementary Education",
    "Secondary Education",
    "Special Education",
    "Educational Leadership",
    "Curriculum and Instruction",
    "Counseling",

    // Media and Communication
    "Journalism",
    "Public Relations",
    "Media Studies",
    "Advertising",
    "Broadcasting",
    "Digital Media",

    // Information Technology
    "Network Administration",
    "Cloud Computing",
    "Digital Forensics",
    "IT Management",

    // Design
    "Graphic Design",
    "Industrial Design",
    "Interior Design",
    "Fashion Design",
    "UX/UI Design",
    "Game Design",

    // Agriculture and Environmental Science
    "Agronomy",
    "Horticulture",
    "Forestry",
    "Soil Science",
    "Environmental Management",
    "Wildlife Biology",
  ];
  const [selectedDegree, setSelectedDegree] = useState("");
  const allDegrees = [
    "Associate's",
    "Bachelor's",
    "Master's",
    "Ph.D.",
    "MD",
    "DMD",
    "DVM",
    "PharmD",
    "JD",
    "BSE",
    "MSE",
    "DEng",
    "BCA",
    "BSCS",
    "MSCS",
    "DCS",
    "BBA",
    "MBA",
    "DBA",
    "BSN",
    "MPH",
    "MD",
    "DMD",
    "PharmD",
    "BAP",
    "MAS",
    "PhD",
    "BS",
    "MS",
    "PhD",
    "BA",
    "MFA",
    "PhD",
    "BEd",
    "MEd",
    "EdD",
    "BA",
    "MA",
    "DC",
    "BSIT",
    "MSIS",
    "DIT",
    "BFA",
    "MDes",
    "DDes",
    "BSA",
    "MSES",
    "PhD",
  ];
  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value);
  };
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const allUniversities = [
    "Research University",
    "Liberal Arts University",
    "Technical University",
    "Medical University",
    "Engineering University",
    "Business School",
    "Law School",
    "Art and Design School",
    "Agricultural University",
    "Music Conservatory",
    "Open University",
    "Online University",
    "Madras university",
    "Anna university",
    "Private University",
    "Public University",
    "Ivy League",
    "Historically Black College or University (HBCU)",
    "Community College",
    "State University",
    "International University",
    "Religious University",
    "Military Academy",
    "Women s University",
    "Men s University",
  ];
  const schoolQualificationList = [
    "SSLC (Secondary School Leaving Certificate)",
    "HSC (Higher Secondary Certificate)",
    "CBSE (Central Board of Secondary Education)",
    "ICSE (Indian Certificate of Secondary Education)",
    "ISC (Indian School Certificate)",
    "State Board",
    "Matriculation",
    "O-Level (Ordinary Level)",
    "A-Level (Advanced Level)",
    "GED (General Educational Development)",
    "High School Diploma",
    "National Certificate of Educational Achievement (NCEA)",
    "Brevet des Collèges",
    "Diploma di Maturità",
    "Abitur",
    "Eindexamen",
    "Leaving Certificate",
    "Matura",
    "Selectividad",
    "Vysvedčenie o maturitnej skúške",
    // Add more qualifications as needed
  ];
  const academicDisciplines = [
    "Computer Science",
    "Mathematics",
    "Biology",
    "Physics",
    "Chemistry",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Economics",
    "Political Science",
    "Psychology",
    "Sociology",
    "Anthropology",
    "History",
    "Philosophy",
    "Literature",
    "Languages and Linguistics",
    "Art History",
    "Music Theory",
    "Drama and Theater Arts",
    "Dance",
    "Film Studies",
    "Media Studies",
    "Communication Sciences",
    "Business Administration",
    "Marketing",
    "Finance",
    "Accounting",
    "Human Resource Management",
    "International Business",
    "Entrepreneurship",
    "Medical Science",
    "Nursing",
    "Pharmacy",
    "Dentistry",
    "Veterinary Science",
    "Physics Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    // Add more disciplines as needed
  ];

  const handleDegreeChange = (e) => {
    setSelectedDegree(e.target.value);
  };
  const [currentEducation, setCurrentEducation] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
    highestQualification: "",
    specialization: "",
    collegeName: "",
    graduatedYear: "",
    educationType: "",
  });
  const [highestEducationOptions] = useState([
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D.",
  ]);

  const degreeSpecializations = [
    "Civil Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Aerospace Engineering",
    "Chemical Engineering",
    "Computer Engineering",
    "Environmental Engineering",
    "Software Engineering",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Information Systems",
    "Web Development",
    "Mobile App Development",
    "Nursing",
    "Medicine",
    "Pharmacy",
    "Public Health",
    "Physical Therapy",
    "Occupational Therapy",
    "Radiology",
    "Finance",
    "Marketing",
    "Human Resources",
    "International Business",
    "Entrepreneurship",
    "Operations Management",
    "Supply Chain Management",
    "Psychology",
    "Sociology",
    "Anthropology",
    "Political Science",
    "Economics",
    "International Relations",
    "Criminology",
    "Biology",
    "Chemistry",
    "Physics",
    "Environmental Science",
    "Geology",
    "Astronomy",
    "Mathematics",
    "English Literature",
    "History",
    "Philosophy",
    "Fine Arts",
    "Linguistics",
    "Cultural Studies",
    "Music",
    "Elementary Education",
    "Secondary Education",
    "Special Education",
    "Educational Leadership",
    "Curriculum and Instruction",
    "Counseling",
    "Journalism",
    "Public Relations",
    "Media Studies",
    "Advertising",
    "Broadcasting",
    "Digital Media",
    "Information Technology",
    "Network Administration",
    "Cybersecurity",
    "Cloud Computing",
    "Digital Forensics",
    "IT Management",
    "Graphic Design",
    "Industrial Design",
    "Interior Design",
    "Fashion Design",
    "UX/UI Design",
    "Game Design",
    "Agronomy",
    "Horticulture",
    "Forestry",
    "Soil Science",
    "Environmental Management",
    "Wildlife Biology",
  ];
  const handleEducationDetailsChange = (index, field, value) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails[index] = {
      ...updatedEducationDetails[index],
      [field]: value,
    };
    setEducationDetails(updatedEducationDetails);
  };
  const [educationDetails, setEducationDetails] = useState([
    {
      highestQualification: true,
      course: "",
      specialization: "",
      year: "",
      university: "",
    },
  ]);

  return (
    <div className="job">
      <div className="card mt-4" style={{ position: "relative" }}>
        <div className="profile">
          <div className="pro-img text-center">
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
          <h5 className=" text-center mt-2">
            Tovino Thomas
            <sup>
              <Button
                onClick={handleNameOpen}
                style={{ position: "absolute", top: "-7rem", right: " -33rem" }}
              >
                <Link to="/main/demo">
                  <i class="fi fi-rr-file-edit ms-2"></i>
                </Link>
              </Button>
              <Modal
                open={Name}
                onClose={handleNameClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <p>NAme</p>
                  <button onClick={handleNameClose}>Close</button>
                </Box>
              </Modal>
            </sup>
          </h5>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Contact Information</h5>
          <p>
            <Button onClick={handleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
          </p>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="row">
                {/* <div className="col-6 my-2">
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter your Email Id"
                    name="email"
                  />
                </div> */}
                <div className="col-6 my-2">
                  <label className="mb-1" htmlFor="">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Enter your mobile no"
                    // onChange={handleChange}
                    name="phoneNumber1"
                    // value={currentContact.phoneNumber1}
                  />
                </div>
                <div className="col-6"></div>
                <label className="mt-3">Address</label>
                <div className="col-6 my-2">
                  <input
                    type="text"
                    className="form-control col-12 col-md-3"
                    placeholder="Street"
                    // onChange={handleChange}
                    name="street"
                    // value={currentAddress.street}
                  />
                </div>
                <div className="col-6 my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Place/Village"
                    // onChange={handleChange}
                    name="placeVillage"
                    // value={currentAddress.placeVillage}
                  />
                </div>
                <div className="col-6 my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Taluk"
                    // onChange={handleChange}
                    name="taluk"
                    // value={currentAddress.taluk}
                  />
                </div>
                <div className="col-6 my-2">
                  <select
                    className="header_company form-control"
                    // value={selectedDistrict}
                    // onChange={handleDistrictChange}
                  >
                    <option value="">Select District</option>
                    {/* {tamilNaduDistricts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="col-6 my-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Zip Code"
                    // onChange={handleChange}
                    name="zipCode"
                    // value={currentAddress.zipCode}
                  />
                </div>
                <div className="col-6 my-2"></div>
                {/* <label className="mt-3">Id Proof</label> */}
                <div className="col-6 my-2">
                  <label className="form-label" htmlFor="idNumber">
                    ID Prof:
                  </label>
                  <select
                    id="idProof"
                    className="form-select col-md-4 form-control"
                    // value={idProof}
                    // onChange={handleIdProofChange}
                  >
                    <option value="">Select ID Proof</option>
                    <option value="passport">Passport</option>
                    <option value="drivingLicense">Driving License</option>
                    <option value="aadharCard">Aadhar Card</option>
                    <option value="nationalIdCard">National ID Card</option>
                  </select>
                </div>
                <div className="col-6 my-2">
                  <label className="form-label" htmlFor="idNumber">
                    ID Number:
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    className="form-control"
                    // value={idNumber}
                    // onChange={handleIdNumberChange}
                  />
                </div>
                <div className="col-6 my-2">
                  <label className="form-label" htmlFor="issueDate">
                    Issue Date:
                  </label>
                  <input
                    type="date"
                    id="issueDate"
                    className="form-control"
                    // value={issueDate}
                    // onChange={handleIssueDateChange}
                  />
                </div>
                <div className="col-6 my-2">
                  <label className="mb-1" htmlFor="countryDropdown">
                    Select a Country:
                  </label>
                  <select
                    className="form-control"
                    id="countryDropdown"
                    // onChange={handleChange}
                    // value={selectedCountry}
                  >
                    {/* <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="col-6 my-2">
                  <label className="form-label" htmlFor="issuingAuthority">
                    Issuing Authority:
                  </label>
                  <input
                    type="text"
                    id="issuingAuthority"
                    className="form-control"
                    // value={issuingAuthority}
                    // onChange={handleIssuingAuthorityChange}
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <button className="btn btn-danger me-2">Cancel</button>
                <button className="btn btn-primary">Submit</button>
              </div>
            </Box>
          </Modal>
        </div>
        <div className="expand">
          <div className="row">
            <div className="col-md-4">
              <p>
                Email : <span> Tovino@gmail.com </span>
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Mobile No : <span>9988776655</span>
              </p>
            </div>
            <div className="col-md-4">
              <p>
                Address :
                <span>
                  above Super Star Briyani, Ram Nagar South, Pallikaranai,
                  Chennai, Tamil Nadu 600100
                </span>
              </p>
            </div>
          </div>
          <h6 className="">ID Proof</h6>
          <div className="row">
            <div className="col-md-3">
              <p className="mb-0">
                Aadhar Card : <span> 233411231342</span>
              </p>
            </div>
            <div className="col-md-2">
              <p className="mb-0">
                Issue : <span> 23-01-342</span>
              </p>
            </div>
            <div className="col-md-2">
              <p className="mb-0">
                Expire : <span> 23-01-342</span>
              </p>
            </div>
            <div className="col-md-2">
              <p className="mb-0">
                Country : <span> India</span>
              </p>
            </div>
            <div className="col-md-3">
              <p className="mb-0">
                Issuing Authority : <span> Samsung</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Personal Details</h5>
          <p>
            <Button onClick={handlePersonalOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={personal}
              onClose={handlePersonalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <div className="col-6 my-2">
                    <label className="labels mb-2 ">DOB</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date of birth"
                      // value={profileData.dob}
                      // onChange={handleChange}
                      name="dob"
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label className="labels mb-2">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age"
                      // value={profileData.age}
                      // onChange={handleChange}
                    />
                  </div>
                  <div className="col-7 my-2">
                    <label className="labels mb-2">Gender:</label>
                    <div className="flex">
                      <button
                        type="button"
                        className={`btn btn-outline-primary ${
                          profileData.gender === "Male" && "active"
                        }`}
                        onClick={() => handleGenderClick("Male")}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        className={`btn btn-outline-primary mx-3 ${
                          profileData.gender === "Female" && "active"
                        }`}
                        onClick={() => handleGenderClick("Female")}
                      >
                        Female
                      </button>
                      <button
                        type="button"
                        className={`btn btn-outline-primary ${
                          profileData.gender === "Transgender" && "active"
                        }`}
                        onClick={() => handleGenderClick("Transgender")}
                      >
                        Transgender
                      </button>
                    </div>
                  </div>
                  <div className="col-5 my-2">
                    <label className="mb-1" htmlFor="mb-2">
                      Marital status
                    </label>
                    <select
                      className="form-control mt-2"
                      id="countryDropdown"
                      // onChange={handleChange}
                      // value={selectedCountry}
                    >
                      <option value="">Select Country</option>
                      {/*{countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))} */}
                    </select>
                  </div>
                  <div className="col-6 my-2">
                    <label className="labels mb-2">Occupation</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Occupation"
                      // value={profileData.age}
                      // onChange={handleChange}
                    />
                  </div>
                  <h6 className="mt-2">Disability Details :</h6>
                  <div className="col-6 my-2">
                    <label htmlFor="">Disability</label>
                    <div className="d-flex my-2">
                      <div className="d-flex align-items-center">
                        <input type="radio" name="" id="" />
                        <label htmlFor="" className="ms-1">
                          Yes
                        </label>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                        <input type="radio" name="" id="" />
                        <label htmlFor="" className="ms-1">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 my-2">
                    <label className="labels mb-2">Description</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Description"
                      // value={profileData.age}
                      // onChange={handleChange}
                    />
                  </div>
                  <h6 htmlFor="">Relationship Details :</h6>
                  <div className="col-6 my-2">
                    <label htmlFor="" className="mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Name"
                      id=""
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="" className="mb-1">
                      Dob
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date of birth"
                      // value={profileData.dob}
                      // onChange={handleChange}
                      name="dob"
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="" className="mb-1">
                      Relation
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Relation"
                      id=""
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="" className="mb-1">
                      Age
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Age"
                      id=""
                    />
                  </div>
                  <div className="text-center mt-2">
                    <button className="btn btn-danger me-2">Cancel</button>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="expand">
          <div className="row">
            <div className="col-md-2">
              <p>
                DOB : <span> 21-01-22</span>
              </p>
            </div>
            <div className="col-md-2">
              <p>
                Age : <span> 21</span>
              </p>
            </div>
            <div className="col-md-2">
              <p>
                Gender : <span> Male</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Material Status : <span> Married</span>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Occupation : <span> VideoGraph</span>
              </p>
            </div>
          </div>
        </div>
        <h6 className="mt-3">Disability Details</h6>
        <div className="row">
          <div className="col-md-2">
            <p>
              Disability : <span>yes</span>
            </p>
          </div>
          <div className="col-md-3">
            <p>
              Description : <span>ColorBlindness</span>
            </p>
          </div>
        </div>
        <h6 className="mt-3">Relationship Details</h6>
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">
              Name : <span> SaraTara</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Dob : <span> 21-01-68</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Relation : <span> Mother</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="mb-0">
              Age : <span> 55</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Education</h5>
          <p>
            <Button onClick={handleEducationOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Education}
              onClose={handleEducationClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  {educationDetails.map((education, index) => (
                    <div key={index}>
                      {education.highestQualification && (
                        <div>
                          <h5 className="labels mb-2">Education Details:</h5>
                          <div className="row pb-4">
                            <h2 className="labels px-3">College Details:</h2>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Select Course:
                              </label>
                              <select
                                className="form-control"
                                value={selectedDegree}
                                onChange={handleDegreeChange}
                              >
                                <option value="">Select Degree</option>
                                {allDegrees.map((degree, index) => (
                                  <option key={index} value={degree}>
                                    {degree}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Select Specialization:
                              </label>
                              <select
                                className="form-control"
                                value={selectedSpecializations}
                                onChange={handleSpecializationsChange}
                              >
                                <option value="">Select Course</option>
                                {Specializations.map((course, index) => (
                                  <option key={index} value={course}>
                                    {course}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">Start Year:</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="start year"
                                value={education.collegeStartYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "collegeStartYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">End Year:</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="end year"
                                value={education.endYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "endYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Select University:
                              </label>
                              <select
                                className="form-control"
                                value={selectedUniversity}
                                onChange={handleUniversityChange}
                              >
                                <option value="">Select University</option>
                                {allUniversities.map((university, index) => (
                                  <option key={index} value={university}>
                                    {university}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Enter College Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={education.schoolName}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolName",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>

                          <div className="row">
                            <h5 className="labels">School Details:</h5>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Qualification:
                              </label>
                              <select className="form-select">
                                <option value="">
                                  Select School Qualification
                                </option>
                                {schoolQualificationList.map(
                                  (qualification, index) => (
                                    <option key={index} value={qualification}>
                                      {qualification}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Specialization:
                              </label>
                              <select className="form-select">
                                <option value="">Select Specialization</option>
                                {academicDisciplines.map(
                                  (discipline, index) => (
                                    <option key={index} value={discipline}>
                                      {discipline}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">Start Year:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Start Year"
                                value={education.schoolStartYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolStartYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">End Year:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter End Year"
                                value={education.endYear}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "endYear",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-6 my-2">
                              <label className="form-label">
                                Enter School Name:
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                value={education.schoolName}
                                onChange={(e) =>
                                  handleEducationDetailsChange(
                                    index,
                                    "schoolName",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-center">
                  <button type="button" class="btn btn-danger me-2">
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              School -
              <span>
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet.
              </span>
            </p>
            <p>
              B.com Accounts - <span> 98%</span>
            </p>
            <p>
              <span>2018 - 2021</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Job Details</h5>
          <p>
            <Button onClick={handleJobOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Job}
              onClose={handleJobClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modaljob}>
                <div className="">
                  <Work></Work>
                  <div className="text-center mt-2">
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleJobClose}
                    >
                      Cancel
                    </button>
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            Are you a working Professional or Fresher : <span>Experience</span>
          </p>
          <p>
            Resume : <span> Shetal resume.pdf</span>
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>
              Designation : <span> WebDesigner</span>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Years : <span>1 years</span>
            </p>
          </div>
        </div>
        <p>
          Skills : <span> Html ,CSS ,Javascript , React , Figma .</span>
        </p>
        <p>
          Previous Company : <span> Sanjai rama IT park .</span>
        </p>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Home Appliance Details</h5>
          <p>
            <Button onClick={handleHomeOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Home}
              onClose={handleHomeClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <div className="col-6 my-2 my-2">
                    <label htmlFor="applianceType" className="pb-2">
                      Select Appliance Type:
                    </label>
                    <select
                      // value={selectedAppliance}
                      // onChange={handleApplianceChange}
                      className="form-control"
                    >
                      <option value="">Select an Appliance</option>
                      {/* {homeAppliances.map((appliance, index) => (
                        <option key={index} value={appliance}>
                          {appliance}
                        </option>
                      ))} */}
                    </select>
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="gadgetBrand" className="pb-2">
                      Brand:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="gadgetBrand"
                      // value={gadgetBrand}
                      // onChange={handleGadgetBrandChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="model" className="pb-2">
                      Model:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="model"
                      // value={model}
                      // onChange={handleModelChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="purchaseDate" className="pb-2">
                      Date of Purchase:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="purchaseDate"
                      // value={purchaseDate}
                      // onChange={handlePurchaseDateChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="warrantyPeriod" className="pb-2">
                      Warranty Period:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="warrantyPeriod"
                      // value={warrantyPeriod}
                      // onChange={handleWarrantyPeriodChange}
                    />
                  </div>
                  <div className="col-12 my-2">
                    <label htmlFor="agencyOrCompany" className="pb-2">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      type="text"
                      id="Description"
                      // value={agencyOrCompany}
                      // onChange={handleAgencyOrCompanyChange}
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button
                    className="btn btn-danger me-2"
                    onClick={handleHomeClose}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Appliance Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.calories}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.fat}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.carbs}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.Description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Vehicle Details</h5>
          <p>
            <Button onClick={handleVehicleOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Vehicle}
              onClose={handleVehicleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="vehicleType">
                      Vehicle type:
                    </label>
                    <div>
                      <select
                        className="form-select"
                        id="vehicleType"
                        // value={selectedVehicle}
                        // onChange={handleVehicleChange}
                      >
                        <option value="">Select Vehicle</option>
                        {/* {vehicleTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))} */}
                      </select>
                    </div>
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="vehicleNumber">
                      Vehicle Number:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="vehicleNumber"
                      // value={vehicleNumber}
                      // onChange={handleVehicleNumberChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="brand">
                      Brand:
                    </label>
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="model">
                      Model:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="model"
                      // value={model}
                      // onChange={handleModelChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="purchaseDate">
                      Date of Purchase:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="purchaseDate"
                      // value={purchaseDate}
                      // onChange={handlePurchaseDateChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="warrantyPeriod">
                      Warranty Period:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="warrantyPeriod"
                      // value={warrantyPeriod}
                      // onChange={handleWarrantyPeriodChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label className="mb-1" htmlFor="model">
                      Agency:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="agency"
                      // value={model}
                      // onChange={handleModelChange}
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button
                    className="btn btn-danger me-2"
                    onClick={handleJobClose}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#f4f4f4" }}>
              <TableRow>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Model
                </TableCell>
                <TableCell sx={{ border: "0", width: "15%" }}>Type</TableCell>
                <TableCell sx={{ border: "0", width: "15%" }}>
                  Vehicle NO
                </TableCell>
                <TableCell sx={{ border: "0", width: "15%" }}>
                  Dealer/Agency
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehiclerows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.model}
                  </TableCell>
                  <TableCell sx={{ border: "0" }}>{row.type}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.vehicleNo}</TableCell>
                  <TableCell sx={{ border: "0" }}>{row.dealerAgency}</TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                  >
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Gadget Details</h5>
          <p>
            <Button onClick={handleGadgetOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Gadget}
              onClose={handleGadgetClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <div className="col-6 my-2">
                    <label htmlFor="gadgetType" className="pb-2">
                      Select Gadget Type:
                    </label>
                    <select
                      id="gadgetType"
                      className="form-select"
                      // value={gadgetType}
                      // onChange={handleGadgetTypeChange}
                    >
                      <option value="">Select Gadget Type</option>
                      {/* {gadgetTypes.map((type, index) => (
                <option key={index} value={type.toLowerCase().replace(/\s/g, '')}>
                  {type}
                </option>
              ))} */}
                    </select>
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="gadgetBrand" className="pb-2">
                      Brand:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="gadgetBrand"
                      // value={gadgetBrand}
                      // onChange={handleGadgetBrandChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="model" className="pb-2">
                      Model:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="model"
                      // value={model}
                      // onChange={handleModelChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="warranty" className="pb-2">
                      Warranty:
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      id="warranty"
                      // value={warranty}
                      // onChange={handleWarrantyChange}
                    />
                  </div>
                  <div className="col-6 my-2">
                    <label htmlFor="model" className="pb-2">
                      Description
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="Description"
                      // value={model}
                      // onChange={handleModelChange}
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button
                    className="btn btn-danger me-2"
                    onClick={handleJobClose}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Gadget
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Brand
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Warranty
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Purchase Date
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gadgetrows.map((gadgetRow, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="gadgetrows"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {gadgetRow.gadget}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.brand}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.warranty}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {gadgetRow.purchaseDate}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {gadgetRow.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="card mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Property Details</h5>
          <p>
            <Button onClick={handlePropertyOpen}>
              <i class="fi fi-rr-file-edit ms-2"></i>
            </Button>
            <Modal
              open={Property}
              onClose={handlePropertyClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="row">
                  <h6 className="labels mb-2">Property Details:</h6>

                  <div className="col-6 my-2Feduca">
                    <label className="pb-2">Property Types:</label>
                    <div>
                      <input
                        type="checkbox"
                        value="commercial"
                        checked={propertyTypes.includes("commercial")}
                        onChange={() => handlePropertyTypeChange("commercial")}
                      />
                      <label className="px-2">Commercial</label>

                      {propertyTypes.includes("commercial") && (
                        <select
                          className="form-control"
                          value={commercialType}
                          onChange={(e) => setCommercialType(e.target.value)}
                        >
                          <option value="">Select Commercial Type</option>
                          <option value="hotel">Hotel</option>
                          <option value="officeSpace">Office Space</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="showroom">Showroom</option>
                        </select>
                      )}
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        value="house"
                        checked={propertyTypes.includes("house")}
                        onChange={() => handlePropertyTypeChange("house")}
                      />
                      <label className="px-2">Residential</label>
                      {propertyTypes.includes("house") && (
                        <div>
                          <select
                            className="form-control"
                            value={residentialType}
                            onChange={handleResidentialTypeChange}
                          >
                            <option value="">Select Residential Type</option>
                            <option value="villa">Villa</option>
                            <option value="independentHouse">
                              Independent House
                            </option>
                            <option value="residentialPlot">
                              Residential Plot
                            </option>
                            <option value="farmHouse">Farm House</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="payingGuest">Paying Guest</option>
                            <option value="rowhouse">Rowhouse</option>
                          </select>
                        </div>
                      )}
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        value="agricultural"
                        checked={propertyTypes.includes("agricultural")}
                        onChange={() =>
                          handlePropertyTypeChange("agricultural")
                        }
                      />
                      <label className="px-2">Agricultural</label>
                      {propertyTypes.includes("agricultural") && (
                        <select
                          className="form-control"
                          value={agriculturalType}
                          onChange={handleAgriculturalTypeChange}
                        >
                          <option value="">Select Agricultural Type</option>
                          <option value="farmLand">Farm Land</option>
                          <option value="plantation">Plantation</option>
                          <option value="orchard">Orchard</option>
                          <option value="agriculturalLand">
                            Agricultural Land
                          </option>
                        </select>
                      )}
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        value="industrial"
                        checked={propertyTypes.includes("industrial")}
                        onChange={() => handlePropertyTypeChange("industrial")}
                      />
                      <label className="px-2">Industrial</label>
                      {propertyTypes.includes("industrial") && (
                        <select
                          className="form-control"
                          value={industrialType}
                          onChange={handleIndustrialTypeChange}
                        >
                          <option value="">Select Industrial Type</option>
                          <option value="factory">Factory</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="industrialLand">
                            Industrial Land
                          </option>
                          <option value="manufacturingPlant">
                            Manufacturing Plant
                          </option>
                        </select>
                      )}
                    </div>
                  </div>
                  <div className="col-6 my-2Feduca">
                    <label className="mb-1">BHK Type:</label>
                    <select
                      value={bhkType}
                      onChange={(e) => handleBhkTypeChange(e.target.value)}
                      className="form-control"
                    >
                      <option value="">BHK</option>
                      <option value="1bhk">1 BHK</option>
                      <option value="2bhk">2 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="4bhk">4 BHK</option>
                      <option value="4+bhk">4+ BHK</option>
                    </select>
                  </div>
                  <div className="col-6 my-2Feduca">
                    <label className="mb-1">Property Description</label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={propertyDescription}
                      onChange={(e) => handlePropertyDescriptionChange(e)}
                    />
                  </div>
                  <div className="col-6 my-2Feduca">
                    <label className="mb-1">Property Location:</label>
                    <input
                      className="form-control"
                      type="text"
                      value={propertyLocation}
                      onChange={(e) => setPropertyLocation(e.target.value)}
                    />
                  </div>
                  <div className="col-6 my-2Feduca">
                    <label className="mb-1">property status</label>
                    <select
                      className="form-control"
                      value={propertyStatus}
                      onChange={(e) => setPropertyStatus(e.target.value)}
                    >
                      <option value="">select status</option>
                      <option value="rent">Rent</option>
                      <option value="sale">Sale</option>
                    </select>
                  </div>
                  <div className="col-6 my-2Feduca">
                    <label className="mb-1">Land Squarefit</label>
                    <input
                      className="form-control"
                      type="text"
                      value={landSquarefit}
                      onChange={(e) => setLandSquarefit(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <button type="button" class="btn btn-danger me-2">
                    Cancel
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </Box>
            </Modal>
          </p>
        </div>
        <TableContainer component={Paper} sx={{ border: "none", boxShadow: 0 }}>
          <Table sx={{ border: "none" }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f4f4" }}>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "8px 0px 0px 8px",
                    width: "15%",
                  }}
                >
                  Type
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Availability
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  House Types
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Land Sq.ft
                </TableCell>
                <TableCell sx={{ border: "none", width: "15%" }} align="left">
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    border: "none",
                    borderRadius: "0px 8px 8px 0px",
                    width: "50%",
                  }}
                  align="left"
                >
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {propertys.map((row, index) => (
                <TableRow
                  key={row.type}
                  sx={{
                    "&:last-child td, &:last-child th": { border: "0" },
                    borderRadius: "10px",
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#f4f4f4",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "0", borderRadius: "8px 0px 0px 8px" }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.availability}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.property}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.location}
                  </TableCell>
                  <TableCell sx={{ border: "0" }} align="left">
                    {row.description}
                  </TableCell>
                  <TableCell
                    sx={{ border: "0", borderRadius: "0px 8px 8px 0px" }}
                    align="left"
                  >
                    {row.land}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Job;
