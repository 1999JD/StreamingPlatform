export default function Video({id}) {

  return (
    <div>
     
      <video id="videoPlayer" width={650} controls muted autoPlay>
        <source src={`/api/video/${id}`} type="video/mp4" />
      </video>
    </div>
  )
}

export async function getServerSideProps({params}) {
  const id = params.id
  return {props: {id}}
}
