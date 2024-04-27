export interface BadgeDTO {
  id: string;
  name: string;
  textSize: string | null;
  stock: number | null;
  color: string | null;
  isButtonText: boolean;
  isButtonColor: boolean;
}
