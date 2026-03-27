import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="mx-auto flex max-w-6xl flex-col-reverse gap-8 px-4 py-16 sm:px-6 lg:mt-8 lg:flex-row lg:items-start lg:px-8"
		>
			<ContactForm />
			<ContactDetails />
		</motion.div>
	);
};

export default Contact;
