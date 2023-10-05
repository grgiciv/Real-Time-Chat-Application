import { Title, Stack } from "@mantine/core";
import Layout from "chat/components/layout";
import LoginForm from "chat/components/login-form";
import Register from "chat/components/modals/register";

export default function Home() {
  return (
    <Layout>
      <Title size={80} c="#990011">
        Chat App
      </Title>
      <Stack>
        <LoginForm />
        <Register />
      </Stack>
    </Layout>
  );
}
