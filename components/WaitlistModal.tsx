import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function WaitlistModal({ setClick }: any) {
  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center backdrop-blur-md">
      <Card className="w-1/3">
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle>Join Waitlist</CardTitle>
            <CardDescription>Enter your best email</CardDescription>
          </CardHeader>
          <Button onClick={() => setClick(false)} variant="ghost">
            X
          </Button>
        </div>

        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
