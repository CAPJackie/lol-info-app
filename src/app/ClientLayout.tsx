import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"site"}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
