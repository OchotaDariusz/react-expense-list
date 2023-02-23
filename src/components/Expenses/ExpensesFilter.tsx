import React from "react";
import "./ExpensesFilter.scss";

type Props = {
  onSelectYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterRef: React.LegacyRef<HTMLSelectElement>;
};

const ExpensesFilter = ({ onSelectYear, filterRef }: Props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onSelectYear} ref={filterRef} defaultValue="any">
          <option value="any">Any</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;