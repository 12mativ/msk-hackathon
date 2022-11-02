import React from "react";

export interface SelectLabelProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}