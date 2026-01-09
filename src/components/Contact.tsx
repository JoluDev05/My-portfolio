/**
 * Contact 
 * 
 */

/**
 * Node modules imports
 */
import {useForm} from "react-hook-form";
import {motion} from "motion/react";

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
     FormMessage,
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

export const Contact = () => {  
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
    });
    
    const onSubmit = (values: ContactFormValues) => {
        console.log(values);
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
                     >
                        Send Message
                     </Button>   
                </form>
            </Form>

        </motion.section>
    );
}