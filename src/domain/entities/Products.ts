import { Decimal } from "@prisma/client/runtime/library";

export interface Product {
    id?: number;
    category_id: number;
    name: string;
    description: string | null;
    price: Decimal;
    stock_quantity: number;
    sku: string;
    brand: string | null; 
    created_at?: Date | null; 
    updated_at?: Date | null; 
  }