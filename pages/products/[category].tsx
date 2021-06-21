import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const ProductCategory = () => {
    const router = useRouter()
    return <Layout>
        Category { router.query.category }
        <button onClick={ () => router.push('/') }>Homepage</button>
    </Layout>
}
export default ProductCategory