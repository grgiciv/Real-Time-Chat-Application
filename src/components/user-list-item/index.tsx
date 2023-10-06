import { Group, Indicator, Avatar, Text, Button, Tooltip } from "@mantine/core";
import Link from "next/link";

export default function UserListItem({
  user,

  indicatorSize,
  textSize,
}: any) {
  return (
    <Button color="#990011" justify="space-between" size="xl" p={5}>
      <Link
        href={`/user/${user.userID}`}
        style={{
          textDecoration: "none",
          color: "white",
          padding: "5px",
          width: "100%",
        }}
      >
        <Tooltip label={`${user.fullName}`}>
          <Group gap={10} p={0} wrap="nowrap" justify="center">
            {user.is_online ? (
              <div
                style={{
                  borderRadius: 5,
                  boxShadow: "0px 0px 3px 3px green",
                  backgroundColor: "green",
                }}
              >
                <Indicator
                  color="green"
                  position="bottom-end"
                  size={indicatorSize}
                  offset={5}
                >
                  <Avatar src={user.avatarPicture} radius={5} alt="it's me" />
                </Indicator>
              </div>
            ) : (
              <div
                style={{
                  borderRadius: 5,
                  boxShadow: "0px 0px 3px 3px gray",
                  backgroundColor: "gray",
                }}
              >
                <Indicator
                  color="gray"
                  position="bottom-end"
                  size={indicatorSize}
                  offset={5}
                >
                  <Avatar src={user.avatarPicture} radius={5} alt="it's me" />
                </Indicator>
              </div>
            )}
            <Text pr={0} fz={textSize} truncate={true}>
              {user.fullName}
            </Text>
          </Group>
        </Tooltip>
      </Link>
    </Button>
  );
}
