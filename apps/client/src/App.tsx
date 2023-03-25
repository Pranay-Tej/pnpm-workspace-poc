import { Button, SlidersIcon } from "mui-lib";
import "./App.css";

function App() {
  return (
    <div>
      <div
        className="sn-flex sn-items-center"
        style={{
          gap: "5px",
          marginBottom: "1em",
        }}
      >
        <Button variant="contained">Test</Button>
        <Button
          variant="contained"
          startIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
        >
          Icon
        </Button>
        <Button
          variant="contained"
          endIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
        >
          Icon
        </Button>
        <Button
          variant="contained"
          startIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
          endIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
        >
          Icon
        </Button>
        <Button
          size="small"
          variant="contained"
          startIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
          endIcon={<SlidersIcon stroke={"var(--whiteColor)"} />}
        >
          Icon
        </Button>
      </div>
      <div
        className="sn-flex sn-items-center"
        style={{
          gap: "5px",
          marginBottom: "1em",
        }}
      >
        <Button variant="outlined">Test</Button>
        <Button variant="outlined" startIcon={<SlidersIcon />}>
          Icon
        </Button>
        <Button variant="outlined" endIcon={<SlidersIcon />}>
          Icon
        </Button>
        <Button
          variant="outlined"
          startIcon={<SlidersIcon />}
          endIcon={<SlidersIcon />}
        >
          Icon
        </Button>
        <Button
          size="small"
          variant="outlined"
          startIcon={<SlidersIcon />}
          endIcon={<SlidersIcon />}
        >
          Icon
        </Button>
      </div>
    </div>
  );
}

export default App;
