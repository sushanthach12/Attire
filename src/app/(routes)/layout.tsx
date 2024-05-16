import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/components/providers/modal-provider";
import ToastProvider from "@/components/providers/toast-provider";
import React, { FC } from "react"

interface PagesLayoutProps {
    children: React.ReactNode
}

const PagesLayout: FC<PagesLayoutProps> = ({ children }) => {

    return <div>
        <ModalProvider />
        <ToastProvider />

        <Navbar />

        {children}

        <Footer />
    </div>
}

export default PagesLayout;