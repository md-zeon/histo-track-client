import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
	const { user } = useAuth();
	const links = (
		<>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/all-artifacts'>All Artifacts</NavLink>
			</li>
			{user && (
				<li>
					<NavLink to='/add-artifact'>Add Artifact</NavLink>
				</li>
			)}
		</>
	);
	return (
		<nav className='navbar bg-base-100 shadow-sm'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							{" "}
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>{" "}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
					>
						{links}
					</ul>
				</div>
				<Link
					to='/'
					className='btn btn-ghost text-xl'
				>
					HistoTrack
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{links}</ul>
			</div>
			<div className='navbar-end'>
				{user ? (
					<div className='dropdown dropdown-end'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle avatar'
						>
							<div className='w-10 rounded-full'>
								<img
									alt={user?.displayName}
									src={user?.photoURL}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2'
						>
							<li className="text-xs px-2 font-bold">{user?.displayName}</li>
							<li>
								<NavLink to='/my-artifacts'>My Artifacts</NavLink>
							</li>
							<li>
								<NavLink to='/liked-artifacts'>Liked Artifacts</NavLink>
							</li>
							<li>
								<button className='btn btn-neutral'>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					<Link
						to='/login'
						className='btn btn-primary'
					>
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
