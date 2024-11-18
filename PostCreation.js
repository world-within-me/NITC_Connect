//initial code.
// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function PostCreation() {
//   return (
//     // <div>
//     //   <Navbar />
//     //   <div className="container  p-3 bg-secondary-subtle border border-secondary-subtle rounded my-5 width-50">
//     //     <h1>Post creation</h1>
//     //     <div className="container input-group mb-3 w-60">
//     //       <h5 className="my-2">
//     //         Post Title
//     //       </h5>
//     //       <input
//     //         type="text"
//     //         className="mx-2 form-control"
//     //         placeholder="Title of Post"
//     //         aria-label="Username"
//     //         aria-describedby="basic-addon1"
            
//     //       />
          
//     //     </div>
//     //     <h4>content</h4>
//     //       <textarea
//     //         className="form-control"
//     //         placeholder="Leave a comment here"
//     //         id="floatingTextarea"
//     //         style={{height:"200px"
//     //         }}
//     //       ></textarea>
//     //   <button className="my-4 btn btn-outline-dark ">Post</button>  
//     //   </div>
      
//     //   <Footer />
//     // </div>

//     <div>
//     <Navbar />
//     <div className="container p-4 bg-light border border-muted rounded my-3 shadow-lg">
//       <h1 className="text-center text-dark mb-4">Create a New Post</h1>
      
//       <div className="mb-4">
//         <h5 className="mb-2 text-secondary">Post Title</h5>
//         <input
//           type="text"
//           className="form-control rounded-3 p-3"
//           placeholder="Enter the title of your post"
//           aria-label="Post Title"
//           aria-describedby="post-title"
//         />
//       </div>

//       <div className="mb-4">
//         <h5 className="mb-2 text-secondary">Content</h5>
//         <textarea
//           className="form-control rounded-3"
//           placeholder="Write your post content here..."
//           style={{ height: "180px" }}
//         ></textarea>
//       </div>

//       <div className="d-flex justify-content-center">
//         <button className="btn  btn-outline-dark btn-lg px-2 py-1 shadow-sm hover-shadow-lg">
//           Publish Post
//         </button>
//       </div>
//     </div>
//     <Footer />
//   </div>

    
//   );
// }


/// enhanced code
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PostCreation() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview to the selected image
      };
      reader.readAsDataURL(file); // Convert the image file to a data URL for preview
    }
  };

  // Handle post submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the post submission (e.g., save to server, etc.)
    console.log({ title, content, image });
  };

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        {/* Card container for the form */}
        <div className="card shadow-lg p-4 rounded-4">
          <h1 className="text-center text-primary mb-4">Create a New Post</h1>

          {/* Post Title Input */}
          <div className="mb-4">
            <label htmlFor="postTitle" className="form-label fs-5 text-secondary">Post Title</label>
            <input
              id="postTitle"
              type="text"
              className="form-control rounded-3 p-3"
              placeholder="Enter the title of your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Post Content */}
          <div className="mb-4">
            <label htmlFor="postContent" className="form-label fs-5 text-secondary">Content</label>
            <textarea
              id="postContent"
              className="form-control rounded-3 p-3"
              placeholder="Write your post content here..."
              style={{ height: "150px" }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="postImage" className="form-label fs-5 text-secondary">Upload Image</label>
            <input
              id="postImage"
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mb-4">
              <h5 className="text-secondary">Image Preview:</h5>
              <img src={imagePreview} alt="Preview" className="img-fluid rounded-3" style={{ maxHeight: "300px" }} />
            </div>
          )}

          {/* Post Button */}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary rounded-3 shadow-sm hover-shadow-lg"
              onClick={handleSubmit}
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
