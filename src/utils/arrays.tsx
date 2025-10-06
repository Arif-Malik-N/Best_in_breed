import { location } from "../assets/images";
import type { ClientForm, Column, Step2Field, Step3Field } from "./interfaces";

// fields for client intake form step 1
export const cifStep1Fields: {
  name: keyof ClientForm;
  label: string;
  placeholder: string;
  type?: string;
  colSpan: string;
  endIcon?: React.ReactNode;
}[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter name",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter Email",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    placeholder: "Select date",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    placeholder: "Enter address",
    colSpan: "col-span-12 md:col-span-6",
    endIcon: location,
  },
  {
    name: "subdivision",
    label: "Subdivision",
    type: "text",
    placeholder: "Enter subdivision",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "phone1",
    label: "Phone #1",
    type: "text",
    placeholder: "Enter phone number",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "phone2",
    label: "Phone #2",
    type: "text",
    placeholder: "Enter phone number",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "referral",
    label: "Referral",
    type: "text",
    placeholder: "Enter referral source",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "evaluationSchedule",
    label: "Evaluation scheduled",
    // type: "date",
    type: "datetime-local",
    placeholder: "Enter appointment date",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "problem",
    label: "Problem",
    type: "text",
    placeholder: "Enter problem",
    colSpan: "col-span-12 md:col-span-6",
  },
];

// fields for client intake form step 2
export const cifStep2Fields: Step2Field[] = [
  {
    name: "homePhone",
    placeholder: "Home Phone",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "cellPhone",
    placeholder: "Cell Phone",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "workPhone",
    placeholder: "Work Phone",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-4",
  },

  {
    name: "breed",
    placeholder: "Select Breed",
    elementType: "select",
    options: [
      { value: "French Bulldog", label: "French Bulldog" },
      { value: "Labrador Retriever", label: "Labrador Retriever" },
      { value: "Golden Retriever", label: "Golden Retriever" },
      { value: "German Shepherd", label: "German Shepherd" },
      {
        value: "Poodle (Standard, Miniature, Toy)",
        label: "Poodle (Standard, Miniature, Toy)",
      },
      { value: "Bulldog", label: "Bulldog" },
      { value: "Rottweiler", label: "Rottweiler" },
      { value: "Beagle", label: "Beagle" },
      { value: "Dachshund", label: "Dachshund" },
      {
        value: "German Shorthaired Pointer",
        label: "German Shorthaired Pointer",
      },
      { value: "Pembroke Welsh Corgi", label: "Pembroke Welsh Corgi" },
      { value: "Australian Shepherd", label: "Australian Shepherd" },
      { value: "Yorkshire Terrier", label: "Yorkshire Terrier" },
      {
        value: "Cavalier King Charles Spaniel",
        label: "Cavalier King Charles Spaniel",
      },
      { value: "Doberman Pinscher", label: "Doberman Pinscher" },
      { value: "Others", label: "Others" },
    ],
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    name: "dogName",
    placeholder: "Name",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    name: "sex",
    placeholder: "Sex",
    elementType: "select",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    type: "text",
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    name: "dateOfBirth",
    placeholder: "Date Of Birth",
    elementType: "input",
    type: "date",
    colSpan: "col-span-12 md:col-span-3",
  },
  // {
  //   name: "referral",
  //   placeholder: "Referral",
  //   elementType: "input",
  //   type: "text",
  //   colSpan: "col-span-12 md:col-span-6",
  // },
  {
    name: "vetName",
    placeholder: "Name of Vet",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12",
  },

  {
    name: "whereDidYouGetDog",
    placeholder: "Where did you get dog",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "previousTraining",
    placeholder: "Previous Training",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "whoWillDoMostTraining",
    placeholder: "Who will be doing most of the training",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "selectProblems",
    placeholder: "Problem 1/2",
    elementType: "select",
    colSpan: "col-span-12 md:col-span-12",
    options: [
      { value: "houseBreaking", label: "House Breaking" },
      {
        value: "PpersonalProtection",
        label: "Personal Protection (no bite work - treat training only)",
      },
    ],
  },
  {
    name: "bestTimeForTrainingSessions",
    placeholder: "Best time for training sessions",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "others",
    placeholder: "Others",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "whatCorrectionsAreUsed",
    placeholder: "What corrections are used",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "isDogHousebroken",
    placeholder: "Is/Are dog housebroken",
    elementType: "select",
    options: [
      { value: false, label: "No" },
      {
        value: true,
        label: "Yes",
      },
    ],
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "correctionForAccident",
    placeholder: "Correction for accident",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },

  {
    name: "confinementDay",
    placeholder: "Confinement / Day",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "confinementNight",
    placeholder: "Confinement / Night",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-6",
  },

  {
    name: "trainingGoalsForDog",
    placeholder: "Training goals for dog",
    elementType: "textarea",
    rows: 3,
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "evaluatorsRemarks",
    placeholder: "Evaluator's remarks",
    elementType: "textarea",
    rows: 3,
    colSpan: "col-span-12 md:col-span-12",
  },
];

// checkboxes for client intake form step 3
export const cifStep3CheckBoxes: Step3Field[] = [
  {
    name: "houseBreakingChecklist1",
    label: "House breaking:",
    elementType: "checkbox",
    options: [
      "Chewing",
      "Going in Trash",
      "Leash Green",
      "Heel",
      "Done",
      "Sit Stay",
      "Down stay",
      "Release command",
      "Behavior Problems",
      "Respect for word 'NO'",
      "Lifetime Consultation",
    ],
  },
  {
    name: "personalProtectionOptions",
    label: "Personal Protection (NO bite work—treat training only)",
    elementType: "checkbox",
    options: ["Watch", "Out", "Lifetime consultation"],
  },
  {
    name: "maintainPreviouslyEnrolled",
    label: "Maintenance",
    elementType: "checkbox",
    options: ["Maintain previously enrolled program"],
  },
];

// date and time client intake form step 3
export const cifStep3DateTime: Step3Field[] = [
  {
    label: "Start Date",
    type: "date",
    name: "startDate",
  },
  {
    label: "End Date",
    type: "date",
    name: "endDate",
  },
  {
    label: "Start Time",
    type: "time",
    name: "startTime",
  },
  {
    label: "End Time",
    type: "time",
    name: "endTime",
  },
];

// for validation
export const requiredContractFields = [
  { name: "weeksOnLeash", label: "Weeks on leash" },
  { name: "weeksOnOffLeash", label: "Weeks on/off leash" },
  {
    name: "houseBreakingChecklist1",
    label: "Please select at least one housebreaking option",
  },
  {
    name: "personalProtectionOptions",
    label: "Please select at least one personal protection option",
  },
  { name: "maintainPreviouslyEnrolled", label: "Maintenance selection" },
  { name: "startDate", label: "Start Date" },
  { name: "endDate", label: "End Date" },
  { name: "startTime", label: "Start Time" },
  { name: "endTime", label: "End Time" },
  { name: "trainingFee", label: "Training Fee" },
  { name: "notesAndTerms", label: "Notes & Terms" },
  { name: "ownerOfDogName", label: "Owner of Dog" },
  { name: "ownerAgreementDate", label: "Date" },
  { name: "trainingToStartWeekOf", label: "Training start week" },
  { name: "representativeOfBESTINBREED", label: "Representative" },
];

export const weeksOptions = [
  { value: 0, label: "0" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  // { value: "other", label: "Other" },
];

// columns for home and client page table
export const clientcolumns: Column[] = [
  { key: "clientName", title: "Name", minWidth: 180, isIcon: true },
  { key: "email", title: "Email", minWidth: 220 },
  { key: "phone", title: "Phone", minWidth: 140 },
  { key: "dogName", title: "Dog Name", minWidth: 150 },
  { key: "breed", title: "Breed", minWidth: 150 },
  { key: "age", title: "Dog Age", minWidth: 150 },
  { key: "contractPdfUrl", title: "Contract", minWidth: 90, isClickable: true },
];

// columns for contract page table
export const contractColumns: Column[] = [
  { key: "clientName", title: "Name", minWidth: 180, isIcon: true },
  { key: "contractPdfUrl", title: "Contract", minWidth: 90, isClickable: true },
  // { key: "date", title: "Date", minWidth: 120 },
  { key: "email", title: "Email", minWidth: 220 },
  { key: "phone", title: "Phone", minWidth: 140 },
];
