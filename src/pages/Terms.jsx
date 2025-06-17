const Terms = () => {
	return (
		<div className='max-w-4xl mx-auto px-4 py-12'>
			<h1 className='text-4xl font-bold mb-6 text-center'>Terms and Conditions</h1>

			<p className='mb-4 text-gray-700'>
				Welcome to <strong>Histo Track</strong>. These Terms and Conditions outline the rules and regulations for the
				use of our website and services.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>1. Acceptance of Terms</h2>
			<p className='text-gray-700 mb-4'>
				By accessing or using Histo Track, you agree to be bound by these terms. If you do not agree with any part of
				the terms, please do not use our services.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>2. User Accounts</h2>
			<p className='text-gray-700 mb-4'>
				To access certain features, you may be required to create an account. You are responsible for maintaining the
				confidentiality of your account and password.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>3. Use of Content</h2>
			<p className='text-gray-700 mb-4'>
				All artifacts and content uploaded by users must be historically appropriate, non-offensive, and must not
				violate copyright or intellectual property rights.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>4. Prohibited Activities</h2>
			<ul className='list-disc pl-6 text-gray-700 mb-4'>
				<li>Uploading harmful, misleading, or abusive content</li>
				<li>Spamming, phishing, or attempting to hack the system</li>
				<li>Violating any applicable laws or regulations</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>5. Termination</h2>
			<p className='text-gray-700 mb-4'>
				We reserve the right to suspend or terminate your access to the platform at any time if you violate these Terms
				and Conditions.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>6. Changes to Terms</h2>
			<p className='text-gray-700 mb-4'>
				We may revise these terms at any time without prior notice. By continuing to use the platform, you agree to the
				updated terms.
			</p>

			<h2 className='text-2xl font-semibold mt-8 mb-2'>7. Contact Us</h2>
			<p className='text-gray-700'>
				If you have any questions about these Terms, please contact us at{" "}
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

export default Terms;
