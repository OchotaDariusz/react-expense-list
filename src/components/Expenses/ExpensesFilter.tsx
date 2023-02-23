import React from "react";
import { SelectEventHandler } from "../../general/types";
import "./ExpensesFilter.scss";

type Props = {
  onSelectYear: SelectEventHandler;
  filterRef: React.RefObject<HTMLSelectElement>;
};

const ExpensesFilter: React.FC<Props> = ({ onSelectYear, filterRef }) => {
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
