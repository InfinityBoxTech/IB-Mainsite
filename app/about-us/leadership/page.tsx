import type { Metadata } from "next";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the team driving InfinityBox's mission across India—delivering integrated solutions for operations infrastructure.",
};

const leaders = [
  {
    name: "Leadership Team Member",
    role: "CEO / Founder",
    bio: "Vision and leadership placeholder. Replace with actual leadership information.",
    image: "/placeholder-avatar.png",
  },
  {
    name: "Leadership Team Member",
    role: "COO",
    bio: "Operations and execution placeholder. Replace with actual leadership information.",
    image: "/placeholder-avatar.png",
  },
  {
    name: "Leadership Team Member",
    role: "Head of Solutions",
    bio: "Solutions and innovation placeholder. Replace with actual leadership information.",
    image: "/placeholder-avatar.png",
  },
];

export default function Leadership() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Leadership
            </h1>
            <p className="text-xl text-neutral-600">
              Meet the team driving InfinityBox's mission across India.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <Card key={idx} hover={false}>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-neutral-400 text-sm">
                        Photo Placeholder
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-3">
                      {leader.role}
                    </p>
                    <p className="text-neutral-600 text-sm">{leader.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-neutral-500">
              <p>
                Note: Replace placeholder information with actual leadership
                details, photos, and bios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

