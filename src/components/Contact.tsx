/**
 * Contact 
 * 
 */

/**
 * Node modules imports
 */
import {useForm} from "react-hook-form";
import {motion} from "motion/react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

/**
 * Custom modules
 */
import { fadeUp } from "@/lib/animations";

/**
 * components
 */
import {
     Form, 
     FormControl,
     FormField,
     FormItem,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

/**
 * Types
 */
type ContactFormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;

};

// Inicializar EmailJS
emailjs.init({
    publicKey: 'NR_NkdxS7OKtP4aqh'
});

export const Contact = () => {  
    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
    
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
    });
    
    const onSubmit = async (values: ContactFormValues) => {
        setIsLoading(true);
        setSubmitMessage(null);
        
        try {
            const response = await emailjs.send(
                'service_erl1gpa',
                'template_m9k456d',
                {
                    subject: `Nuevo mensaje de contacto de ${values.name}`,
                    from_name: values.name,
                    to_email: 'jorgearcedev1@gmail.com',
                    from_email: values.email,
                    company: values.company,
                    phone: values.phone,
                    message: values.message,
                    reply_to: values.email
                }
            );
            
            if (response.status === 200) {
                setSubmitMessage({
                    type: 'success',
                    text: '✓ Mensaje enviado correctamente. Pronto recibirás una respuesta.'
                });
                form.reset();
                
                // Desaparecer el mensaje después de 6 segundos
                setTimeout(() => {
                    setSubmitMessage(null);
                }, 6000);
            }
        } catch (error) {
            console.error('Error sending the message:', error);
            setSubmitMessage({
                type: 'error',
                text: '✗ An error occurred while sending the message. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="mt-30 scroll-mt-10"
            id='contact'
        >  
            <SectionHeader
                subtitle="Contact"
                title={`Let's work together`}
            />
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="w-full mx-auto space-y-4 mt-10"
                >
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full ">
                                    <FormControl>
                                        <Input 
                                            placeholder="Your name"
                                            className="border-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    </FormItem>
                            )}
                        />

                         <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            placeholder="Company name"
                                            className="border-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    </FormItem>
                            )}
                        />   

                         <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            type="email"
                                            placeholder="you@example.com"
                                            className="border-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    </FormItem>
                            )}
                        />                     

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input 
                                            type="phone"
                                            placeholder="+1 234 567 890"
                                            className="border-0"
                                            {...field}
                                        />
                                    </FormControl>
                                    </FormItem>
                            )}
                        />       
                    </div>
                    

                     <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Your message"
                                            className="h-36 border-0"
                                            {...field}
                                            
                                        />
                                    </FormControl>
                                    </FormItem>
                            )}
                        /> 

                     <Button
                        type="submit"
                        size={'lg'}
                        disabled={isLoading}
                     >
                        {isLoading ? 'Enviando...' : 'Send Message'}
                     </Button>

                     {submitMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 rounded-lg text-center font-medium ${
                                submitMessage.type === 'success'
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-red-50 text-red-700 border border-red-200'
                            }`}
                        >
                            {submitMessage.text}
                        </motion.div>
                     )}   
                </form>
            </Form>

        </motion.section>
    );
}