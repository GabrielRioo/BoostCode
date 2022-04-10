import '../assets/styles/Landing.css'
import {useFetch} from "../hooks/useFetch"

type Repository = {
  menuUid: string;
  menuId: number;
  name: string;
  routeName: string;
  isActive: boolean;
  iconName: string;
  menuItems: [{
    menuItemUid: string;
    menuItemId: number;
    name: string;
    isActive: boolean;
    routeName: string;
    menuId: number;
    menu: string;
  }]
}

function LandingPage() {
  const { data: repositories, isFetching } = 
    useFetch<Repository[]>("https://localhost:7284/api/menu" )
  // const [data, setData] = useState<Repository[]>([]);

  // useEffect(() => {
  //   axios.get('https://localhost:7284/api/menu')
  //     .then(response => {
  //       setData(response.data)
  //     })
      
  // }, [])

  // console.log('data: ',data)
  return (
    <>
      <h1>Getting Started</h1>
      
      { isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        console.log('repo ', repo)
        return(
          <>
            <p>menuUid: {`${repo.menuUid}`}</p>    
            <p>menuId  {`${repo.menuId}`}</p>    
            <p>name {`${repo.name}`}</p>    
            <p>routeName {`${repo.routeName}`}</p>    
          </>
        )
      })}
      
    </>
  )
}

export default LandingPage