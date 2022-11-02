import React from "react";
import {useState} from "react";
import SearchInputView from "./SearchInputView";


export const SearchInput = () => {
  const [searchText, setSearchText] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return <SearchInputView
    searchText={searchText}
    setSearchText={setSearchText}
    onChange={onChange}
    onSubmit={submitHandler}
  />
};

