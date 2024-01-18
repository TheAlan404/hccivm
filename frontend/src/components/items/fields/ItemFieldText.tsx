import { Text, TypographyStylesProvider } from "@mantine/core"
import { useMemo } from "react"
import { markdownToHTML } from "../../../lib/utils/markdownToHTML";

export const ItemFieldText = ({
    data,
}: {
    data: string,
}) => {
    let html = useMemo(() => markdownToHTML(data), [data]);

    return (
        <TypographyStylesProvider>
            <div
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
        </TypographyStylesProvider>
    )
}
