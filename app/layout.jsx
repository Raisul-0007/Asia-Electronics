import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "Asia Electronics",
  description:
    "Mobile, Electronics & Accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}