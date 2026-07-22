import { Headset } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-10 lg:p-14">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-6">
              <div className="rounded-2xl bg-white p-5">
                <Headset className="h-12 w-12 text-blue-600" />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white">
                  Want to Learn More?
                </h2>

                <p className="mt-2 text-lg text-blue-100">
                  Get expert guidance for your team's success.
                </p>
              </div>
            </div>

            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}