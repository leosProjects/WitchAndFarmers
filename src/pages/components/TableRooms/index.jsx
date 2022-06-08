import { RoomItem } from "./RoomItem";

const {
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Text,
  Heading,
} = require("@chakra-ui/react");

const SimulaDB = {
  Rooms: [
    {
      id: 1,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 2,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 2,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 3,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 4,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 5,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 6,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 7,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 8,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 9,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 10,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 11,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 12,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 13,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 14,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 15,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 16,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 17,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 18,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 19,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 20,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 21,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
    {
      id: 22,
      Token: "R10N21",
      limit_players: 5,
      players: 3,
      creator: "Jubz",
    },
    {
      id: 23,
      Token: "T5MZ77",
      limit_players: 10,
      players: 5,
      creator: "PidGay",
    },
  ],
};

export function TableRooms() {
  return (
    <TableContainer
      whiteSpace="wrap"
      borderRadius={{ sm: "2rem", md: "2rem" }}
      maxH="95vh"
      my="20px"
      py="20px"
      w={{ sm: "100%", md: "65%" }}
      bgColor="blackAlpha.600"
      overflowY="auto"
    >
      <Heading pb="20px" textAlign="center" fontSize="2rem" fontWeight="bold">
        List Rooms
      </Heading>
      <Center>
        <Table w="90%">
          <Thead>
            <Tr>
              <Th fontSize={"1rem"} fontWeight="bold" textAlign="center">
                Room
              </Th>
              <Th fontSize={"1rem"} fontWeight="extrabold" textAlign="center">
                Creator
              </Th>
              <Th fontSize={"1rem"} fontWeight="extrabold" textAlign="center">
                Amount Players
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {SimulaDB.Rooms.map((Room) => {
              return <RoomItem key={Room.id.toString()} roomInfo={Room} />;
            })}
          </Tbody>
        </Table>
      </Center>
    </TableContainer>
  );
}
