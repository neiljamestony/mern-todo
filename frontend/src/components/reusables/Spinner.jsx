import { Box, Skeleton } from '@mui/material'

export default function Spinner() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height={400}>
      <Box width="50%">
        <Skeleton width="100%" height={30}/>
        <Skeleton width="70%" height={30}/>
        <Skeleton width="40%" height={30}/>
      </Box>
    </Box>
  )
}
