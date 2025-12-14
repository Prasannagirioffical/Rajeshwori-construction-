import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-heading text-white mb-4">Contact Us</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wide">
            <span>Home</span>
            <span className="text-secondary">/</span>
            <span className="text-secondary">Contact</span>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Get In Touch</h4>
              <h2 className="text-4xl font-bold font-heading text-primary mb-8">Have a project in mind?</h2>
              <p className="text-gray-600 mb-12">
                We are always ready to discuss your construction needs. Whether it's a small inquiry or a large tender, feel free to reach out to us.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-secondary rounded-sm shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Our Location</h3>
                    <p className="text-gray-600">Gulmi, Nepal<br/>Lumbini Province</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-secondary rounded-sm shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Phone Number</h3>
                    <p className="text-gray-600">+977-1-4XXXXXX<br/>+977-98XXXXXXXX</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-secondary rounded-sm shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Email Address</h3>
                    <p className="text-gray-600">info@rajeshworiconstruction.com.np<br/>support@rajeshworiconstruction.com.np</p>
                  </div>
                </div>

                 <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 flex items-center justify-center text-secondary rounded-sm shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Working Hours</h3>
                    <p className="text-gray-600">Sunday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 md:p-12 shadow-lg border-t-4 border-secondary">
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Hari Thapa" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Hari@example.com" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+977-" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} className="bg-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." className="min-h-[120px] bg-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">Send Message</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.766588464753!2d83.42281777577034!3d27.93979997605007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39966f8e0efc9c9f%3A0x9b1a140e845ecef8!2srajesory%20construction%20pvt%20.Ltd!5e0!3m2!1sne!2snp!4v1765652346467!5m2!1sne!2snp"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
