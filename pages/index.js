import axios from "axios"

const Index = props => {
  return <div>The API responded: { props.hello }</div>
}

Index.getInitialProps = async () => {
  const query = "{ hello }"
  const response = await axios.post("http://localhost:3000/api/graphql", {
    query
  })

  return { ...response.data.data }
}

export default Index
