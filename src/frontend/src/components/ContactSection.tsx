import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Loader2, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { mutate, isPending, isSuccess } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { name, email, message },
      {
        onSuccess: () => {
          toast.success("Message sent! We'll be in touch soon.");
          setName("");
          setEmail("");
          setMessage("");
        },
        onError: () => {
          toast.error("Couldn't send message. Please try again.");
        },
      },
    );
  };

  return (
    <section id="contact" className="w-full py-24 bg-[oklch(0.97_0.012_60)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-[oklch(0.35_0.07_42)] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[oklch(0.22_0.052_42)] tracking-wide">
            VISIT & CONNECT
          </h2>
          <div className="w-24 h-0.5 bg-[oklch(0.72_0.13_72)] mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="font-serif font-bold text-2xl text-[oklch(0.22_0.052_42)]">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[oklch(0.72_0.13_72)] mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-sans font-medium text-[oklch(0.22_0.052_42)]">
                    Address
                  </p>
                  <p className="text-sm text-[oklch(0.45_0.04_42)]">
                    Ground Floor, Shop No. 1, Gala Business Centre,
                  </p>
                  <p className="text-sm text-[oklch(0.45_0.04_42)]">
                    2, HL College Road, Near Reliance Fresh,
                  </p>
                  <p className="text-sm text-[oklch(0.45_0.04_42)]">
                    Navrangpura, Ahmedabad, Gujarat 380006
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[oklch(0.72_0.13_72)] mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-sans font-medium text-[oklch(0.22_0.052_42)]">
                    Phone
                  </p>
                  <a
                    href="tel:+918511123254"
                    className="text-sm text-[oklch(0.45_0.04_42)] hover:text-[oklch(0.72_0.13_72)] transition-colors"
                  >
                    +91 85111 23254
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="text-[oklch(0.72_0.13_72)] mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-sans font-medium text-[oklch(0.22_0.052_42)]">
                    Hours
                  </p>
                  <p className="text-sm text-[oklch(0.45_0.04_42)]">
                    Mon–Fri: 7:00 AM – 8:00 PM
                  </p>
                  <p className="text-sm text-[oklch(0.45_0.04_42)]">
                    Sat–Sun: 8:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="h-full min-h-72 rounded-2xl overflow-hidden border-2 border-dashed border-[oklch(0.86_0.025_55)] bg-[oklch(0.93_0.018_58)] flex flex-col items-center justify-center gap-4 p-8">
              <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.13_72/0.15)] flex items-center justify-center">
                <MapPin size={28} className="text-[oklch(0.72_0.13_72)]" />
              </div>
              <div className="text-center">
                <p className="font-serif font-semibold text-lg text-[oklch(0.22_0.052_42)]">
                  The Messy Door Cafe
                </p>
                <p className="text-sm text-[oklch(0.45_0.04_42)] mt-1">
                  Gala Business Centre, Navrangpura
                </p>
                <p className="text-sm text-[oklch(0.45_0.04_42)]">
                  Ahmedabad, Gujarat 380006
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Gala+Business+Centre+HL+College+Road+Navrangpura+Ahmedabad+Gujarat+380006"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.map_marker"
                className="text-xs px-4 py-2 bg-[oklch(0.22_0.052_42)] text-[oklch(0.97_0.012_60)] rounded-full hover:bg-[oklch(0.35_0.07_42)] transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-serif font-bold text-2xl text-[oklch(0.22_0.052_42)] mb-6">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.panel"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-sans font-medium text-[oklch(0.35_0.07_42)] uppercase tracking-widest mb-1.5"
                >
                  Name
                </label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="border-[oklch(0.86_0.025_55)] focus:ring-[oklch(0.72_0.13_72)] bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-sans font-medium text-[oklch(0.35_0.07_42)] uppercase tracking-widest mb-1.5"
                >
                  Email
                </label>
                <Input
                  id="contact-email"
                  data-ocid="contact.email.input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="border-[oklch(0.86_0.025_55)] focus:ring-[oklch(0.72_0.13_72)] bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-sans font-medium text-[oklch(0.35_0.07_42)] uppercase tracking-widest mb-1.5"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?"
                  required
                  rows={4}
                  className="border-[oklch(0.86_0.025_55)] focus:ring-[oklch(0.72_0.13_72)] bg-white resize-none"
                />
              </div>
              {isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="text-sm text-green-700 bg-green-50 rounded-lg p-3"
                >
                  ✓ Message sent successfully!
                </div>
              )}
              <Button
                type="submit"
                disabled={isPending}
                data-ocid="contact.submit_button"
                className="w-full bg-[oklch(0.72_0.13_72)] hover:bg-[oklch(0.80_0.10_72)] text-[oklch(0.15_0.04_42)] font-sans font-semibold text-sm tracking-widest uppercase rounded-full py-3 transition-all duration-300"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "SEND MESSAGE"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
