import { CheckCircle2, Mail, Hammer, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "You Order",
    description: "Complete your purchase through our secure checkout",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Get Confirmation Email",
    description: "Receive order confirmation and payment receipt via email",
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    title: "We Build",
    description: "Your piece is handcrafted with care and attention to detail",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "We Ship",
    description: "Carefully packaged and shipped with tracking information",
  },
];

export function OrderTimeline() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-2">
          Order Process
        </h3>
        <p className="text-muted-foreground">
          Here's what happens after you place your order
        </p>
      </div>

      <div className="relative">
        {/* Horizontal Timeline line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden md:block" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className={cn(
                  "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-background mb-4",
                  "border-primary text-primary"
                )}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-0 h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-border border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
