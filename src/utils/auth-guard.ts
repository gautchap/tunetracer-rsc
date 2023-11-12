import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth-options";

export default async function authGuard() {
    const session = await getServerSession(authOptions);
    return session;
}
