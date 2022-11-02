import React from "react";

export interface SearchSideProps {
  searchText: string | null
  setSearchText: (e: string) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: React.FormEventHandler<HTMLFormElement>
}