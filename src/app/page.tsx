import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import SpotifyLogo from "@/assets/spotify-logo.png";
import NotifyHeartDynamicGradient from "@/assets/notify-heart-dynamic-gradient.png";
import authGuard from "@/utils/auth-guard";

export default async function Page() {
    const session = await authGuard();
    return (
        <>
            <h1 className="text-5xl sm:text-6xl font-bold">TuneTracer</h1>
            {session ? <h2>You&apos;re connected ✅</h2> : <h2>You&apos;re not connected ❌</h2>}
            <Card className="my-6">
                <CardHeader className="pl-20">
                    <CardTitle>Historical Data</CardTitle>
                </CardHeader>
                <CardContent className="overflow-hidden sm:flex items-center justify-center">
                    <Image
                        className="float-left sm:float-none w-40 h-40 md:w-auto md:h-auto"
                        priority={true}
                        quality={100}
                        src={SpotifyLogo}
                        alt="Spotify Logo"
                        width={250}
                        height={250}
                        draggable="false"
                    />
                    <p>
                        Explore your top-played songs, artists, and musical preferences, and easily toggle between three
                        distinct time intervals.
                    </p>
                </CardContent>
            </Card>

            <Card className="my-6">
                <CardHeader className="pl-20">
                    <CardTitle>Create Playlist</CardTitle>
                </CardHeader>
                <CardContent className="overflow-hidden sm:flex items-center justify-center">
                    <Image
                        className="float-left sm:float-none w-40 h-40 md:w-auto md:h-auto"
                        priority={true}
                        quality={100}
                        src={NotifyHeartDynamicGradient}
                        alt="Playlist Logo"
                        width={250}
                        height={250}
                        draggable="false"
                    />
                    <p>
                        Generate a playlist using your personal charts with time and enjoy listening to it directly
                        within your Spotify application.
                    </p>
                </CardContent>
            </Card>
        </>
    );
}
