import React from 'react';
import { Button } from "@/components/shad/ui/button.jsx";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import axios from 'axios';


const LoginPage = () => {
    const { user } = useClerk();
    const navigate = useNavigate(); // Assuming you're using React Router v6

    const handleSignIn = async () => {
        try {
          
            navigate('/');
        } catch (error) {
            console.error('Sign in error:', error);
            navigate('/error');         }
    };

    const handleSignOut = async () => {
        try {
            await signOut(); // Attempt to sign out the user
            navigate('/login'); // Redirect the user to the login page after signing out
        } catch (error) {
            console.error('Sign-out error:', error);
            // Handle the error appropriately
            navigate('/error'); // Example redirection to an error page
        }

        useEffect(() => {
            if (user) {
                // Function to send user data to the backend
                const sendDataToBackend = async () => {
                    try {
                        const userData = {
                            clerkId: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            photo: user.avatarUrl, // Assuming avatarUrl is available
                        };
    
                        // Send user data to backend
                        await axios.post('/api/save-user-data', userData);
                        console.log('User data sent to backend successfully.');
                    } catch (error) {
                        console.error('Failed to send user data to backend:', error);
                    }
                };
    
                // Call the function to send user data
                sendDataToBackend();
            }
        }, [user]); // Re-run effect if user changes
    



    };

    return (
        <div>
            {!user? (

                <SignInButton>
                <Button onClick={handleSignIn} className="absolute top-0 right-0 m-4 bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                    Log In
                </Button>
                </SignInButton>
            ) : (
                <div className=" flex items-center space-x-2 absolute top-0 right-5 m-4 ">
              <UserButton className="w-10 h-13 rounded-full "/>
              <span className="text-sm font-medium">{user.firstName}</span>
              </div>
              

            )}
        </div>
    );
};

export default LoginPage;
