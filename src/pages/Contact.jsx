import { toast } from "react-toastify";
import SiteTitle from "../components/SiteTitle";
import { LuClock, LuMail, LuWorkflow } from "react-icons/lu";

const Contact = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 py-16'>
			<SiteTitle>Contact Us</SiteTitle>

			<div className='text-center mb-10'>
				<h2 className='text-4xl font-bold text-primary mb-3'>Let's Talk</h2>
				<p className='text-gray-600 dark:text-gray-400 max-w-xl mx-auto'>
					Have a question, idea, or want to collaborate? Reach out to the HistoTrack team—we'd love to hear from you!
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div className='grid gap-6'>
					<div className='bg-base-100 dark:bg-base-200 p-6 rounded-xl shadow-sm text-center sm:text-start'>
						<h4 className='text-xl font-semibold mb-2 text-secondary dark:text-primary'>
							<LuMail className="sm:inline mx-auto sm:mx-0" /> Email
						</h4>
						<p className='text-gray-600 dark:text-gray-400'>support@histotrack.com</p>
					</div>
					<div className='bg-base-100 dark:bg-base-200 p-6 rounded-xl shadow-sm text-center sm:text-start'>
						<h4 className='text-xl font-semibold mb-2 text-secondary dark:text-primary'><LuWorkflow className="sm:inline mx-auto sm:mx-0" /> Office</h4>
						<p className='text-gray-600 dark:text-gray-400'>Dhaka, Bangladesh (Remote Team)</p>
					</div>
					<div className='bg-base-100 dark:bg-base-200 p-6 rounded-xl shadow-sm text-center sm:text-start'>
						<h4 className='text-xl font-semibold mb-2 text-secondary dark:text-primary'><LuClock className="sm:inline mx-auto sm:mx-0" /> Hours</h4>
						<p className='text-gray-600 dark:text-gray-400'>Mon-Fri: 9AM - 6PM</p>
					</div>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.target.reset();
						toast.success("Thanks for reaching out! We'll get back to you soon.");
					}}
					className='bg-base-100 dark:bg-base-200 p-8 rounded-xl shadow-lg space-y-6'
				>
					<div>
						<label className='block text-sm font-medium mb-1'>Your Name</label>
						<input
							type='text'
							placeholder='Enter your name'
							className='input input-bordered w-full'
							required
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Your Email</label>
						<input
							type='email'
							placeholder='Enter your email'
							className='input input-bordered w-full'
							required
						/>
					</div>
					<div>
						<label className='block text-sm font-medium mb-1'>Message</label>
						<textarea
							rows={4}
							placeholder='Type your message...'
							className='textarea textarea-bordered w-full'
							required
						></textarea>
					</div>
					<button
						type='submit'
						className='btn btn-primary w-full'
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
