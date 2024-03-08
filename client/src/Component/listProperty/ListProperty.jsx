import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { getAllPropertys } from "../../redux/actions/actionProperty";
import PropertyCard from "../propertyCard/PropertyCard";
import "./listProperty.css";

const ListProperty = () => {
  const { propertys } = useSelector((state) => state.propertyReducer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0); // State to manage the current page
  const itemsPerPage = 12; // Number of items per page

  useEffect(() => {
    dispatch(getAllPropertys());
  }, [dispatch]);

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Logic to calculate start and end index of the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPropertys = propertys.slice(startIndex, endIndex);

  return (
    <div>
      <div className="list">
        {currentPropertys.map((el) => (
          <PropertyCard key={el.id} property={el} />
        ))}
      </div>
      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(propertys.length / itemsPerPage)} // Calculate total number of pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ListProperty;
