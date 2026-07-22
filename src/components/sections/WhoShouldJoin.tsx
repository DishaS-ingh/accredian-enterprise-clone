import Image from "next/image";
import Container from "../ui/Container";
import { audience } from "@/constants/whoShouldJoin";

export default function WhoShouldJoin() {
  return (
    <section id="join" className="py-20">
      <Container>
        <div className="rounded-3xl bg-blue-600 p-10 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-gray-200/80 text-lg">
                Who Should Join?
              </p>

              <h2 className="mt-2 text-5xl font-bold text-gray-200">
                Strategic Skill
                <br />
                Enhancement
              </h2>

              <Image
                src="/images/professionals.png"
                alt="Professionals"
                width={420}
                height={420}
                className="mt-10"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {audience.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 p-6 backdrop-blur"
                  >
                    <Icon className="h-10 w-10 text-gray-200" />

                    <h3 className="mt-4 text-2xl font-semibold text-gray-200">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-200/80">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}