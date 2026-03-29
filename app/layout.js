import './globals.css';

export const metadata = {
  title: 'Junk or No Junk',
  description: 'Quickly check if a food item is likely junk food.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
