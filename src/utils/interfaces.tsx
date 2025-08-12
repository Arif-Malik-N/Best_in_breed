import type { JSX } from "react";

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
}

// Card data structure for hoem page etc.
export interface card {
  icon: string;
  name: string;
  number: number;
}

// Example row structure for table data
export interface rowData {
  name: string;
  email: string;
  phone: string;
  dogName: string;
  breed: string;
  dogAge: string;
  contract: string;
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
  value?: string | number;
  name: string;
  type: string;
  className: string;
  placeholder?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
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
}

// ============================================= interface for props

// Props for a reusable table component
export interface TableProps {
  columns: Column[];
  dataSource: Record<string, any>[]; // Can handle any object shape
}

// Props for a reusable button component
export interface ButtonProps {
  name: string;
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
  value: string | number;
  type: string;
  placeholder?: string;
  className?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  startIcon?: string | React.ReactNode;
  endIcon?: string | React.ReactNode;
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
