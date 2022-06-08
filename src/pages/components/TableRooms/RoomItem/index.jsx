import { Box, LinkBox, Th, Tr } from "@chakra-ui/react";
import Link from "next/link";

export function RoomItem(props) {
  const { roomInfo } = props;
  return (
    <Link href={`/sala/${roomInfo.Token}`}>
      <Tr
        cursor="pointer"
        _hover={{bg: 'Teal'}}
        transition="all .5s"
       >
        <Th textAlign='center'
         fontWeight='bold'
         fontSize={'.8rem'}
        > 
            {roomInfo.Token}
        </Th>
        <Th textAlign="center" 
         fontWeight='bold'
         fontSize={'.8rem'}
        >
            {roomInfo.creator}
        </Th>
        <Th textAlign={"center"}
         fontWeight='bold'
         fontSize={'.8rem'}
        >
            {`${roomInfo.players} / ${roomInfo.limit_players}`}{" "}
        </Th>
      </Tr>
    </Link>
  );
}
