export interface Data {
    [x: string]: any;
    category: string;
    subCategory: subCategory[];
  }
export interface subCategory{
    label: string;
    role: string;
}