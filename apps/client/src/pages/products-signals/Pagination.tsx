import { Button } from "@sb/mui-lib";
import { lastPage, page } from "./store";

export const Pagination = () => {
  const handlePagination = (offset: number) => {
    page.value = page.value + offset;
  };

  return (
    <div className="sn-flex sn-justify-center sn-gap-5 sn-items-center">
      <Button
        size="small"
        variant="outlined"
        onClick={() => handlePagination(-1)}
        disabled={page.value === 1}
      >
        Prev
      </Button>
      <span>{page.value}</span>
      <Button
        size="small"
        variant="outlined"
        onClick={() => handlePagination(1)}
        disabled={page.value === lastPage.value}
      >
        Next
      </Button>
    </div>
  );
};
