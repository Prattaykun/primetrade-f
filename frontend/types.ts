export interface UserData {
  phone?: string;
  role?: string;
  company?: string;
  bio?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  userData?: UserData;
}

export type TaskStatus = "pending" | "completed";

export interface Task {
  _id: string;
  title: string;
  status: "pending" | "completed";
  dueAt?: string;
}

