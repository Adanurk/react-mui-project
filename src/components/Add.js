import { Fab, IconButton, Tooltip } from '@mui/material'
import {Add as AddIcon} from "@mui/icons-material"

const Add = () => {
  return (
    <>
    <Tooltip title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <IconButton>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </IconButton>
    </Tooltip>
    </>
  )
}

export default Add