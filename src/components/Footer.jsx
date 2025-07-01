import { CiMail, CiMapPin, CiPhone } from "react-icons/ci";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
	return (
		<div>
			<footer className='bg-base-200 text-base-content py-16'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
						{/* Brand Section */}
						<div className='col-span-1 md:col-span-2'>
							<div className='flex items-center space-x-2 mb-4 text-primary'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-10 w-10'
									fill='none'
									viewBox='-2.4 0 39.9 39.9'
									stroke='currentColor'
								>
									<g
										id='Group_57'
										data-name='Group 57'
										transform='translate(-223 -130.1)'
									>
										<path
											id='Stroke-1'
											d='M251,144v25m-21,0V144m7,2v23m7-23v23m-16,0h25'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
										/>
										<path
											id='Stroke-2'
											d='M227.5,138.1a2.689,2.689,0,0,1,2.7-2.7,3.372,3.372,0,0,1,3.4,3.4,4.268,4.268,0,0,1-4.3,4.3,5.335,5.335,0,0,1-5.3-5.3,6.7,6.7,0,0,1,6.7-6.7h19.7a6.7,6.7,0,0,1,6.7,6.7,5.335,5.335,0,0,1-5.3,5.3,4.268,4.268,0,0,1-4.3-4.3,3.372,3.372,0,0,1,3.4-3.4,2.689,2.689,0,0,1,2.7,2.7'
											fill='none'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
										/>
										<path
											id='Stroke-3'
											d='M234,139h13'
											fill='none'
											strokeLinecap='square'
											strokeWidth='2'
										/>
									</g>
								</svg>
								<span className='text-4xl font-bold'>HistoTrack</span>
							</div>
							<p className='leading-relaxed mb-6 max-w-md'>
								Preserving and sharing the world's most precious historical treasures. Discover, learn, and connect with
								ancient civilizations through our comprehensive artifact database.
							</p>
							<div className='flex space-x-4 text-xl'>
								<a
									href='https://github.com/md-zeon'
									target='_blank'
									className='hover:text-primary transition-colors'
								>
									<FaGithub className='w-5 h-5' />
								</a>
								<a
									href='https://x.com/'
									target='_blank'
									className='hover:text-primary transition-colors'
								>
									<FaTwitter className='w-5 h-5' />
								</a>
								<a
									href='https://www.instagram.com/zeonrahaman/'
									target='_blank'
									className='hover:text-primary transition-colors'
								>
									<FaInstagram className='w-5 h-5' />
								</a>
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
							<ul className='space-y-2'>
								<li>
									<NavLink
										to='/'
										className='hover:text-primary transition-colors'
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/all-artifacts'
										className='hover:text-primary transition-colors'
									>
										All Artifacts
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/my-artifacts'
										className='hover:text-primary transition-colors'
									>
										My Artifacts
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/add-artifact'
										className='hover:text-primary transition-colors'
									>
										Add Artifact
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/liked-artifacts'
										className='hover:text-primary transition-colors'
									>
										Liked Artifacts
									</NavLink>
								</li>
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className='font-semibold text-lg mb-4'>Contact</h3>
							<ul className='space-y-3'>
								<li className='flex items-center'>
									<CiMail className='w-4 h-4 mr-2' />
									<span>info@histotrack.com</span>
								</li>
								<li className='flex items-center'>
									<CiPhone className='w-4 h-4 mr-2' />
									<span>(+880) 1734-567354</span>
								</li>
								<li className='flex items-center'>
									<CiMapPin className='w-4 h-4 mr-2' />
									<span>Museum District, Dhaka City</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='border-t border-gray-800 pt-8 text-center'>
						<p>
							&copy; {new Date().getFullYear()} Histo Track. All rights reserved. |
							<NavLink
								to='/privacy-policy'
								className='hover:text-primary transition-colors ml-2'
							>
								Privacy Policy
							</NavLink>{" "}
							|
							<NavLink
								to='/terms'
								className='hover:text-primary transition-colors ml-2'
							>
								Terms & Conditions
							</NavLink>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
