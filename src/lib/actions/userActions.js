"use server";

import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function getUser(id) {
	dbConnect();
	const user = User.findById(id);
	return user;
}
