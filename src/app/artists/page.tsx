import { redirect } from "next/navigation";
import TabWrapper from "@/components/tab-wrapper";
import ArtistsWrapper from "@/components/artists-wrapper";
import authGuard from "@/utils/auth-guard";

export default async function Page() {
    const session = await authGuard();
    if (!session) redirect("/");

    return (
        <>
            <TabWrapper
                short_term={<ArtistsWrapper session={session} range="short_term" />}
                medium_term={<ArtistsWrapper session={session} range="medium_term" />}
                long_term={<ArtistsWrapper session={session} range="long_term" />}
            />
        </>
    );
}
