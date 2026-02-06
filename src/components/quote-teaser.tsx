import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function QuoteTeaser() {
  return (
    <Card>
      <CardContent className="space-y-3">
        <p className="text-sm font-semibold">Quick quote teaser</p>
        <p className="text-xs text-slate-600">
          Select trade, service, and urgency. Get a guide price range in seconds.
        </p>
        <Button asChild size="sm" variant="outline">
          <Link href="/live-features">Try the estimator</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
