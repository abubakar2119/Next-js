import { Card } from "@/component/card";
import Link from "next/link";

export default function Notification(){
    return <Card>
        <div>Notification</div>
        <div>
        <Link href="/complex-dashboard/archieve" className="ml-2 rounded-lg bg-amber-500 cursor-pointer">Archieve</Link>
        </div>
        </Card>
}