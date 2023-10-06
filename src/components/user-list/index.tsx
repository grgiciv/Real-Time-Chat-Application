import { Stack, Title, Text, Paper } from "@mantine/core";

import UserListItem from "../user-list-item";

export default function UserList({ users }: any) {
  return (
    <Paper shadow="md" radius="md" withBorder p="xl" bg="#f7e8e6">
      <Title order={2}>
        <Text ta="center" c="#990011" fz={30}>
          Users:
        </Text>
      </Title>
      <Stack gap={20}>
        {users.map((user: any) => {
          return (
            <UserListItem
              key={user.fullName}
              user={user}
              avatarSize={35}
              textSize={15}
            />
          );
        })}
      </Stack>
    </Paper>
  );
}
