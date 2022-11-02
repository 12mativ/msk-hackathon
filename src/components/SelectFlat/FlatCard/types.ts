import React from "react";

export interface FlatCardProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
