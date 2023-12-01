import Link from "next/link";
import React from "react";

const AuthLink = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <span>
          <Link href={"/login"}>Login</Link>
        </span>
      ) : (
        <span>
          <Link href={"/logout"}>Logout</Link>
        </span>
      )}
    </>
  );
};

export default AuthLink;
