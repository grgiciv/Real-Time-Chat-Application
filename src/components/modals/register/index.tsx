"use client";
import {
  Modal,
  Button,
  TextInput,
  Text,
  PasswordInput,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

export default function Register() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <>
      <Button onClick={open} type="button" color="#990011">
        Register
      </Button>
      <Modal
        styles={{
          header: { backgroundColor: "#fcf6f5" },
          body: { backgroundColor: "#fcf6f5" },
        }}
        opened={opened}
        onClose={close}
        centered
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Title c="#990011" mb={20}>
            Register
          </Title>
          <Stack gap={5} align="stretch">
            <Text c="#990011">Full name:</Text>
            <TextInput
              mb={15}
              placeholder="Your full name"
              {...form.getInputProps("fullName")}
            />
            <Text c="#990011">Email:</Text>
            <TextInput
              mb={15}
              placeholder="Your email"
              {...form.getInputProps("email")}
            />
            <Text c="#990011">Username:</Text>
            <TextInput
              mb={15}
              placeholder="Your desired username"
              {...form.getInputProps("username")}
            />
            <Text c="#990011">Password:</Text>
            <PasswordInput mb={15} placeholder="Your password" />
            <Button type="submit" color="#990011">
              Register
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
}
