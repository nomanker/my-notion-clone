import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Test(){
    return (
        <div>
            <div>你好，我终于可以点击了</div>
            <Button variant="destructive" size="lg">
                点击我
            </Button>
            <Button variant="outline" size="lg">
                啊哈
            </Button>
            <Button className="text-white bg-indigo-500">
                这优点糟糕
            </Button>
            <ModeToggle/>
        </div>
    )
}