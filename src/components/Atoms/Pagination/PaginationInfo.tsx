import React from "react";
import { PaginationInfoProps } from "../../../../types";



const PaginationInfo: React.FC<PaginationInfoProps> = React.memo(({ startIndex, endIndex, totalEntries }) => (
  <p>Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries</p>
));

export default PaginationInfo;
