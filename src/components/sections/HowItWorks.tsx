import Container from "../ui/Container";
import { howItWorks } from "@/constants/howItWorks";

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            How We <span className="text-blue-600">Deliver Results</span>
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            A simple three-step learning journey
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {howItWorks.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-blue-100 bg-blue-50 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-sm font-bold text-blue-600">
                  {index + 1}
                </div>

                <div className="mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                  <Icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}