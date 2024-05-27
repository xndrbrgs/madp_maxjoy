import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="container-fluid">
      <div className="row mt-md">
        <div className="col-12 flex justify-between">
          <div className="relative w-[250px] h-md">
            <Image
              src={"/assets/images/logo_museo_arte_ponce.png"}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="base flex">
            <p className="font-bold">English</p>
            <p>/Spanish</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
