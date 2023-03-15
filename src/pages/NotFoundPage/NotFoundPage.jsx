import { useRouteError, Link } from "react-router-dom"

const NotFoundPage = () => {
  const { error } = useRouteError();
  return (
    <div>NotFoundPage
      <div>{error.statusText || error.message}</div>
      <Link to='/' >Home</Link>
    </div>
  )
}

export default NotFoundPage