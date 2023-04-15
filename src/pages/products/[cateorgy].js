import {Link} from "@mui/material"
import axios from "axios"

export async function getServerSideProps(context) {
  const {cateorgy} = context.query

  try {
    const response = await axios.get(
      `https://auth-task-app.up.railway.app/api/products/search/${cateorgy}`
    )
    console.log(response.data)
    return {
      props: {
        data: response.data,
      },
    }
  } catch (error) {}
  return {
    props: {
      data: null,
    },
  }
}

const Index = ({data}) => {
  return (
    <>
      <div class="grid grid-cols-2 gap-x-4 gap-y-4 p-2">
        {data.map((item, index) => (
          <div
            className="w-44 h-60 shadow-lg rounded-md p-3 bg-white"
            key={item._id}
          >
            <Link href={`/productDetail/${item?._id}`}>
              <img
                src={item?.thumbnail}
                alt=""
                srcset=""
                className="object-cover w-40 h-40"
              />
            </Link>
            <p className="text-sm text-light-blue-600 mt-2 h-4 overflow-clip">
              {item.title}
            </p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Index
