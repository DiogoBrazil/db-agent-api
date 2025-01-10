export interface Customer {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    phone: string | null; 
    created_at?: Date | null; 
    updated_at?: Date | null; 
  }