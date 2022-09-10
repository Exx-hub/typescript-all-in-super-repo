import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // kinda like useHistory in RR
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooopss...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>home</a>
        </Link>{" "}
        page.
      </p>
    </div>
  );
};

export default NotFound;
