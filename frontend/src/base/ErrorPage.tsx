import { Center, Code, Stack, Title } from "@mantine/core";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <Center h="100%">
            <Stack>
                <Title order={2}>
                    oopsies uwu
                </Title>

                <Text>An error occurred:</Text>
                <Code>
                    {error.statusText || error.message}
                </Code>
                <Text>Error has been printed to console</Text>
            </Stack>
        </Center>
    )
}
