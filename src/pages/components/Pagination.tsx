import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="row text-start pt-5 border-top">
      <div className="col-md-12">
        <div className="custom-pagination">
          <span>1</span>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">4</Link>
          <span>...</span>
          <Link href="#">15</Link>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
