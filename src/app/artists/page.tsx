import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import TabWrapper from "@/components/tab-wrapper";
import ArtistsWrapper from "@/components/artists-wrapper";

export default async function Page() {
    const session = await getServerSession(authOptions);
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
