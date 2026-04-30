import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BookCard() {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <img
        alt=""
        src="https://via.placeholder.com/200x300"
        className="w-full h-64 object-cover"
      />

      <CardContent className="p-4 space-y-2">
        <h3 className="font-semibold">Book Title</h3>

        <p className="text-sm text-muted-foreground">Author Name</p>

        <div className="flex justify-between items-center">
          <span className="font-bold">$40</span>
          <Button size="sm">Add</Button>
        </div>
      </CardContent>
    </Card>
  );
}
