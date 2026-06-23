import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SiGithub, SiX, SiGmail } from 'react-icons/si';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Send, Linkedin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  const socialLinks = [
    { name: 'Email', icon: <SiGmail />, href: '#', color: 'hover:text-red-500' },
    { name: 'GitHub', icon: <SiGithub />, href: '#', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: <SiX />, href: '#', color: 'hover:text-white' },
  ];

  return (
    <div className="py-24 relative border-t border-white/5 bg-background">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Let's build something <span className="text-primary">extraordinary.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md leading-relaxed">
              I'm currently open for new opportunities. Whether you have a project in mind or just want to chat about tech, feel free to reach out.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl glass-card border border-white/5 text-muted-foreground transition-all duration-300 ${social.color} hover:-translate-y-1 hover:border-white/20`}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="font-medium text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/5"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 rounded-full"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-black/20 border-white/10 focus-visible:ring-primary h-14 rounded-xl transition-all duration-300 focus:bg-black/40"
                          />
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
                        <FormLabel className="text-foreground/80">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-black/20 border-white/10 focus-visible:ring-primary h-14 rounded-xl transition-all duration-300 focus:bg-black/40"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="resize-none bg-black/20 border-white/10 focus-visible:ring-primary min-h-[150px] rounded-xl transition-all duration-300 focus:bg-black/40"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_rgba(var(--primary),0.4)] transition-all hover:shadow-[0_0_30px_0px_rgba(var(--primary),0.6)] group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
