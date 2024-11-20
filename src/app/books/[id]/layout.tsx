export default function BookLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<div>
				<h2>Featured books section</h2>
			</div>
		</>
	);
}