import React from "react";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Connect
          </a>
          <div className="dropdown">
            <button
              className="btn  btn-outline-secondary btn-lg  d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillerule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item " href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="/">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item " href="/">
                  Something else
                </a>
              </li>
            </ul>
          </div>

{/* <div className="dropdown">
      <button
        className="btn btn-dark btn-lg  d-flex align-items-center"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-list me-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        
      </button>
      <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg">
        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.854 0l3.5 3.5a.5.5 0 0 1 0 .707l-9 9a.5.5 0 0 1-.707 0l-3.5-3.5a.5.5 0 0 1 0-.707l9-9a.5.5 0 0 1 .707 0zM11.5 1.5L3 10l2 2L13.5 3.5 11.5 1.5z"
              />
            </svg>
            Edit
          </a>
        </li>
        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5h1V.5a.5.5 0 0 1 .5-.5h3zM3 3v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3H3z"
              />
            </svg>
            Delete
          </a>
        </li>
        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle me-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM7 5h2v2H7V5zm0 3h2v6H7V8z"
              />
            </svg>
            Info
          </a>
        </li>
      </ul>
    </div> */}
        </div>
      </nav>
    </div>
  );
}
