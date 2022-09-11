import { Feed } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Box>

      <Stack direction="row" spacing={2}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
    
  );
}

export default App;
