import { Card } from "@/component/card";
import Link from "next/link";

export default function Notification(){
    return <Card>
        <div>Archieve Notification</div>
        <div>
        <Link href="/complex-dashboard" 
        className="ml-2 rounded-lg bg-amber-500 cursor-pointer">Default</Link>
        </div>
        </Card>
}