import type { JSX } from "react";

export interface ClientForm {
  name: string;
  date: string;
  address: string;
  subdivision: string;
  phone1: string;
  phone2?: string;
  email: string;
  referral: string;
  evaluationSchedule: string;
  problem: string;
  clientPhotoUploadId: string;
}

export interface DogForm {
  mailingAddress: string;
  homePhone: string;
  cellPhone: string;
  workPhone?: string;
  breed: string;
  dogName: string;
  sex: "male" | "female";
  age: number;
  vetName: string;
  whereDidYouGetDog: string;
  previousTraining: string;
  whoWillDoMostTraining: string;
  selectProblems: string[];
  bestTimeForTrainingSessions: string;
  others?: string;
  whatCorrectionsAreUsed: string;
  isDogHousebroken: boolean;
  correctionForAccident: string;
  confinementDay: string;
  confinementNight: string;
  trainingGoalsForDog: string;
  evaluatorsRemarks: string;
  dogPhotoUploadId: string;
  dateOfBirth: string;
}

export interface ContractForm {
  mailingAddress: string;
  homePhone: string;
  cellPhone: string;
  workPhone?: string;
  weeksOnLeash: number;
  weeksOnOffLeash: number;
  houseBreakingChecklist1: string[];
  houseBreakingChecklist2: string[];
  personalProtectionOptions: string[];
  maintenanceMonths: number;
  maintainPreviouslyEnrolled: boolean;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  trainingFee: number;
  notesAndTerms: string;
  ownerOfDogName: string;
  ownerSignatureName: string;
  ownerAgreementDate: string;
  trainingToStartWeekOf: string;
  representativeSignatureName: string;
  policiesAccepted: boolean;
}
// ============================================= interface for array

// Represents a simple link item with optional CSS classes
export interface link {
  name: string;
  url: string;
  className?: string;
}

// Represents an image item with styling
export interface ImageItem {
  className: string;
  image: string;
}

// Header and footer menu item
export interface menu {
  key: string;
  icon: string;
  name: string;
  path?: string;
}

// Card data structure for hoem page etc.
export interface card {
  icon: string;
  name: string;
  number: number;
}

// Example row structure for table data
export interface rowData {
  clientName: string;
  email: string;
  phone: string;
  dogName: string;
  breed: string;
  age: string;
  contractPdfUrl: string;
  date?: string;
}

// Ensures column keys match rowData properties
type ColumnKey = keyof rowData;

// Table column definition
export interface Column {
  key: ColumnKey;
  title: string;
  minWidth?: number; // Minimum column width (for responsive tables)
  isIcon?: boolean; // If true, render an avatar or icon
  isClickable?: boolean; // If true, render as a clickable link
}

// Field array interface
export interface field {
  value?: string | number | boolean;
  name: string;
  type?: string;
  className: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  elementType?: "input" | "textarea";
}

interface FieldOption {
  value: string | number | boolean;
  label: string;
}

export interface Step2Field {
  name: keyof DogForm;
  label?: string;
  placeholder: string;
  type?: string;
  elementType?: "input" | "select" | "textarea";
  colSpan: string;
  endIcon?: React.ReactNode;
  options?: FieldOption[]; // only for selects
  rows?: number; // only for textarea
}

// It is only for client intake forms fields
export interface Step3Field {
  value?: string | number;
  name: keyof ContractForm; // 👈 restricts to valid form keys
  type?: string;
  className?: string;
  placeholder?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  elementType?: "input" | "textarea" | "select" | "checkbox";
  colSpan?: string;
  options?: string[]; // for select or checkbox
  rows?: number; // for textarea
  label?: string; // for checkboxes
}

// Route definition for application routing
export interface AppRoute {
  path: string;
  component: JSX.Element;
}

export interface ClientCards {
  name: string;
  role: string;
  image?: string;
}

// for upcomming session
export interface EventItem {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  image?: string;
  date?: string;
}

export interface EventListProps {
  selectedDate?: Date | string;
  events: EventItem[];
  emptyMessage: string;
  scrollable?: boolean;
  className: string;
}

// ============================================= interface for props

// Props for a reusable table component
export interface TableProps {
  columns: Column[];
  dataSource: Record<string, any>[]; // Can handle any object shape
  pagination: {
    searchName: string;
    page: number;
    perPage: number;
    totalPages: number;
  };
  handleClientClick?: (_id: string) => void;
  // setRenderPage: React.Dispatch<React.SetStateAction<string>>;
}

// Props for a reusable button component
export interface ButtonProps {
  name: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Props for a dialog/modal component
export interface DialogProps {
  email?: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
  closeDialog: React.MouseEventHandler<HTMLButtonElement>;
}

// Props for an input field component
export interface InputProps {
  options?: FieldOption[];
  value?: string | number | Date | boolean | string[];
  readOnly?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: string | React.ReactNode;
  endIcon?: string | React.ReactNode;
  rows?: number;
  error?: string | false;
}

// Generic props with a setter for type switching
export interface Props {
  setType: React.Dispatch<React.SetStateAction<string>>;
}

// Props for profile & notification components
export interface ProfileAndNotProps {
  className?: string;
}

// Props for a reset password component
export interface ResetPsdProps {
  email?: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
}

export interface clientIntakeProp {
  renderPage?: string;
  setRenderPage: React.Dispatch<React.SetStateAction<string>>;
  selectedClientInfo?: {};
}
export interface clientDetailProp {
  selectedClientInfo?: {};
  setSelectedClientInfo?: React.Dispatch<React.SetStateAction<string>>;
  setRenderPage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ReportFormProps {
  openDogId: string;
  setIsReportFormRender: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationTopBarProp {
  name: string;
  onClick: () => void;
}

export interface ClientIntakeFormProp {
  client?: Partial<ClientForm>;
  dog: Partial<DogForm>;
  contract: Partial<ContractForm>;
  clientId?: string;
}

// for step 1 and 2
export interface StepFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formData: ClientIntakeFormProp;
  image: string;

  handleFieldChange: (
    section: keyof ClientIntakeFormProp,
    name: string,
    value: any
  ) => void;
  handleImageUpdate: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;

  selectedClientInfo: {};
  errors: Record<string, string>;
  validateStep: (step: number) => boolean;
}

type SignerType = "dogOwner" | "representative";
type SignType = Record<SignerType, any>;

// for step 3
export interface Step3FormProps {
  handleSubmit: () => void;
  formData: ClientIntakeFormProp;
  handleFieldChange: (
    section: keyof ClientIntakeFormProp,
    name: string,
    value: any
  ) => void;
  errors: Record<string, string>;
  sign: SignType;
  setSign: React.Dispatch<React.SetStateAction<SignType>>;
}

export interface ImageUploadProps {
  image: string;
  name?: string;
  handleImageUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoaderProps {
  isBlue?: boolean;
  padding?: number;
}
export interface ModalProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  onConfirm: () => void;
  icon: string;
  isOpen: boolean;
  onClose: () => void;
}

// ================> for store redux

// for auth directory
export interface LoginRedux {
  email: string;
  password: string;
}

export interface ChangePsdRedux {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ResetPsdRedux {
  email: string;
}

export interface UpdateProfileRedux {
  email: string;
  phoneNumber: string;
  location: string;
}

// for session directory
export interface SessionParamsRedux {
  startDate: string;
  endDate: string;
}

// for client intake form directory
export interface ClientGetRedux {
  searchName: string;
  page?: number;
  perPage?: number;
}

export interface ClientCreateRedux {
  name: string;
  date: string;
  address: string;
  subdivision: string;
  phone1: string;
  phone2?: string;
  referral?: string;
  evaluationSchedule: string;
  problem: string;
}

export interface UploadImgRedux {
  formDataImg: FormData;
  name: string;
}

export interface AddReportRedux {
  dogId: string;
  goal: string;
  behavior: string;
  sessionNotes: string;
}
