import { useRouter } from "next/router"
import ProductDetails from "../../components/Products/ProductDetails"
import axios from "axios"

export async function getServerSideProps(context) {
  const { id } = context.query
  let data

  try {
    const response = await axios.get(
      `https://auth-task-app.up.railway.app/api/products/${id}`
    )
    data = response?.data
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      data,
    },
  }
}

const Index = ({ data }) => {
  return <ProductDetails data={data} />
}

export default Index
