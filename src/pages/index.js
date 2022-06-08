import { Box } from "@chakra-ui/react";
import { TableRooms } from "./components/TableRooms";


export default function Home() {
  return (
    <Box px={{'md' : '25px'}}>
      <TableRooms />
    </Box>
  )
}
