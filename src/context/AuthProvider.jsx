import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = (name, photoURL) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		});
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	const logoutUser = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => unsubscribe();
	});

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		updateUserProfile,
		signInUser,
		signInWithGoogle,
		resetPassword,
		logoutUser,
	};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
