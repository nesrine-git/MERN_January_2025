import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUpdateTitle from "../hooks/useUpdateTitle";

const BooksDisplay = () => {
  const [allBooks, setAllBooks] = useState([]);
  const nav = useNavigate();

  useUpdateTitle('Book Catalog'); // Update the title when this component is rendered

  useEffect(() => {
    axios.get("http://localhost:3000/api/books")
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.message); // Custom message
          setAllBooks(res.data.data);
      } else {
          console.error(res.data.message);
      }
      })

      .catch((err) => console.error("Error fetching books:", err));

  }, []);

  return (
    <div className="p-4">

      {allBooks.length === 0 ? (
        <p className="text-center text-muted">No books available.</p>
      ) : (
        <table className="table table-bordered table-hover table-striped text-center align-middle" style={{ borderCollapse:"separate", borderSpacing: "2px"}}>
          <thead className="thead-dark table-active">
            <tr>
              <th style={{border: "1px solid gray"}}>Title</th>
              <th style={{border: "1px solid gray"}}>Author</th>
              <th style={{border: "1px solid gray"}}>Page Count</th>
              <th style={{border: "1px solid gray"}}>Available</th>
              <th style={{border: "1px solid gray"}}>Book Page</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book) => (
              <tr key={book._id} style={{border: "1px solid gray"}}>
                <td style={{border: "1px solid gray"}}> {book.title}</td>
                <td style={{border: "1px solid gray"}}>{book.author}</td>
                <td style={{border: "1px solid gray"}}>{book.pages}</td>
                <td style={{border: "1px solid gray"}}>
                  {book.isAvailable ? "Yes" : "No"}
                </td>
                <td style={{border: "1px solid gray"}}>
                  <button className="btn btn-success" onClick={() => nav(`/books/${book._id}/details`)}>
                    Book Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BooksDisplay;
