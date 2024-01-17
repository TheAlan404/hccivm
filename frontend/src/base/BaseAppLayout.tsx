import { AppShell, Button, Group } from "@mantine/core";
import { Outlet, Link } from "react-router-dom";
import { Logo } from "../components/branding/Logo";

export const BaseAppLayout = () => {
    return (
        <AppShell
            header={{
                height: 60,
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Button
                        variant="subtle"
                        color="gray"
                        component={Link}
                        to={"/"}
                        leftSection={<Logo />}
                    >
                        HCCIVM
                    </Button>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>

            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}
