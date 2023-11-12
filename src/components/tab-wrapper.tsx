"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

type TabWrapperProps = {
    short_term: ReactNode;
    medium_term: ReactNode;
    long_term: ReactNode;
};

export default function TabWrapper({ short_term, medium_term, long_term }: TabWrapperProps) {
    return (
        <Tabs defaultValue="medium_term" className="flex flex-col my-4 md:my-8 mx-auto">
            <TabsList className="m-auto">
                <TabsTrigger value="short_term">4 last weeks</TabsTrigger>
                <TabsTrigger value="medium_term">6 last months</TabsTrigger>
                <TabsTrigger value="long_term">All time</TabsTrigger>
            </TabsList>
            <TabsContent value="short_term">{short_term}</TabsContent>
            <TabsContent value="medium_term">{medium_term}</TabsContent>
            <TabsContent value="long_term">{long_term}</TabsContent>
        </Tabs>
    );
}
