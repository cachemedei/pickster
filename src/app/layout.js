import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <header>
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
