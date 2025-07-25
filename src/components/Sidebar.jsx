import { NavLink } from "react-router";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const commonStyles =
      "py-3 px-5 rounded-r-3xl flex items-center gap-2 hover:bg-indigo-700 hover:text-white";
    return isActive ? `${commonStyles} bg-indigo-700 text-white` : commonStyles;
  };

  return (
    <aside style={{boxSizing: 'border-box'}} className="flex flex-col gap-2 py-5 px-2 w-60 h-full border-r-2 border-solid border-grey-100">
      <NavLink className={getStyles} to="/">
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink className={getStyles} to="/important">
        <span className="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <span className="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
