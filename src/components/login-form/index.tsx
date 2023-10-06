"use client";
import { TextInput, Button, Stack, Text, PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
export default function LoginForm() {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    /* validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    }, */
  });
  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Stack>
        <Stack gap={5} align="stretch">
          <Text ta="center" c="#990011" size="30px">
            Username:
          </Text>
          <TextInput
            withAsterisk
            placeholder="Enter username"
            {...form.getInputProps("username")}
          />
        </Stack>
        <Stack gap={5} align="stretch">
          <Text ta="center" c="#990011" size="30px">
            Password:
          </Text>
          <PasswordInput
            withAsterisk
            placeholder="Enter password"
            {...form.getInputProps("password")}
          />
        </Stack>

        <Button mt={10} type="submit" color="#990011">
          Log in
        </Button>
      </Stack>
    </form>
  );
}
