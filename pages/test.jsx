import {request} from '../request'
import Gif from '../components/index/Gif'

export default function Test({data}){
  return(
    <div>
      {data.map((gif)=>(
        <div key={gif.id}>
          <Gif 
          anime={gif.images.downsized.url} 
          fixed={gif.images.original_still.url}
          info={{title:gif.title,width:gif.width,heigth:gif.height }} 
          />
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await request.get('v1/gifs/trending?api_key=ov5oCUoBAwq1LDVTLwNPz1KVQPqxLYTp&limit=1',{
    baseURL: 'https://api.giphy.com' 
  })
  const data =await res.data.data
  return {
    props: {data}
  }
}