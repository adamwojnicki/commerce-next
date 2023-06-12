export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>prodcut layout</p>
      {children}
    </div>
  );
}
