const PrivacyPolicy = () => {
	return (
		<div className='max-w-4xl mx-auto px-4 py-12'>
			<h1 className='text-4xl font-bold mb-6 text-center'>Privacy Policy</h1>

			<p className='mb-4 text-gray-700 dark:text-gray-300'>
				At <strong>Histo Track</strong>, we are committed to protecting your privacy. This Privacy Policy explains how
				we collect, use, and safeguard your information when you use our platform.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>1. Information We Collect</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				We may collect personal information you provide, such as your name, email address, and profile image when you
				register or interact with our platform.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>2. How We Use Your Information</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>We use the collected information to:</p>
			<ul className='list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4'>
				<li>Provide and improve our services</li>
				<li>Personalize your experience</li>
				<li>Send notifications and updates</li>
				<li>Respond to inquiries and support requests</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>3. Data Sharing</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				We do not sell, trade, or rent your personal information to third parties. We may share limited data with
				service providers to help us operate the platform (e.g., Firebase).
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>4. Cookies & Tracking</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				We may use cookies and similar technologies to enhance your experience and analyze usage patterns. You can
				adjust your browser settings to disable cookies.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>5. Data Security</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				We take appropriate measures to protect your data using secure technologies. However, no method of transmission
				over the internet is 100% secure.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>6. Your Rights</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				You have the right to access, update, or delete your personal information. You may do so through your account
				settings or by contacting us.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>7. Changes to This Policy</h2>
			<p className='text-gray-700 dark:text-gray-300 mb-4'>
				We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
				effective date.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>8. Contact Us</h2>
			<p className='text-gray-700 dark:text-gray-300'>
				If you have questions about this policy, please email us at{" "}
				<a
					href='mailto:support@histotrack.com'
					target='_blank'
					className='text-primary underline'
				>
					support@histotrack.com
				</a>
				.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
