import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const selectNameFilter = useSelector((state) => state.filters.name);

  const dispatch = useDispatch();

  const changeFilter = (value) => {
    dispatch(filter(value));
  };

  return (
    <div className={css.container}>
      <div>Find contacts by name</div>
      <input
        type="text"
        className={css.input}
        value={selectNameFilter}
        onChange={(evt) => changeFilter(evt.target.value)}
      />
    </div>
  );
}
