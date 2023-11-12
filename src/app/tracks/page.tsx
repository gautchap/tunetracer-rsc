import { redirect } from "next/navigation";
import TracksWrapper from "@/components/tracks-wrapper";
import TabWrapper from "@/components/tab-wrapper";
import authGuard from "@/utils/auth-guard";

export default async function Page() {
    const session = await authGuard();
    if (!session) redirect("/");

    return (
        <>
            <TabWrapper
                short_term={<TracksWrapper session={session} range="short_term" />}
                medium_term={<TracksWrapper session={session} range="medium_term" />}
                long_term={<TracksWrapper session={session} range="long_term" />}
            />
        </>
    );
}
