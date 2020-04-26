import React, { useState } from "react";
import ClassUser from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pagesSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
  ...props
}) => {
  console.log(props);
  let pagesCount = Math.ceil(totalUsersCount / pagesSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className="">
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter((page) => {
          return (
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
          );
        })
        .map((page) => {
          return (
            <span
              className={({ [ClassUser]: currentPage === page }, ClassUser)}
              key={page}
              onClick={(e) => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

// const Paginator = (props) => {
//   let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
//   let pages = [];
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
//   }
//   return (
//     <div className={ClassUser["number-users__items"]}>
//       {pages.map((page) => {
//         return (
//           <span
//             onClick={() => {
//               props.onPageChanged(page);
//             }}
//             className={
//               // ClassUser["number-user__item"] &&
//               props.currentPage === page &&
//               ClassUser["number-user__item-active"]
//             }
//           >
//             {page}
//           </span>
//         );
//       })}
//     </div>
//   );
// };

export default Paginator;
