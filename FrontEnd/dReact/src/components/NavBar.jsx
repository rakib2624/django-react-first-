import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

export const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <Link to={"/"}>
            <h3 className="btn btn-ghost text-xl">Notes</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter the input"
              className="input input-bordered w-24 md:w-auto rounded-none rounded-l-lg"
            />
          </div>
          <button className="btn input-bordered rounded-none rounded-r-lg">
            Search
          </button>
        </div>
        <Link to={"/add-note"} className="navbar-end">
          <button className="btn input-bordered rounded-lg">
            <FaPlus />
            Add Note
          </button>
        </Link>
      </div>
    </div>
  );
};
