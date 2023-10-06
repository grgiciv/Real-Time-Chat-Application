import { Stack, Title, Text, Button, Paper } from "@mantine/core";
import Link from "next/link";
import NewRoom from "../modals/new-room";
export default function ChatRoomList({ chatrooms }: any) {
  return (
    <Paper shadow="md" radius="md" withBorder p="xl" bg="#f7e8e6">
      <Title order={2}>
        <Text ta="center" c="#990011" fz={30}>
          Rooms:
        </Text>
      </Title>
      <Stack>
        {chatrooms.map((chatroom: any) => {
          return (
            <Button key={chatroom.roomName} color="#990011">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                href={`/chat-rooms/${chatroom.roomName}`}
              >
                {chatroom.roomName}
              </Link>
            </Button>
          );
        })}
        <NewRoom />
      </Stack>
    </Paper>
  );
}
