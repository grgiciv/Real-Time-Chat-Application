import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Stack, Title, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function NewRoom() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      roomName: "",
    },
  });

  return (
    <>
      <Button onClick={open} color="#990011">
        + Add new Room
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        centered
        styles={{
          header: { backgroundColor: "#fcf6f5" },
          body: { backgroundColor: "#fcf6f5" },
        }}
      >
        <Stack>
          <Title ta="center" c="#990011">
            Create new room
          </Title>
          <Text ta="center" c="#990011">
            Room name:
          </Text>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Stack gap={20}>
              <TextInput
                placeholder="Enter desired room name"
                {...form.getInputProps("roomName")}
              />
              <Button type="submit" color="#990011">
                Create room
              </Button>
            </Stack>
          </form>
        </Stack>
      </Modal>
    </>
  );
}
