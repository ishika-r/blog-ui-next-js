import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="row mt-5">
      <div className="col-12 text-center">
        <p>
          Copyright ©. All Rights Reserved. — Designed with love by
          <Link href="https://untree.co">Untree.co</Link> Distributed by
          <Link href="https://themewagon.com">ThemeWagon</Link>
          {/* License information: https://untree.co/license/ */}
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
