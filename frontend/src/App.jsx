import React, { useEffect, useState } from 'react'

export default function App() {
	return (
		<>
			<Header height={{ base: 50, md: 70 }} p={{ base: "xs", md: "md" }}>
				<Grid align="center">
					<Grid.Col span="content" align="center">
						<AppTitle />
					</Grid.Col>

					<Spacer />

					<Grid.Col span="auto" align="center">
						<SearchBar />
					</Grid.Col>

					<Spacer />

					<Grid.Col span="content">
						<AppOptions />
					</Grid.Col>
				</Grid>
			</Header>
			<Container size={useContainer ? (isMobile ? "xs" : "md") : "xl"}>
				<Outlet />
			</Container>
		</>
	);
}
