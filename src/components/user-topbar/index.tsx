import { Avatar, Group, Text, Indicator, Paper } from "@mantine/core";
import Link from "next/link";

export default function UserTopBar({
  user,
  avatarSize,
  indicatorSize,
  textSize,
}: any) {
  return (
    <Paper shadow="sm" withBorder p="md" bg="#990011" radius="md">
      <Link
        href={`/user/${user.userID}`}
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <Group gap={15} wrap="nowrap">
          {user.is_online ? (
            <div
              style={{
                borderRadius: 25,
                boxShadow: "0px 0px 8px 6px green",
                backgroundColor: "green",
              }}
            >
              <Indicator
                color="green"
                position="bottom-end"
                size={indicatorSize}
                offset={5}
              >
                <Avatar
                  src={user.avatarPicture}
                  radius="xl"
                  alt="it's me"
                  h={avatarSize}
                  w={avatarSize}
                />
              </Indicator>
            </div>
          ) : (
            <div
              style={{
                borderRadius: 25,
                boxShadow: "0px 0px 8px 6px gray",
                backgroundColor: "gray",
              }}
            >
              <Indicator
                color="gray"
                position="bottom-end"
                size={indicatorSize}
                offset={5}
              >
                <Avatar
                  src={user.avatarPicture}
                  radius="xl"
                  alt={user.fullName}
                  h={avatarSize}
                  w={avatarSize}
                />
              </Indicator>
            </div>
          )}

          <Text pr={5} fz={textSize}>
            {user.fullName}
          </Text>
        </Group>
      </Link>
    </Paper>
  );
}
