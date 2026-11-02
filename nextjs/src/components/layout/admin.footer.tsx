'use client'
import { Layout } from 'antd';

const AdminFooter = () => {
    const { Footer } = Layout;

    return (
        <>
            <Footer style={{ textAlign: 'center' }}>
                Nextjs ©{new Date().getFullYear()} Created by Khanh Ngo
            </Footer>
        </>
    )
}

export default AdminFooter;