import { Button } from "@sb/mui-lib";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PER_PAGE } from "./constants";
import { productActions } from "./store";
import { selectPage, selectTotal } from "./store/selectors";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  const lastPage = useMemo(() => Math.ceil(total / PER_PAGE), [total]);

  const dispatch = useDispatch();

  const handlePagination = (offset: number) => {
    dispatch(productActions.setPage(page + offset));
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <Button
        size="small"
        variant="outlined"
        onClick={() => handlePagination(-1)}
        disabled={page === 1}
      >
        Prev
      </Button>
      <span>{page}</span>
      <Button
        size="small"
        variant="outlined"
        onClick={() => handlePagination(1)}
        disabled={page === lastPage}
      >
        Next
      </Button>
    </div>
  );
};
