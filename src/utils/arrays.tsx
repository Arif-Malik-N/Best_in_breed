import {
  client1,
  client2,
  client3,
  client4,
  client5,
  location,
} from "../assets/images";
import type {
  ClientForm,
  Column,
  EventItem,
  rowData,
  Step2Field,
  Step3Field,
} from "./interfaces";

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
    type: "number",
    placeholder: "Enter phone number",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "phone2",
    label: "Phone #2",
    type: "number",
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
    type: "number",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "cellPhone",
    placeholder: "Cell Phone",
    elementType: "input",
    type: "number",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "workPhone",
    placeholder: "Work Phone",
    elementType: "input",
    type: "number",
    colSpan: "col-span-12 md:col-span-4",
  },

  {
    name: "breed",
    placeholder: "Select Breed",
    elementType: "select",
    options: [
      { value: "breed1", label: "Breed 1" },
      { value: "breed2", label: "Breed 2" },
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
    elementType: "input",
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
  "weeksOnLeash",
  "weeksOnOffLeash",
  "houseBreakingChecklist1",
  "personalProtectionOptions",
  "maintainPreviouslyEnrolled",
  "startDate",
  "endDate",
  "startTime",
  "endTime",
  "trainingFee",
  "notesAndTerms",
  "ownerOfDogName",
  "ownerAgreementDate",
  "trainingToStartWeekOf",
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

// below all code is just for testing (i:e sample data)
export const clientsSampleData: rowData[] = [
  {
    name: "Annette Black",
    email: "igerrin@gmail.com",
    phone: "+15556789012",
    dogName: "Penny",
    breed: "Border Terrier",
    dogAge: "2 years",
    contract: "View",
    date: "27/07/2020",
  },
  {
    name: "Jenny Wilson",
    email: "cedennar@gmail.com",
    phone: "+15552345678",
    dogName: "Ruby",
    breed: "Belgian Shepherd",
    dogAge: "4 years",
    contract: "View",
    date: "24/07/2020",
  },
  {
    name: "Albert Flores",
    email: "ahana@mail.ru",
    phone: "+15559012345",
    dogName: "Leo",
    breed: "Belgian Shepherd",
    dogAge: "4 years",
    contract: "View",
    date: "02/08/2020",
  },
  {
    name: "Bessie Cooper",
    email: "irnabela@gmail.com",
    phone: "+1855467890",
    dogName: "Rocky",
    breed: "Bullmastiff",
    dogAge: "5 years",
    contract: "View",
    date: "06/08/2020",
  },
  {
    name: "Jane Cooper",
    email: "igerrin@gmail.com",
    phone: "+15552345678",
    dogName: "Daisy",
    breed: "German Shepherd",
    dogAge: "6 years",
    contract: "View",
    date: "08/08/2020",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@example.com",
    phone: "+15559876543",
    dogName: "Buddy",
    breed: "Golden Retriever",
    dogAge: "3 years",
    contract: "View",
    date: "28/08/2020",
  },
  {
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "+15557654321",
    dogName: "Bella",
    breed: "Labrador Retriever",
    dogAge: "2 years",
    contract: "View",
    date: "28/08/2020",
  },
  {
    name: "Michael Smith",
    email: "m.smith@example.com",
    phone: "+15553456789",
    dogName: "Max",
    breed: "Poodle",
    dogAge: "5 years",
    contract: "View",
    date: "28/09/2020",
  },
  {
    name: "Sophia Brown",
    email: "sophia.b@example.com",
    phone: "+15551239876",
    dogName: "Lucy",
    breed: "French Bulldog",
    dogAge: "4 years",
    contract: "View",
    date: "29/09/2020",
  },
  {
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "+15557890123",
    dogName: "Charlie",
    breed: "Beagle",
    dogAge: "3 years",
    contract: "View",
    date: "27/09/2020",
  },
];

export const notifications = [
  {
    id: 1,
    img: client1,
    name: "John Carter",
    description: "Booked a new obedience training session for Max",
    time: "2h Ago",
  },
  {
    id: 2,
    img: client2,
    name: "Emily Johnson",
    description: "Requested feedback on Bella’s agility progress",
    time: "3h Ago",
  },
  {
    id: 3,
    img: client3,
    name: "Michael Lee",
    description: "Confirmed enrollment for Luna in puppy classes",
    time: "5h Ago",
  },
  {
    id: 4,
    img: client4,
    name: "Sophia Williams",
    description: "Scheduled a private session for Rocky’s behavior training",
    time: "6h Ago",
  },
  {
    id: 5,
    img: client5,
    name: "David Kim",
    description: "Shared an update on Daisy’s progress in advanced training",
    time: "1d Ago",
  },
];
