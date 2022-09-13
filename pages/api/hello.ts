// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface UserResponse {
	name: string;
	age: number;
	active: boolean;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<UserResponse>
) {
	res.status(200).json({ name: "John Doe", age: 25, active: true });
}
