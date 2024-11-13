import React from "react";
import PaginationInfo from "../Atoms/Pagination/PaginationInfo";
import ButtonUI from "../Atoms/Button/Button";
import { PaginationControlsProps } from "../../../types";


const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPrevious,
  onNext,
}) => {
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  return (
    <div className="table_foot">
      <PaginationInfo startIndex={startIndex} endIndex={endIndex} totalEntries={totalEntries} />
      <div className="pagination">
        <ButtonUI text="Previous" onClick={onPrevious} disabled={currentPage === 1} className="prev" />
        <span className="current_page">Page {currentPage}</span>
        <ButtonUI text="Next" onClick={onNext} disabled={currentPage >= Math.ceil(totalEntries / entriesPerPage)} className="next" />
      </div>
    </div>
  );
};

export default PaginationControls;
