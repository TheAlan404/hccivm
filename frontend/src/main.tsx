import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { BaseRouter } from "./base/BaseRouter.tsx";
import './index.css'

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';

const theme = createTheme({
	
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider
			theme={theme}
			defaultColorScheme="dark"
		>
			<Notifications />
			<ModalsProvider>
				<BaseRouter />
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>,
);


