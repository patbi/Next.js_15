export default async function Book({ params }: { params: { id: string } }) {
	const { id } = await params;
	return <h1>Book: {id}</h1>;
}