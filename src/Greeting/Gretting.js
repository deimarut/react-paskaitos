import { UserGreeting } from '../UserGreeting/UserGreeting';
import { GuestGreeting } from '../GuestGreeting/GuestGreeting';
import { LoginButton } from '../LoginButton/Loginbutton';
import { LogoutButton } from '../LogoutButton/LogoutButton';

export const Greeting = ({ isLoggedIn, unreadMessages }) => {

    const handleClick = () => {
        prompt('Test funkcija');
    }

    const handleLogout = () => {
        prompt('You have been logged out');
    }

    const handleLogin = () => {
        prompt('You have been logged in');
    }

    return (
        <div>
            {isLoggedIn ? <UserGreeting name ={ 'Deimantė' } onClick={handleClick}/> : <GuestGreeting />}
            {isLoggedIn ? <LogoutButton onClick={handleLogout}/> : <LoginButton onClick={handleLogin} />}
            {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages</h2>
            )}
            <button onClick={handleClick}>Test</button>
        </div>
    )
};