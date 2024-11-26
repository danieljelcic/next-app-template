'use client'

import { useState } from "react";
import clsx from "clsx";

import { MyComp } from "./comp";

export default function App() {
    const [childPings, setChildPings] = useState<string[]>([]);
    const addChildPing = (newPing: string) => {
        setChildPings((prev) => [...prev, `Child pinged: ${newPing}`])
    }
    return (
        <div className="h-full">
        <div className="h-full flex flex-row items-center">
            <div className="w-full">
                Next App Template
                {
                    childPings.map((childPing, i) => {
                        return (
                            <p key={i}>{childPing}</p>
                        )
                    })
                }
            </div>
            <div className="w-full h-full">
                <MyComp prop={'Hello there'} funProp={addChildPing}/>
            </div>
        </div>
    </div>
    );
}
