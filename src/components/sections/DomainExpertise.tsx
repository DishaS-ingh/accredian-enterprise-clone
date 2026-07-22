import Container from "../ui/Container";
import { domains } from "@/constants/domain";

export default function DomainExpertise() {
  return (
    <section
      id="domain"
      className="bg-white py-20"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl ${
                  index === domains.length - 1
                    ? "md:col-span-2 lg:col-start-2 lg:col-span-1"
                    : ""
                }`}
              >
                <Icon className="mx-auto h-14 w-14 text-blue-600" />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}