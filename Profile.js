import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfiniteScroll from "./InfiniteScroll";

export default function Profile() {
  return (
    // <div>
    //   <Navbar />

    //   <div className="d-flex bg-dark-subtle align-item-start p-3">
    //     {/* <div className=""> */}
    //     <img
    //       className="rounded-circle img-fluid"
    //       style={{ width: 100 + "px", align: "right" }}
    //       src="data:image/png;base64,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"
    //       alt="..."
    //     />
    //     {/* </div> */}
    //     <p className="mx-3">
    //       <h1>
    //         Welcome
    //         <br />
    //         <h4>
    //           <a href="/">Name</a>
    //         </h4>
    //       </h1>
    //     </p>
    //     {/* <div className="container"><h1 className="tcol-1 my-1">Dashboard</h1></div> */}
        
    //   </div>
    //   {/* <div className="container list-group my-3 w-50">
    //     <a
    //       href="#"
    //       className="list-group-item list-group-item-action"
    //       aria-current="true"
    //     >
    //       <div className="d-flex w-100 justify-content-between text-success">
    //         <h5 className="mb-1">My Communities</h5>
    //         <small>3 days ago</small>
    //       </div>
    //       <p className="mb-1 text-success">Join Amazing communitites!</p>
    //       <small className="text-success">Make your own Community </small>
    //     </a>
    //     <a
    //       href="https://www.google.com"
    //       className="list-group-item list-group-item-action text-danger"
    //     >
    //       <div className="d-flex w-100 justify-content-between">
    //         <h5 className="mb-1">Write Blogs</h5>
    //         <small className="text-body-secondary">3 days ago</small>
    //       </div>
    //       <p className="mb-1">Write for communities.</p>
    //       <small className="text-body-secondary">
    //         Post Announcemet on your Community
    //       </small>
    //     </a>
    //     <a
    //       href="#"
    //       className="list-group-item list-group-item-action text-warning"
    //     >
    //       <div className="d-flex w-100 justify-content-between">
    //         <h5 className="mb-1">List group item heading</h5>
    //         <small className="text-body-secondary">3 days ago</small>
    //       </div>
    //       <p className="mb-1">Some placeholder content in a paragraph.</p>
    //       <small className="text-body-secondary">
    //         And some muted small print.
    //       </small>
    //     </a>
    //   </div> */}
    //   <Footer />
    // </div>

    <div>
      <Navbar />

      {/* Profile Section */}
      <div className="">
        <div className="d-flex align-items-center justify-content-start bg-light p-4 rounded shadow-sm">
          
          {/* Profile Picture */}
          <div className="me-4">
            <img
              className="rounded-circle img-fluid"
              style={{ width: "120px" }}
              src="data:image/png;base64,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"
              alt="Profile"
            />
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-dark mb-2">
              Welcome, <span className="text-primary">Name</span>
            </h1>
            <h4 className="text-muted">
              <a href="/" className="text-decoration-none text-muted">Profile</a>
            </h4>
          </div>
        </div>
      </div>
      <InfiniteScroll/>
      <Footer />
    </div>
  );
}
