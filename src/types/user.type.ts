export interface User {
  id: number; 
  address: string; 
  avatar: string; 
  email: string; 
  fullName: string; 
  phone: string; 
  active: boolean; 
  createdDate: string | null; 
  createdBy: string | null; 
  modifiedDate: string | null; 
  modifiedBy: string | null; 
}
