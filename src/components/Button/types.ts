export default interface IButton {
  title?: string;
  $variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface IButtonContainer {
  $variant: "primary" | "secondary";
}
