import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import App from './App.tsx'
import './index.css'

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dropzone/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppBase />
	</React.StrictMode>,
);

const theme = createTheme({
	
});

const AppBase = () => {
	return (
		<MantineProvider
			theme={theme}
			defaultColorScheme="dark"
		>
			<Notifications />
			<ModalsProvider>
				<App />
			</ModalsProvider>
		</MantineProvider>
  	);
}
