import type {
  clientFormFields,
  Column,
  EventItem,
  rowData,
} from "./interfaces";

// fields for client intake form step 1
export const cifStep1Fields: clientFormFields[] = [
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
    options: ["Breed 1", "Breed 2"],
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    name: "name",
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
    name: "age",
    placeholder: "Age",
    elementType: "input",
    type: "number",
    colSpan: "col-span-12 md:col-span-3",
  },

  {
    name: "referral",
    placeholder: "Referral",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "vetName",
    placeholder: "Name of Vet",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-6",
  },

  {
    name: "whereDog",
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
    name: "trainer",
    placeholder: "Who will be doing most of the training",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "problems",
    placeholder: "Select Problems",
    elementType: "select",
    colSpan: "col-span-12 md:col-span-12",
    options: ["Problem 1", "Problem 2"],
  },
  {
    name: "bestTime",
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
    name: "corrections",
    placeholder: "What corrections are used",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "housebroken",
    placeholder: "Is/Are dog housebroken",
    elementType: "input",
    type: "text",
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "accident",
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
    name: "trainingGoals",
    placeholder: "Training goals for dog",
    elementType: "textarea",
    rows: 3,
    colSpan: "col-span-12 md:col-span-12",
  },
  {
    name: "remarks",
    placeholder: "Evaluator's remarks",
    elementType: "textarea",
    rows: 3,
    colSpan: "col-span-12 md:col-span-12",
  },
];

// checkboxes for client intake form step 2
export const cifStep2CheckBoxes: clientFormFields[] = [
  // {
  //   name: "address",
  //   placeholder: "Address",
  //   elementType: "input",
  //   type: "text",
  // },
  // { name: "phone", placeholder: "Phone", elementType: "input", type: "number" },

  {
    name: "Weeks on leash",
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
    name: "Weeks on/off leash",
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
    name: "8 Weeks on leash",
    label: "Personal Protection (NO bite work—treat training only)",
    elementType: "checkbox",
    options: ["Watch", "Out", "Lifetime consultation"],
  },
  {
    name: "Months Maintenance",
    label: "",
    elementType: "checkbox",
    options: ["Maintain previously enrolled program"],
  },

  // {
  //   name: "trainingFee",
  //   placeholder: "Training Fee",
  //   elementType: "input",
  //   type: "number",
  //   colSpan: "col-span-12 md:col-span-2",
  // },
  // {
  //   name: "notes",
  //   placeholder: "Notes & Terms",
  //   elementType: "textarea",
  //   rows: 4,
  //   colSpan: "col-span-12 md:col-span-2",
  // },

  // {
  //   name: "ownerName",
  //   placeholder: "Owner Name",
  //   elementType: "input",
  //   type: "text",
  //   colSpan: "col-span-12 md:col-span-2",
  // },
  // { name: "date", placeholder: "Date", elementType: "input", type: "date" },
  // {
  //   name: "dogName",
  //   placeholder: "Owner of Dog",
  //   elementType: "input",
  //   type: "text",
  // },
  // {
  //   name: "trainingStart",
  //   placeholder: "Training to start week of",
  //   elementType: "input",
  //   type: "date",
  // },
];

// fields for client intake form step 3
export const cifStep3Fields: clientFormFields[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter name",
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
    name: "dogName",
    label: "Dog name",
    type: "text",
    placeholder: "Enter dog's name",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "breed",
    label: "Breed",
    type: "text",
    placeholder: "Enter breed",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter age",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "sex",
    label: "Sex",
    type: "text",
    placeholder: "Enter sex",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    name: "problem",
    label: "Problem",
    type: "text",
    placeholder: "Enter problem",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    name: "appointmentScheduled",
    label: "Appointment scheduled",
    type: "text",
    placeholder: "Enter appointment date",
    colSpan: "col-span-12 md:col-span-6",
  },
];

// columns for client table
export const columns: Column[] = [
  { key: "name", title: "Name", minWidth: 180, isIcon: true },
  { key: "email", title: "Email", minWidth: 220 },
  { key: "phone", title: "Phone", minWidth: 140 },
  { key: "dogName", title: "Dog Name", minWidth: 120 },
  { key: "breed", title: "Breed", minWidth: 200 },
  { key: "dogAge", title: "Dog Age", minWidth: 90 },
  { key: "contract", title: "Contract", minWidth: 90, isClickable: true },
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
  },
  {
    name: "Jenny Wilson",
    email: "cedennar@gmail.com",
    phone: "+15552345678",
    dogName: "Ruby",
    breed: "Belgian Shepherd",
    dogAge: "4 years",
    contract: "View",
  },
  {
    name: "Albert Flores",
    email: "ahana@mail.ru",
    phone: "+15559012345",
    dogName: "Leo",
    breed: "Belgian Shepherd",
    dogAge: "4 years",
    contract: "View",
  },
  {
    name: "Bessie Cooper",
    email: "irnabela@gmail.com",
    phone: "+1855467890",
    dogName: "Rocky",
    breed: "Bullmastiff",
    dogAge: "5 years",
    contract: "View",
  },
  {
    name: "Jane Cooper",
    email: "igerrin@gmail.com",
    phone: "+15552345678",
    dogName: "Daisy",
    breed: "German Shepherd",
    dogAge: "6 years",
    contract: "View",
  },
  {
    name: "Robert Fox",
    email: "robert.fox@example.com",
    phone: "+15559876543",
    dogName: "Buddy",
    breed: "Golden Retriever",
    dogAge: "3 years",
    contract: "View",
  },
  {
    name: "Emily Johnson",
    email: "emily.j@example.com",
    phone: "+15557654321",
    dogName: "Bella",
    breed: "Labrador Retriever",
    dogAge: "2 years",
    contract: "View",
  },
  {
    name: "Michael Smith",
    email: "m.smith@example.com",
    phone: "+15553456789",
    dogName: "Max",
    breed: "Poodle",
    dogAge: "5 years",
    contract: "View",
  },
  {
    name: "Sophia Brown",
    email: "sophia.b@example.com",
    phone: "+15551239876",
    dogName: "Lucy",
    breed: "French Bulldog",
    dogAge: "4 years",
    contract: "View",
  },
  {
    name: "David Wilson",
    email: "david.w@example.com",
    phone: "+15557890123",
    dogName: "Charlie",
    breed: "Beagle",
    dogAge: "3 years",
    contract: "View",
  },
];

type AugustData = {
  [date: string]: EventItem[];
};

export const septemberData: AugustData = {
  "1-sept 2025": [
    {
      name: "Rocky",
      description: "Grooming session",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ],
  "2-sept 2025": [
    {
      name: "Bella",
      description: "Vet appointment",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
    {
      name: "Max",
      description: "Training session",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
    },
  ],
  "4-sept 2025": [
    {
      name: "Charlie",
      description: "Bath time",
      startTime: "9:00 AM",
      endTime: "9:45 AM",
    },
    {
      name: "Milo",
      description: "Walk in park",
      startTime: "10:30 AM",
      endTime: "11:30 AM",
    },
    {
      name: "Teddy",
      description: "Playtime",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
    },
  ],
  "6-sept 2025": [
    {
      name: "Luna",
      description: "Training session",
      startTime: "8:00 AM",
      endTime: "9:00 AM",
    },
  ],
  "7-sept 2025": [
    {
      name: "Rocky",
      description: "Vet checkup",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      name: "Daisy",
      description: "Grooming",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
  ],
};

export const augustData: AugustData = {
  "1-aug 2025": [
    {
      name: "Rocky",
      description: "Grooming session",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ],
  "2-aug 2025": [
    {
      name: "Bella",
      description: "Vet appointment",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
    {
      name: "Max",
      description: "Training session",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
    },
  ],
  "4-aug 2025": [
    {
      name: "Charlie",
      description: "Bath time",
      startTime: "9:00 AM",
      endTime: "9:45 AM",
    },
    {
      name: "Milo",
      description: "Walk in park",
      startTime: "10:30 AM",
      endTime: "11:30 AM",
    },
    {
      name: "Teddy",
      description: "Playtime",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
    },
  ],
  "6-aug 2025": [
    {
      name: "Luna",
      description: "Training session",
      startTime: "8:00 AM",
      endTime: "9:00 AM",
    },
  ],
  "7-aug 2025": [
    {
      name: "Rocky",
      description: "Vet checkup",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      name: "Daisy",
      description: "Grooming",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
  ],
  "9-aug 2025": [
    {
      name: "Bella",
      description: "Playtime",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
    },
  ],
  "10-aug 2025": [
    {
      name: "Max",
      description: "Walk",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      name: "Charlie",
      description: "Training",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
    },
    {
      name: "Luna",
      description: "Vet appointment",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
    },
  ],
  "12-aug 2025": [
    {
      name: "Teddy",
      description: "Bath",
      startTime: "8:30 AM",
      endTime: "9:00 AM",
    },
    {
      name: "Bella",
      description: "Training",
      startTime: "9:30 AM",
      endTime: "10:30 AM",
    },
    {
      name: "Daisy",
      description: "Vet checkup",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
    },
    {
      name: "Max",
      description: "Bath",
      startTime: "2:00 PM",
      endTime: "2:45 PM",
    },
    {
      name: "Luna",
      description: "Grooming",
      startTime: "4:00 PM",
      endTime: "5:00 PM",
    },
  ],
  "13-aug 2025": [
    {
      name: "Milo",
      description: "Walk",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      name: "Rocky",
      description: "Playtime",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
  ],
  "15-aug 2025": [
    {
      name: "Bella",
      description: "Training",
      startTime: "9:30 AM",
      endTime: "10:30 AM",
    },
    {
      name: "Daisy",
      description: "Vet checkup",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
    },
    {
      name: "Max",
      description: "Bath",
      startTime: "2:00 PM",
      endTime: "2:45 PM",
    },
    {
      name: "Luna",
      description: "Grooming",
      startTime: "4:00 PM",
      endTime: "5:00 PM",
    },
  ],
  "18-aug 2025": [
    {
      name: "Charlie",
      description: "Walk",
      startTime: "7:30 AM",
      endTime: "8:15 AM",
    },
    {
      name: "Bella",
      description: "Training",
      startTime: "9:30 AM",
      endTime: "10:30 AM",
    },
    {
      name: "Daisy",
      description: "Vet checkup",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
    },
    {
      name: "Max",
      description: "Bath",
      startTime: "2:00 PM",
      endTime: "2:45 PM",
    },
    {
      name: "Luna",
      description: "Grooming",
      startTime: "4:00 PM",
      endTime: "5:00 PM",
    },
  ],
  "20-aug 2025": [
    {
      name: "Rocky",
      description: "Vet appointment",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      name: "Bella",
      description: "Bath",
      startTime: "2:00 PM",
      endTime: "2:30 PM",
    },
  ],
  "23-aug 2025": [
    {
      name: "Daisy",
      description: "Training",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      name: "Luna",
      description: "Playtime",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
    },
  ],
  "24-aug 2025": [
    {
      name: "Rocky",
      description: "Grooming",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      name: "Teddy",
      description: "Training",
      startTime: "12:00 PM",
      endTime: "2:00 PM",
    },
  ],
  "25-aug 2025": [
    {
      name: "Max",
      description: "Bath",
      startTime: "8:00 AM",
      endTime: "8:45 AM",
    },
    {
      name: "Charlie",
      description: "Walk",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      name: "Bella",
      description: "Vet appointment",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
    },
  ],
  "28-aug 2025": [
    {
      name: "Milo",
      description: "Grooming",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
    },
  ],
  "30-aug 2025": [
    {
      name: "Rocky",
      description: "Playtime",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      name: "Bella",
      description: "Walk",
      startTime: "3:00 PM",
      endTime: "4:00 PM",
    },
    {
      name: "Teddy",
      description: "Training",
      startTime: "5:00 PM",
      endTime: "6:00 PM",
    },
  ],
  "31-aug 2025": [
    {
      name: "Charlie",
      description: "Vet checkup",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
  ],
};

export const dogImageMap: Record<string, string> = {
  Rocky: "https://placedog.net/300/300?id=1",
  Max: "https://placedog.net/300/300?id=2",
  Milo: "https://placedog.net/300/300?id=3",
  Bella: "https://placedog.net/300/300?id=4",
  Charlie: "https://placedog.net/300/300?id=5",
  Daisy: "https://placedog.net/300/300?id=6",
  Teddy: "https://placedog.net/300/300?id=7",
  Luna: "https://placedog.net/300/300?id=8",
};

export const augustDataWithImage = Object.fromEntries(
  Object.entries(augustData).map(([date, events]) => [
    date,
    events.map((evt) => ({
      ...evt,
      image: dogImageMap[evt.name] || "https://example.com/default.jpg",
    })),
  ])
);

export const septemberDataWithImage = Object.fromEntries(
  Object.entries(septemberData).map(([date, events]) => [
    date,
    events.map((evt) => ({
      ...evt,
      image: dogImageMap[evt.name] || "https://example.com/default.jpg",
    })),
  ])
);
