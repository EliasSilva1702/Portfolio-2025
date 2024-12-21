"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRef } from "react";
import emailjs from "emailjs-com";

const info = [
  {
    title: "Email",
    icon: <FaEnvelope />,
    description: "eliassilva170206@gmail.com",
  },
  {
    title: "Phone",
    icon: <FaPhoneAlt />,
    description: "(+598) 99-405-940",
  },
  {
    title: "Address",
    icon: <FaMapMarkerAlt />,
    description: "Montevideo, Uruguay",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccw5p3s", // Reemplaza con tu Service ID
        "template_b26ij1a", // Reemplaza con tu Template ID
        form.current,
        "YyX5EPXOArF4Jsi0t" // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error);
          toast.error("Oops, something went wrong!");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: "easeIn" }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-accent text-4xl">Let's work together</h3>
              <p className="text-white/60">
                Connect with me so we can chat and come to an agreement!
              </p>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Input type="text" placeholder="First name" name="user_name" />
                <Input
                  type="text"
                  placeholder="Last name"
                  name="user_lastname"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  name="user_phone"
                />
              </div>
              <Select name="user_service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="web-development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />

              <Button size="md" className="max-w-40" value="send" type="submit">
                Send message
              </Button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </motion.section>
  );
};

export default Contact;
