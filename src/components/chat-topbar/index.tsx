import { Group, Title } from "@mantine/core";
import Image from "next/image";
import UserTopBar from "../user-topbar";

export default function ChatTopBar({ chatroom, user }: any) {
  return (
    <Group justify="space-between" w="100%">
      <Image src="/icons/chat-logo.png" alt="Logo" width={120} height={120} />
      <Title fz={50} c="#990011">
        {chatroom.roomName.toUpperCase()}
      </Title>
      <UserTopBar
        user={user}
        avatarSize={60}
        indicatorSize={25}
        textSize={25}
      />
    </Group>
  );
}
