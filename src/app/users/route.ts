export const users = [
	{ id: 1, name: "Next Js"},
	{ id: 2, name: "JavaScript"},
];

export async function GET() {
	return Response.json(users);
}

export async function POST(request: Request) {
	
}