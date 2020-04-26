import React, { Suspense } from "react";
import Preloader from "../common/Preloader/Preloader";

export const WithSyspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
